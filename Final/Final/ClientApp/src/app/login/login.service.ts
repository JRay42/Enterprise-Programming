import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TokenResponse } from './token-response';
import { UserCredentials } from './user-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  accessToken: string;
  public redirectUrl: string;
  tokenRequestUrl = '/api/login';

  constructor(private http: HttpClient) {
    // this.loginUrl = `https://github.com/login/oauth/authorize?client_id=${environment.clientId}`
  }

  setToken(token: string) {
    this.accessToken = token;
  }

  getToken(): string {
    return this.accessToken;
  }

  setRedirectUrl(url: string) {
    localStorage.setItem('redirectUrl', url);
  }

  getRedirectUrl() {
    return localStorage.getItem('redirectUrl');
  }

  requestAccessToken(code: string): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.tokenRequestUrl, { "code": code });
  }

  login(userCredentials: UserCredentials) {
    return this.http.post(this.tokenRequestUrl + '/login', userCredentials).pipe(
      catchError(this.handleError)
    );
  }

  createUser(userCredentials: UserCredentials) {
    return this.http.post(this.tokenRequestUrl + '/create', userCredentials).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error)}`
      );
      if (error.status === 404) {
        return throwError("That resource could not be found.");
      }
    }
    // return an observable with a user-facing error message
    return throwError("Invalid credentials, please try again.");
  }

}

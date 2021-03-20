import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { UserApiList } from './user-api-list';
import { catchError } from "rxjs/operators";
import { UserFollowerDetails } from './user-follower-details';
import { UserRepoDetails } from './user-repo-details';
import { RepositoryApiList } from '../repository/repository-api-list';
import { RepositoryApiResource } from '../repository/repository-api-resource';
import { UserApiResource } from './user-api-resource';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl: string = "https://api.github.com/";
  constructor(private httpClient: HttpClient) {}

  // Search method to return User observable
  gitHubSearch(query: string):Observable<User> {
    return this.httpClient
      .get<User>(`${this.baseApiUrl}users/${query}`)
      .pipe(catchError(this.handleError));
  }

  // https://api.github.com/search/users?q=octocat&page=0&per_page=10
  queryUsers(query: string, page: number, per_page: number): Observable<UserApiList> {
    return this.httpClient
      .get<UserApiList>(`${this.baseApiUrl}search/users?q=${ query }&page=${ page }&per_page=${ per_page }`)
      .pipe(catchError(this.handleError));
  }

  getRepos(user: any): Observable<RepositoryApiResource[]> {
    return this.httpClient
      .get<RepositoryApiResource[]>(`${this.baseApiUrl}users/${ user }/repos`)
      .pipe(catchError(this.handleError));
  }

  getFollowers(user: string): Observable<UserApiResource[]> {
    return this.httpClient
      .get<UserApiResource[]>(`${this.baseApiUrl}users/${ user }/followers`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      if (error.status === 404) {
        return throwError("ERROR 404: Resource could not be found.");
      }
      if (error.status === 401) {
        return throwError("ERROR 401: Access denied.");
      }
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}

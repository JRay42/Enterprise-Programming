import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TodoSettings } from './todo-settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsManagementService {

  private baseUrl = '/api/Settings';

  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get<TodoSettings>(this.baseUrl + '/' + 1)
      .pipe(catchError(this.handleError));
  }

  editSettings(todoSettings: TodoSettings) {
    return this.http.put(this.baseUrl, todoSettings)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      if (error.status === 404) {
        return throwError("That resource could not be found.");
      }
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TodoCustom } from './todo-custom';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TodoManagementService {

  private baseUrl = '/api/todo';
  private todos: TodoCustom[];

  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get<TodoCustom[]>(this.baseUrl)
      .pipe(
        map<TodoCustom[], TodoCustom[]>(todos => {
          todos.forEach(todo => {
            todo.due = moment.utc(todo.due).local().toDate();
          })
          return todos;
        }),
        catchError(this.handleError));
  }

  save(todo: TodoCustom) {
    return this.http.post(this.baseUrl, todo)
    .pipe(catchError(this.handleError));
  }

  editTodo(todo: TodoCustom) {
    return this.http.put(this.baseUrl, todo)
      .pipe(catchError(this.handleError));
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
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

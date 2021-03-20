import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Repository } from './repository';
import { RepositoryApiList } from './repository-api-list';
import { RepositoryApiResource } from './repository-api-resource';
import { RepositoryCommitDetails } from './repository-commit-details';
import { RepositoryIssueDetails } from './repository-issue-details';

@Injectable({
  providedIn: 'root'
})

export class RepositoryService {

  // Base Api Url from: https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}
  private baseApiUrl: string = "https://api.github.com/";
  constructor(private httpClient: HttpClient) {}

  //https://api.github.com/repos/{owner}/{repo}",
  // Search method to return Repo observable
  gitHubSearch(fullName: string):Observable<Repository> {
    return this.httpClient
      .get<Repository>(`${this.baseApiUrl}repos/${ fullName }`)
      .pipe(catchError(this.handleError));
  }

  queryRepos(query: string, page: number, per_page: number): Observable<RepositoryApiList> {
    return this.httpClient
      .get<RepositoryApiList>(`${this.baseApiUrl}search/repositories?q=${ query }&page=${ page }&per_page=${ per_page }`)
      .pipe(catchError(this.handleError));
  }

  getIssues(full_name: string):   Observable<RepositoryIssueDetails[]> {
    return this.httpClient
      .get<RepositoryIssueDetails[]>(`${this.baseApiUrl}repos/${ full_name }/issues`)
      .pipe(catchError(this.handleError));
  }

  getCommits(full_name: string): Observable<RepositoryCommitDetails[]> {
    return this.httpClient
      .get<RepositoryCommitDetails[]>(`${this.baseApiUrl}repos/${ full_name }/commits`)
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

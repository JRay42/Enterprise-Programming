import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Base Api Url from: https://api.github.com/search/users?q={query}{&page,per_page,sort,order}
  private baseApiUrl: string = "https://api.github.com/users/";
  constructor(private httpClient: HttpClient) {}

  // Search method to return User observable
  gitHubSearch(query: string):Observable<User> {
    return this.httpClient
      .get<User>(`${this.baseApiUrl}${query}`);
  }
}

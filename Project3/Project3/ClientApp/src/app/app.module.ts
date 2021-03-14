import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
// import { UserSearchComponent } from './user-search/user-search.component';
// import { RepoSearchComponent } from './repo-search/repo-search.component';
import { LoginComponent } from './login/login.component';
import { GitHubSearchComponent } from './git-hub-search/git-hub-search.component';
// import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    // UserSearchComponent,
    // RepoSearchComponent,
    LoginComponent,
    GitHubSearchComponent,
    // UsersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GitHubSearchComponent, pathMatch: 'full' },
      // { path: 'UserSearch', component: UserSearchComponent },
      // { path: 'RepoSearch', component: RepoSearchComponent },
      { path: 'Login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

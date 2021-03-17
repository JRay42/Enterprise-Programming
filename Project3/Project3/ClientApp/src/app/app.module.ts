import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './login/login.component';
import { GitHubSearchComponent } from './git-hub-search/git-hub-search.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { UsersSearchComponent } from './users-search/users-search.component';
import { LoadingComponent } from './loading/loading.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';
import { AuthGuard } from './login/auth.guard';
import { AuthInterceptor } from './login/auth.interceptor';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    GitHubSearchComponent,
    RepositoryComponent,
    UserComponent,
    UsersSearchComponent,
    LoadingComponent,
    UserDetailComponent,
    RepositoryDetailComponent,
    // FontAwesomeModule
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GitHubSearchComponent, pathMatch: 'full' },
      { path: 'RepoSearch', component: RepositoryComponent },
      { path: 'UserSearch', component: UsersSearchComponent },
      { path: 'user/:login', component: UserDetailComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

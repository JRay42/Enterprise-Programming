import { AppComponent } from './app.component';
import { AuthGuard } from './login/auth.guard';
import { AuthInterceptor } from './login/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoManagementComponent } from './todo-management/todo-management.component';
import { TodoSettingsComponent } from './todo-settings/todo-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavMenuComponent,
    RegisterComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoManagementComponent,
    TodoSettingsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    DataTablesModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TodoManagementComponent, pathMatch: "full", canActivate: [AuthGuard] },
      { path: 'settings', component: TodoSettingsComponent, canActivate: [AuthGuard]  },
      { path: 'admin/todo', component: TodoManagementComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [TodoAddComponent, TodoEditComponent],
})
export class AppModule { }

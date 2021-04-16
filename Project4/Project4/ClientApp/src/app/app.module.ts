import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoManagementComponent } from './todo-management/todo-management.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoSettingsComponent } from './todo-settings/todo-settings.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TodoListComponent,
    TodoManagementComponent,
    TodoAddComponent,
    TodoSettingsComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    DataTablesModule,
    RouterModule.forRoot([
      { path: '', component: TodoManagementComponent, pathMatch: "full"},
      { path: 'settings', component: TodoSettingsComponent },
      { path: 'admin/todo', component: TodoManagementComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TodoAddComponent, TodoEditComponent],
})
export class AppModule { }

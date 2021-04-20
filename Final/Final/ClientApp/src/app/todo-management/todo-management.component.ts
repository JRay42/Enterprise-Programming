import { AfterViewInit, Component, OnDestroy, OnInit, Renderer, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoCustom } from './todo-custom';
import { TodoManagementService } from './todo-management.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { TodoSettingsComponent } from '../todo-settings/todo-settings.component';

@Component({
  selector: 'app-todo-management',
  templateUrl: './todo-management.component.html',
  styleUrls: ['./todo-management.component.css'],
})
export class TodoManagementComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  pastDue: boolean;
  immanentlyDue: boolean;
  warningDays: number;

  filter: string;
  public todos: TodoCustom[];
  today: Date;

  constructor(private http: HttpClient, private mgmtService: TodoManagementService, private modalService: NgbModal) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.get();
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      processing: true
    };
    this.filter = 'active';
    this.warningDays = 2;
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  get() {
    this.mgmtService.get().subscribe(
      (todos) => {
        this.todos = todos;
        this.rerender();
      }
    );
  }

  add() {
    this.modalService.open(TodoAddComponent).result.then(() => {
      this.get();
    });
  }

  settings(today: Date) {
    this.modalService.open(TodoSettingsComponent).result.then(() => {
      this.get();
    });
  }

  edit(todo: TodoCustom) {
    const modal = this.modalService.open(TodoEditComponent);
    modal.componentInstance.setTodo(todo);
    modal.result.then(() => {
      this.get();
    });
  }

  deleteTodo(id: number) {
    this.mgmtService.delete(id).subscribe((response: any) => {
        this.get();
      });
  }

  todosFiltered(): TodoCustom[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.done);
    } else if (this.filter === 'done') {
      return this.todos.filter(todo => todo.done);
    }

    return this.todos;
  }

  isPastDue(todo: TodoCustom) {
    this.pastDue = todo.due <= new Date();
    return this.pastDue;
  }

  isImmanentlyDue(todo: TodoCustom) {
    this.today = new Date();
    this.today.setDate(this.today.getDate() + this.warningDays);
    this.immanentlyDue = todo.due <= this.today;
    return this.immanentlyDue;
  }
}

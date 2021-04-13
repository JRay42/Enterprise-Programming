import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { TodoCustom } from './todo-custom';
import { TodoManagementService } from './todo-management.service';

@Component({
  selector: 'app-todo-management',
  templateUrl: './todo-management.component.html',
  styleUrls: ['./todo-management.component.css']
})
export class TodoManagementComponent implements OnInit {

  public todos: TodoCustom[];

  constructor(private mgmtService: TodoManagementService, private modalService: NgbModal) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.mgmtService.get().subscribe(
      (todos) => {
        this.todos = todos;
      }
    );
  }

  add() {
    this.modalService.open(TodoEditComponent).result.then(() => {
      this.get();
    });
  }

}

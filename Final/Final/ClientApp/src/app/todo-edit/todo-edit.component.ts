import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TodoCustom } from '../todo-management/todo-custom';
import { TodoManagementService } from '../todo-management/todo-management.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  faCalendar = faCalendar;
  dueDate: NgbDateStruct;
  dueTime: NgbTimeStruct;
  todo: TodoCustom;

  constructor(public activeModal: NgbActiveModal, private mgmtService: TodoManagementService) { }

  ngOnInit() {
  }

  public setTodo(todo: TodoCustom) {
    this.todo = todo;
    this.dueDate = { year: this.todo.due.getFullYear(), month: this.todo.due.getMonth(), day: this.todo.due.getDate() };
    this.dueTime = { hour: this.todo.due.getHours(), minute: this.todo.due.getMinutes(), second: this.todo.due.getSeconds() };
    console.log(this.todo)
  }

  save() {
    this.todo.due.setHours(this.dueTime.hour);
    this.todo.due.setMinutes(this.dueTime.minute);
    this.todo.due.setSeconds(this.dueTime.second);
    this.todo.due.setFullYear(this.dueDate.year, this.dueDate.month, this.dueDate.day);
    this.mgmtService.editTodo(this.todo).subscribe(
      () => {
        this.activeModal.close();
      }
    )
  }
}

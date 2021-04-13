import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TodoCustom } from '../todo-management/todo-custom';
import { TodoManagementService } from '../todo-management/todo-management.service';
import * as moment from 'moment';

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
    this.todo = new TodoCustom();
    this.dueTime = { hour: 12, minute: 30, second: 0 };
  }

  save() {
    const dueDate = new Date();
    const utcDate = moment(dueDate).utc();
    this.todo.due = utcDate.toDate();
    this.mgmtService.save(this.todo).subscribe(
      () => {
        this.activeModal.close();
      }
    )
  }

}

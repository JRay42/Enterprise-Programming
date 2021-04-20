import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TodoManagementService } from '../todo-management/todo-management.service';

@Component({
  selector: 'app-todo-settings',
  templateUrl: './todo-settings.component.html',
  styleUrls: ['./todo-settings.component.css']
})
export class TodoSettingsComponent implements OnInit {

  dueTime: NgbTimeStruct;
  today: Date;
  warningDays: number;

  constructor(public activeModal: NgbActiveModal, private mgmtService: TodoManagementService) { }

  ngOnInit() {
  }

  save() {
    this.activeModal.close();
    return this.warningDays;
  }
}

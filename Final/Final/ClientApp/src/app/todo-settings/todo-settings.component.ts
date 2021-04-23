import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { SettingsManagementService } from './settings.service';
import { TodoSettings } from './todo-settings';

@Component({
  selector: 'app-todo-settings',
  templateUrl: './todo-settings.component.html',
  styleUrls: ['./todo-settings.component.css']
})
export class TodoSettingsComponent implements OnInit {

  dueTime: NgbTimeStruct;
  today: Date;
  warningDays: number;

  public todoSettings: TodoSettings;

  constructor(public activeModal: NgbActiveModal, private mgmtService: SettingsManagementService) { }

  ngOnInit() {
    this.get();
  }

  save() {
    this.mgmtService.editSettings(this.todoSettings).subscribe((response: any) => {
      this.get();
      this.activeModal.close();
    });
  }

  get() {
    this.mgmtService.get().subscribe(
      (todoSettings) => {
        this.todoSettings = todoSettings;
      }
    );
  }
}

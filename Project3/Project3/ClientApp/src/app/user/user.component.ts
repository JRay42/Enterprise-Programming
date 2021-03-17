import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() userLogin: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    if(this.userLogin) {
      this.userService.gitHubSearch(this.userLogin).subscribe(
        (user:User) => {
          this.user = user;
        }
      );
    }
  }
}

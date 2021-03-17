import { Component, OnInit } from '@angular/core';
import { UserApiList } from '../user/user-api-list';
import { UserApiResource } from '../user/user-api-resource';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})

export class UsersSearchComponent implements OnInit {

  results: UserApiResource[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.queryUsers('mike', 1, 10)
    .subscribe(
      (results:UserApiList) => {
        this.results = results.items;
      }
    );
  }
}

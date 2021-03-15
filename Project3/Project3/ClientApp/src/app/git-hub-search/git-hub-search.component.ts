import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-git-hub-search',
  templateUrl: './git-hub-search.component.html',
  styleUrls: ['./git-hub-search.component.css']
})

export class GitHubSearchComponent implements OnInit {
  searchForm = new FormGroup({
    query: new FormControl(''),
  });

  selectedSearchType: string;
  searchOptions: any = [
    'Search Users',
    'Search Repositories'
  ];

  result: User;
  error: string;

  constructor(private userService:UserService) {}

  ngOnInit() {}

  // Event handler for radiobutton's event change
  radioChangeHandler(event:any) {
    this.selectedSearchType = event.target.value;
  }

  gitHubSearch() {
    var radio = this.selectedSearchType;
    console.log('Performed a gitHub search');
    // Invoke GitHub service to fectch data from query
    if(radio == 'Search Users')
      // Update model that's used to display result with User information
      this.userService.gitHubSearch(this.searchForm.get('query').value)
      .subscribe(
        (user:User) => {
          this.result = user;
        },
        (error: any) => {
          this.error = error;
        }
      );
    else
      // Update model that's used to display result with Repository information
      this.result;
  }

}

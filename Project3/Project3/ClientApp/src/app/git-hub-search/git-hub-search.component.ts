import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  result: string;

  constructor() {}

  ngOnInit() {
  }

  // Event handler for radiobutton's event change
  radioChangeHandler(event:any) {
    this.selectedSearchType = event.target.value;
  }

  gitHubSearch() {
    var radio = this.selectedSearchType;
    console.log('Performed a gitHub search');
    if(radio == 'Search Users')
      this.result = this.searchForm.get('query').value;
    else
      this.result = 'Repo Search';
  }

}

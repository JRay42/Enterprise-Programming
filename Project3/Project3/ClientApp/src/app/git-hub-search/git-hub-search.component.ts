import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { UserApiList } from '../user/user-api-list';
import { UserApiResource } from '../user/user-api-resource';
import { RepositoryApiResource } from '../repository/repository-api-resource';
import { RepositoryService } from '../repository/repository.service';
import { RepositoryApiList } from '../repository/repository-api-list';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

  userResults: UserApiResource[];
  repoResults: RepositoryApiResource[];
  error: string;
  loading: boolean;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  page = 0;
  userPage = 1;
  size = 10;
  count: number;
  prevPageExists: boolean;
  nextPageExists: boolean;

  constructor(private userService:UserService, private repoService: RepositoryService) {}

  ngOnInit() {}

  // Event handler for radiobutton's event change
  radioChangeHandler(event:any) {
    this.selectedSearchType = event.target.value;
  }

  private resetState() {
    this.error = null;
    this.userResults = null;
    this.repoResults = null;
    this.loading = true;
  }

  gitHubSearch() {
    this.prevPageExists = this.page !== 0;
    this.resetState();
    var radio = this.selectedSearchType;
    console.log('Performed a gitHub search');
    // Invoke GitHub service to fectch data from query
    if(radio == 'Search Users') {
      // Update model that's used to display result with User information
      this.userService.queryUsers(this.searchForm.get('query').value, this.page, this.size)
      .subscribe(
        (userResults:UserApiList) => {
          this.nextPageExists = (this.page + 1) * this.size < userResults.total_count;
          this.userResults = userResults.items;
          this.count = userResults.total_count;
          this.loading = false;
        },
        (error: any) => {
          this.error = error;
          this.loading = false;
        }
      );
    }
    else {
      // Update model that's used to display result with Repository information
      this.repoService.queryRepos(this.searchForm.get('query').value, this.page, this.size)
      .subscribe(
        (repoResults:RepositoryApiList) => {
          this.nextPageExists = (this.page + 1) * this.size < repoResults.total_count;
          this.repoResults = repoResults.items;
          this.count = repoResults.total_count;
          this.loading = false;
        },
        (error: any) => {
          this.error = error;
          this.loading = false;
        }
      );
    }
  }

  prev() {
    this.page--;
    this.gitHubSearch();
  }

  next() {
    this.page++;
    this.gitHubSearch();
  }

  changePage(newPage: number) {
    this.page = newPage - 1;
    this.gitHubSearch();
  }

}

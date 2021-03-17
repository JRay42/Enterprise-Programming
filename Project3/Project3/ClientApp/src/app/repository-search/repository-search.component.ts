import { Component, OnInit } from '@angular/core';
import { RepositoryApiList } from '../repository/repository-api-list';
import { RepositoryApiResource } from '../repository/repository-api-resource';
import { RepositoryService } from '../repository/repository.service';

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.css']
})

export class RepositorySearchComponent implements OnInit {

  results: RepositoryApiResource[];

  constructor(private repoService: RepositoryService) {}

  ngOnInit() {
    this.repoService.queryRepos('mike', 1, 10)
    .subscribe(
      (results:RepositoryApiList) => {
        this.results = results.items;
      }
    );
  }
}

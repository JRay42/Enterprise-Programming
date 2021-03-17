import { Component, Input, OnInit } from '@angular/core';
import { Repository } from './repository';
import { RepositoryService } from './repository.service';
import { faEye, faStar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {

  @Input() repo: Repository;
  @Input() repoName: string;

  eyeIcon = faEye;
  starIcon = faStar;
  openIssueIcon = faExclamationCircle;

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    if(this.repoName) {
      this.repoService.gitHubSearch(this.repoName).subscribe(
        (repo:Repository) => {
          this.repo = repo;
        }
      );
    }
  }
}

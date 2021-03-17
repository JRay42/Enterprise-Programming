import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../repository/repository';
import { RepositoryService } from '../repository/repository.service';
import { faEye, faStar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})

export class RepositoryDetailComponent implements OnInit {

  repo: Repository;
  eyeIcon = faEye;
  starIcon = faStar;
  openIssueIcon = faExclamationCircle;
  gitHubIcon = faGithub;

  constructor(private route: ActivatedRoute, private repoService:RepositoryService) {}

  ngOnInit() {
    let repoName = this.route.snapshot.paramMap.get('full_name');

    this.repoService.gitHubSearch(repoName).subscribe(
      (repo: Repository) => {
        this.repo = repo;
      }
    )
  }
}

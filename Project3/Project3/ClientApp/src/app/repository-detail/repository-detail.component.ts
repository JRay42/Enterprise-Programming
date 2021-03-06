import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../repository/repository';
import { RepositoryService } from '../repository/repository.service';
import { faEye, faStar, faExclamationCircle, faDownload, faCodeBranch, faComments, faFileAlt, faHistory, faUser, faLink, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { RepositoryCommitDetails } from '../repository/repository-commit-details';
import { RepositoryIssueDetails } from '../repository/repository-issue-details';
import { RepositoryApiResource } from '../repository/repository-api-resource';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})

export class RepositoryDetailComponent implements OnInit {

  repo: Repository;
  repoCommits: RepositoryCommitDetails[];
  repoIssues: RepositoryIssueDetails[];
  eyeIcon = faEye;
  starIcon = faStar;
  openIssueIcon = faExclamationCircle;
  gitHubIcon = faGithub;
  downloadIcon = faDownload;
  forkIcon = faCodeBranch;
  commentsIcon = faComments;
  pageIcon = faFileAlt;
  historyIcon = faHistory
  userIcon = faUser;
  linkIcon = faLink
  calendarIcon = faCalendarAlt;

  constructor(private route: ActivatedRoute, private repoService:RepositoryService) {}

  ngOnInit() {
    let repoName = this.route.snapshot.paramMap.get('full_name');

    this.repoService.gitHubSearch(repoName).subscribe(
      (repo: Repository) => {
        this.repo = repo;

        this.repoService.getCommits(this.repo.full_name).subscribe(
          (repoCommit: RepositoryCommitDetails[]) => {
            this.repoCommits = repoCommit;
          }
        );
        this.repoService.getIssues(this.repo.full_name).subscribe(
          (repoIssue: RepositoryIssueDetails[]) => {
            this.repoIssues = repoIssue;
          }
        );
      }
    );
  }
}

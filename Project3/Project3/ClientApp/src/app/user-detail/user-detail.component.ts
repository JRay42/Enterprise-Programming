import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { faBlog, faDatabase, faStar, faExclamationCircle, faLanguage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { UserFollowerDetails } from '../user/user-follower-details';
import { UserRepoDetails } from '../user/user-repo-details';
import { RepositoryApiList } from '../repository/repository-api-list';
import { RepositoryApiResource } from '../repository/repository-api-resource';
import { UserApiResource } from '../user/user-api-resource';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})

export class UserDetailComponent implements OnInit {

  user: User;
  userFollower: UserFollowerDetails[];
  userRepo: RepositoryApiResource[];
  blogIcon = faBlog;
  gitHubIcon = faGithub;
  databaseIcon = faDatabase;
  starIcon = faStar;
  openIssueIcon = faExclamationCircle;
  languageIcon = faLanguage;
  userCircleIcon = faUserCircle;

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    let userLogin = this.route.snapshot.paramMap.get('login');

    this.userService.gitHubSearch(userLogin).subscribe(
      (user: User) => {
        this.user = user;

        this.userService.getFollowers(this.user.login).subscribe(
          (userFollower: UserApiResource[]) => {
            this.userFollower = userFollower;
          }
        );
        this.userService.getRepos(this.user.login).subscribe(
          (userRepo: RepositoryApiResource[]) => {
            this.userRepo = userRepo;
          }
        );
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { faBlog, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { UserFollowerDetails } from '../user/user-follower-details';
import { UserRepoDetails } from '../user/user-repo-details';
import { RepositoryApiList } from '../repository/repository-api-list';
import { RepositoryApiResource } from '../repository/repository-api-resource';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})

export class UserDetailComponent implements OnInit {

  user: User;
  userFollowers: UserFollowerDetails[] = [];
  userRepo: RepositoryApiResource[];
  blogIcon = faBlog;
  gitHubIcon = faGithub;
  mapIcon = faMapMarkerAlt;

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    let userLogin = this.route.snapshot.paramMap.get('login');

    this.userService.gitHubSearch(userLogin).subscribe(
      (user: User) => {
        this.user = user;
        for(var i=0; i < this.user.followers.length; i++) {
          this.userService.getFollowers(this.user.followers[i].userfollowers.login).subscribe(
            (follower: UserFollowerDetails) => {
              this.userFollowers.push(follower);
            }
          );
        }
        this.userService.getRepos(this.user.login).subscribe(
          (userRepo: RepositoryApiList) => {
            this.userRepo = userRepo.items;
          }
        );
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { faBlog, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { UserFollowerDetails } from '../user/user-follower-details';
import { UserRepoDetails } from '../user/user-repo-details';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})

export class UserDetailComponent implements OnInit {

  user: User;
  userFollowers: UserFollowerDetails[] = [];
  userRepos: UserRepoDetails[] = [];
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
          this.userService.getFollowers(this.user.followers[i].userfollowers.url).subscribe(
            (follower: UserFollowerDetails) => {
              this.userFollowers.push(follower);
            }
          );
        }
        for(var i=0; i < this.user.repos.length; i++) {
          this.userService.getRepos(this.user.repos[i].userRepos.login).subscribe(
            (repo: UserRepoDetails) => {
              this.userRepos.push(repo);
            }
          );
        }
      }
    );
  }
}

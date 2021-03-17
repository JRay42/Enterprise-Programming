import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { faBlog, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

  user: User;
  blogIcon = faBlog;
  gitHubIcon = faGithub;
  mapIcon = faMapMarkerAlt;

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    let userLogin = this.route.snapshot.paramMap.get('login');

    this.userService.gitHubSearch(userLogin).subscribe(
      (user: User) => {
        this.user = user;
      }
    )
  }
}

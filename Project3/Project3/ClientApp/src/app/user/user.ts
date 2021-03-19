import { UserFollowers } from "./user-followers";
import { UserRepos } from "./user-repos";

export class User {
  avatar_url: string;
  login: string;
  id: number;
  name: String;
  location: string;
  blog: string;
  url: string;
  html_url: string;
  repos_url: string;
  followers_url: string;
  followers: UserFollowers[];
  repos: UserRepos[];
  created_at: Date;
}

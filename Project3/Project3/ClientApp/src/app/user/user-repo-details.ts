import { User } from "./user";

export class UserRepoDetails {
  name: string;
  stargazers_count: number;
  open_issues_count: number;
  language: string;
  full_name: string;
  owner: User;
}

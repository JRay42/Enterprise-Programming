import { User } from "../user/user";

export class Repository {
  owner: User
  name: string;
  full_name: string;
  html_url: string;
  open_issues_count: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
}

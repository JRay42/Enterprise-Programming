import { User } from "../user/user";

export class RepositoryApiResource {
  full_name: string;
  owner: User;
  author: User;
  open_issues_count: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  name: string;
}

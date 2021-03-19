import { User } from "../user/user";
import { RepositoryCommits } from "./repository-commits";
import { RepositoryIssues } from "./repository-issues";

export class Repository {
  owner: User
  name: string;
  full_name: string;
  open_issues_count: number;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number
  language: string;
  html_url: string;
  commits_url: string;
  issues_url: string;
  commits: RepositoryCommits[];
  issues: RepositoryIssues[];
  created_at: string;
  description: string;
  clone_url: string;
}

import { User } from "../user/user";

export class RepositoryCommitDetails {
  author: User;
  comment_count: number;
  html_url: string;
  url: string;
  message: string;
}

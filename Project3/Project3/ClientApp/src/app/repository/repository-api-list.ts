import { RepositoryApiResource } from "./repository-api-resource";

export class RepositoryApiList {
  total_count: number;
  incomplete_results: boolean;
  items: RepositoryApiResource[];
}

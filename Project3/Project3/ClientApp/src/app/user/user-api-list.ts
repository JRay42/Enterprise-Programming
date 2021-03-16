import { UserApiResource } from "./user-api-resource";

export class UserApiList {
  total_count: number;
  incomplete_results: boolean;
  items: UserApiResource[];
}

import { UserApiResource } from "./user-api-resource";

export class UserApiList {
  accept: string;
  page: number;
  per_page: number;
  results: UserApiResource[];
}

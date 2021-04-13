import { TodoTags } from "./todo-tags";

export class Todo {
  id: number;
  // tags: TodoTags[];
  task: string;
  due: string;
  done: boolean;
}

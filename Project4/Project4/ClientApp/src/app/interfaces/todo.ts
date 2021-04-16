import { TodoTags } from "./todo-tags";

export class Todo {
  id: number;
  // tags: TodoTags[];
  task: string;
  due: Date;
  done: boolean;
}

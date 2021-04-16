import { TodoTagCustom } from "./todo-tag-custom";

export class TodoCustom {
  id: number;
  task: string;
  due: Date;
  tags: TodoTagCustom[];
  done: boolean;
}

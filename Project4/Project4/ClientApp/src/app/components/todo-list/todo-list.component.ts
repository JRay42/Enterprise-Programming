import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoTags } from '../../interfaces/todo-tags';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 , transform: 'translateY(30px)' }),
        animate(500, style({opacity: 1, transform: 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate(500, style({opacity: 0, transform: 'translateY(30px)'}))
      ]),
    ])
  ]
})

export class TodoListComponent implements OnInit {
  remainingModels: boolean;
  filter: string;
  preEditCache: string;
  todoId: number;
  todoTask: string;
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.preEditCache = '';
    this.todoTask = '';
    this.filter = 'all';
    this.todoId = 16;
  }

  addTodo(): void {

  }

  editTodo(todo: Todo): void {
    todo.done = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.task.trim().length === 0) {
      todo.task = this.preEditCache;
    }

    this.remainingModels = this.checkRemaining();
    todo.done = false;
  }

  cancelEdit(todo: Todo): void {
    todo.task = this.preEditCache;
    todo.done = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.done).length;
  }

  atLeastOneDone(): boolean {
    return this.todos.filter(todo => todo.done).length > 0;
  }

  clearDone(): void {
    this.todos = this.todos.filter(todo => !todo.done);
  }

  checkAllTodos(): void {
    this.todos.forEach(todo => todo.done = (<HTMLInputElement>event.target).checked)
    this.remainingModels = this.checkRemaining();
  }

  checkRemaining(): boolean {
    return this.remaining() !== 0;
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.done);
    } else if (this.filter === 'done') {
      return this.todos.filter(todo => todo.done);
    }

    return this.todos;
  }

}

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
    this.todos = [
      {
        'id': 1,
        //'tags': 'Enterprise Programming',
        'task': 'Project 4',
        'due': '2021-04-13T23:59:59Z',
        'done': false,
      },
      {
        'id': 2,
        //'tagName': 'Ethics of Computing',
        'task': 'Quiz 5',
        'due': '2021-04-19T13:00:00Z',
        'done': false,
      },
      {
        'id': 3,
        //'tagName': 'Concepts of AI',
        'task': 'Biweekly Report',
        'due': '2021-04-22T23:59:59Z',
        'done': false,
      },
      {
        'id': 4,
        //'tagName': 'Ethics of Computing',
        'task': 'Quiz 6',
        'due': '2021-04-26T13:00:00Z',
        'done': false,
      },
      {
        'id': 5,
        //'tagName': 'Operating Systems',
        'task': 'task 2',
        'due': '2021-04-26T23:59:59Z',
        'done': false,
      },
      {
        'id': 6,
        //'tagName': 'Enterprise Programming',
        'task': 'Final Project',
        'due': '2021-04-27T23:59:59Z',
        'done': false,
      },
      {
        'id': 7,
        //'tagName': 'Networks',
        'task': 'task 4',
        'due': '2021-04-28T23:59:59Z',
        'done': false,
      },
      {
        'id': 8,
        //'tagName': 'Concepts of AI',
        'task': 'Biweekly Report',
        'due': '2021-04-29T23:59:59Z',
        'done': false,
      },
      {
        'id': 9,
        //'tagName': 'Enterprise Programming',
        'task': 'Optional Project',
        'due': '2021-05-01T23:59:59Z',
        'done': false,
      },
      {
        'id': 910,
        //'tagName': 'Ethics of Computing',
        'task': 'Project',
        'due': '2021-05-03T13:00:00Z',
        'done': false,
      },
      {
        'id': 11,
        //'tagName': 'Concepts of AI',
        'task': 'Final Exam',
        'due': '2021-05-04T19:30:00Z',
        'done': false,
      },
      {
        'id': 12,
        //'tagName': 'Enterprise Programming',
        'task': 'Final Exam',
        'due': '2021-05-04T09:00:00Z',
        'done': false,
      },
      {
        'id': 13,
        //'tagName': 'Networks',
        'task': 'Final Exam',
        'due': '2021-05-05T17:30:00Z',
        'done': false,
      },
      {
        'id': 14,
        //'tagName': 'Theory of Computing',
        'task': 'Final Exam',
        'due': '2021-05-06T17:30:00Z',
        'done': false,
      },
      {
        'id': 15,
        //'tagName': 'Operating Systems',
        'task': 'Final Exam',
        'due': '2021-05-07T15:00:00Z',
        'done': false,
      },
    ];
  }

  addTodo(): void {
    if (this.todoTask.trim().length === 0) {
      return;
    }

    this.todos.push({
      'id': this.todoId,
      //'tagName': 'Operating Systems',
      'task': this.todoTask,
      'due': '2021-05-07T15:00:00Z',
      'done': false,
    });

    this.todoTask = '';
    ++this.todoId;
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

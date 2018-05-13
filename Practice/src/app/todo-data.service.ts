import { Injectable } from '@angular/core';
import { Todo } from './todo';
@Injectable()
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];
  constructor() { }

  getTodoById(id: number): Todo {
    return this.todos
    .filter(todo => todo.id === id)
    .pop();
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): TodoDataService {
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if(!todo){
      return null; //if there is no object by that id then return nothing
    }
    Object.assign(todo,values);
    return todo;
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}

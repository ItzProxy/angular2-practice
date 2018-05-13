import { Component } from '@angular/core';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
})
export class AppComponent {
  title = 'Practice Room';
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService){}

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}

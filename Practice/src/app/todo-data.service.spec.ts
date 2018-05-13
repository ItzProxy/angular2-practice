import { TestBed, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe("#getAllTodos()", () => {
    it("should return an empty array by default", inject([TodoDataService],(service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it("should return all todos", inject([TodoDataService], (service:TodoDataService) => {
      let todo1 = new Todo({title: 'domo1', complete: false});
      let todo2 = new Todo({title: 'domo2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe("#save(todo)", () => {
   it("should automatically assign an incrementing id", inject([TodoDataService], 
   (service: TodoDataService) => {
      let todo1 = new Todo({title: 'domo1', complete: false});
      let todo2 = new Todo({title: 'domo2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
   }));
  });

  describe("#deleteTodoById(id)", () =>{
    it("should remove todo with corresponding id", inject([TodoDataService],
    (service: TodoDataService) =>{
      let todo1 = new Todo({title: 'domo1', complete: false});
      let todo2 = new Todo({title: 'domo2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1); //delete the first todo in list
      expect(service.getAllTodos()).toEqual([todo2]); //should only have the second todo in the list
      service.deleteTodoById(2); //delete second todo in list
      expect(service.getAllTodos()).toEqual([]); //there should be no more entries in the array
    }));

    it("should not remove anything if given id is not in list", inject([TodoDataService],
    (service: TodoDataService) => {
      let todo1 = new Todo({title: 'domo1', complete: false});
      let todo2 = new Todo({title: 'domo2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3); //this id should not exist so no item should be deleted
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });
  
  describe("#updateTodoById(id, values)", () => {
    it("should return todo with the given id and updated data", inject([TodoDataService], (service:TodoDataService) => {
      let todo = new Todo({title: 'domo', complete: false});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(1, {
        title: "new domo"
      });
      expect(updatedTodo.title).toEqual("new domo");
    }));

    it("should return null if no id is found in the array", inject([TodoDataService], (service:TodoDataService) => {
      let todo = new Todo({title: 'domo', complete: false});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(2, {
        title: "new domo"
      });
      expect(updatedTodo).toEqual(null);
    }));
  });

  describe("#toggleTodoComplete(todo)", () => {
    it("should return the updated todo with the inverse complete status", inject([TodoDataService], (service:TodoDataService) => { 
      let todo = new Todo({title: 'domo', complete: false});
      service.addTodo(todo);
      let updatedTodo = service.toggleTodoComplete(todo);//changes from false to true
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);//changes from true to false
      expect(updatedTodo.complete).toEqual(false); 
    }));
  });
});

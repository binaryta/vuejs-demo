import "reflect-metadata";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import Todo from "../data/todo";

export class HomeStore {
  private inputTextSubject_ = new BehaviorSubject<string>("");
  private todosSubject_ = new BehaviorSubject<Todo[]>([]);

  public get onTodosChanged(): Observable<Todo[]> {
    return this.todosSubject_.asObservable();
  }

  public get onInputTextChanged(): Observable<string> {
    return this.inputTextSubject_.asObservable();
  }

  public addTodo(text: string) {
    if (text.length) {
      let todos = this.todosSubject_.getValue();
      todos.push(new Todo(todos.length + 1, text));
      this.todosSubject_.next(todos);
    }
  }

  public changeInputText(text: string) {
    this.inputTextSubject_.next(text);
  }
}

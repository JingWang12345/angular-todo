import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-todo';

  todos: Todo[] = [
    {
      title: 'Regalo alla Nonna',
      description: 'compra il profumo che le piace tanto',
      priority: 3
    },
    {
      title: 'compra il pane',
      priority: 1
    },
    {
      title: 'pagare le bollete',
      priority: 2
    }
  ]
  addTodo(todo: Todo){
    this.todos.push(todo);
    console.log(this.todos);

  }
}

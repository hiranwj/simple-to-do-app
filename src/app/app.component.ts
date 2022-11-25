import { Component } from '@angular/core';

type TodoItem = {
  checked: boolean,
  description: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toDoItems: TodoItem[] = [];

  getItems(complete: boolean = false): TodoItem[] {
    return this.toDoItems.filter(item => item.checked === complete);
  }

  addItem(description: string): void{
    this.toDoItems.push({
      checked: false,
      description: description
    });
  }

  removeItem(item: TodoItem): void{
    this.toDoItems.splice(this.toDoItems.indexOf(item), 1);
  }
}

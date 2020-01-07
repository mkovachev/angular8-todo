import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "Todo 1",
        isCompleted: false
      },
      {
        id: 2,
        title: "Todo 2",
        isCompleted: true
      },
      {
        id: 3,
        title: "Todo 3",
        isCompleted: false
      }
    ];
  }
}

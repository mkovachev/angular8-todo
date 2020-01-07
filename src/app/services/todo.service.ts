import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
      {
        id: 1,
        title: "Todo 1",
        isCompleted: false
      },
      {
        id: 2,
        title: "Todo 2",
        isCompleted: false
      },
      {
        id: 3,
        title: "Todo 3",
        isCompleted: false
      }
    ];
  }
}

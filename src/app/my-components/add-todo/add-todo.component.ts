import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoTitle: string;
  todoDesc: string;

  @Input() todosList: Todo[];
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.todoTitle = "";
    this.todoDesc = "";
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.todoTitle==="" || this.todoDesc==="") alert("fields cannot be empty!");
    else{
      const todo = {
        title: this.todoTitle,
        desc: this.todoDesc,
        active: true
      }
      this.todoAdd.emit(todo);
    }
  }

}

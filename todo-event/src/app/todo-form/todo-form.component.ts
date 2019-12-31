import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent {
  label: string;
  
  @Output() onAdd = new EventEmitter();

  submit() {
    if (!this.label) return;
    this.onAdd.emit(this.label)
    this.label = ''
  }
}
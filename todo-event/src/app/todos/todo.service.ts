import { Injectable } from '@angular/core'
import { ITodo } from './todo.model'

@Injectable()
export class TodoService {

  constructor() { }

  getTodos(): Array<ITodo> {
    return [
      {
        id: 1,
        label: 'Learn Angular',
        complete: false
      },
      {
        id: 2,
        label: 'Learn React',
        complete: true
      },
      {
        id: 3,
        label: 'Learn redux',
        complete: false
      },            
    ]
  }

}
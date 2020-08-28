import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../_interface/todo';

@Component({
    selector: 'app-template-todo',
    templateUrl: './template-todo.component.html',
    styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent implements OnInit {

    /*
    "Input" to direct changes to child component
    "Output" to direct changes to parent component
    */
    @Input() toDo$: ToDo;   // assign variable, if component gets new object (no use in constructor anymore)
    @Output() ping: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public changeCheck(event?: any): void {
        this.toDo$.status = !this.toDo$.status;
        console.log(this.toDo$.status);
    }

    public changeLabel(event?: any): void {
        console.log(this.toDo$.label);
    }

    public deleteToDo(event?: any): void {
        console.log(this.toDo$.id);
    }

}

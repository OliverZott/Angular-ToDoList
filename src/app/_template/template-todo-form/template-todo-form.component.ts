import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToDo} from '../../_interface/todo';

@Component({
    selector: 'app-template-todo-form',
    templateUrl: './template-todo-form.component.html',
    styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent  implements OnInit {

    @Output() ping: EventEmitter<ToDo> = new EventEmitter<ToDo>();
    public toDo$: ToDo;

    constructor() {
    }

    ngOnInit(): void {
        this.resetForm();
    }

    public createToDo($event: any): void {
        console.log(this.toDo$);
        this.ping.emit(this.toDo$);
        this.resetForm();
        console.log('emitted xi');
    }

    private  resetForm(): void {
        this.toDo$ = {
            id: undefined,
            label: undefined,
            status: false,
            position: undefined,
        };
    }
}

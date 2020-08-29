import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../_interface/todo';
import {EventPing} from '../../_interface/eventping';

@Component({
    selector: 'app-template-todo',
    templateUrl: './template-todo.component.html',
    styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent implements OnInit {

    /*
    "Input" to direct changes from parent to child component
    "Output" to direct changes to parent component
    */
    @Input() toDo$: ToDo;   // property; value comes form parent, component gets new object.
    @Output() ping: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public changeCheck(event?: any): void {
        this.toDo$.status = !this.toDo$.status;
        const eventObject: EventPing = {
            label: 'check',
            object: this.toDo$,
        };
        this.ping.emit(eventObject);        // ping (emitter) emits event (eventObject)
        console.log('Ping event emitter was emitted: ' + this.toDo$.status);
    }

    public changeLabel(event?: any): void {
        const eventObject: EventPing = {
            label: 'label',
            object: this.toDo$,
        };
        this.ping.emit(eventObject);        // ping (emitter) emits event (eventObject)
        console.log('Changed Label on blur: ' + this.toDo$.label);
    }

    public deleteToDo(event?: any): void {
        const eventObject: EventPing = {
            label: 'delete',
            object: this.toDo$,
        };
        this.ping.emit(eventObject);        // ping (emitter) emits event (eventObject)
        console.log('Some deleting happened. Id: ' + this.toDo$.id);
    }

}

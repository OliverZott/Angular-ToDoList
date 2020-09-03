import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../_interface/todo';
import {EventPing} from '../../_interface/eventping';
import { DataService } from '../../_service/data.service';

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

    constructor(
        public dataService: DataService
    ) {
    }

    ngOnInit(): void {
    }

    public changeCheck(event?: any): void {
        this.toDo$.status = !this.toDo$.status;
        this.dataService.putToDo(this.toDo$).subscribe((data: ToDo) => {
            const eventObject: EventPing = {
                label: 'check',
                object: this.toDo$,
            };
            this.ping.emit(eventObject);
        }, error => {
            console.log(`%cERROR: ${error.message}`, `color: red`);
        });
    }

    public deleteToDo(event?: any): void {
        this.dataService.deleteToDo(this.toDo$).subscribe((data: ToDo) => {
            const eventObject: EventPing = {
                label: 'delete',
                object: this.toDo$,
            };
            this.ping.emit(eventObject);
        }, error => {
            console.log(`%cERROR: ${error.message}`, `color: red`);
        });
    }

    /*
     Actually not necessary, cause _todo instance get label value anyways
     */
    public changeLabel(event?: any): void {
        const eventObject: EventPing = {
            label: 'label',
            object: this.toDo$,
        };
        this.ping.emit(eventObject);
    }
}

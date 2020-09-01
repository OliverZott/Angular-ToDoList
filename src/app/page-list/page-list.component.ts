import { Component, OnInit } from '@angular/core';
import {ToDo} from '../_interface/todo';
import {EventPing} from '../_interface/eventping';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

    public toDoShow: boolean;
    public toDoDoneShow: boolean;
    public $todos: ToDo[];
    public $todosdone: ToDo[];

    constructor() {
        this.toDoShow = true;
        this.toDoDoneShow = true;
        this.$todos = [
            {
                id: 0,
                label: 'Task1',
                position: 1,
                status: false,
            },
            {
                id: 1,
                label: 'Task2',
                position: 2,
                status: false,
            }
        ];
        this.$todosdone = [];
    }

    ngOnInit(): void {
    }

    public create(event: ToDo): void {
        event.position = this.$todos.length + 1;
        this.$todos.push(event);
        console.log('created xi');
    }

    /*
    After pushing  object to other array -> when / how / why is template rendered new?
     */
    public update(event: EventPing): void {
        console.log(`%c"${event.label}-Event" was triggered (${event.object.label}).`, `color: green`, event);
        if ('check' === event.label) {
            if (!event.object.status) {
                this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
                this.$todos.push(event.object);
            } else {
                this.$todos.splice(this.$todos.indexOf(event.object), 1);
                this.$todosdone.push(event.object);
            }
        }
        if ('delete' === event.label) {
            if (event.object.status) {
                this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
            } else {
                this.$todos.splice(this.$todos.indexOf(event.object), 1);
            }
        }
        // Actually not necessary, cause _todo instance gets label value from ngModel
        if ('label' === event.label) {
            if (event.object.status) {
                this.$todosdone.forEach((todo: ToDo) => {
                    if (todo.id === event.object.id) {
                        todo.label = event.object.label;
                    }
                });
            } else {
                this.$todos.forEach((todo: ToDo) => {
                    if (todo.id === event.object.id) {
                        todo.label = event.object.label;
                    }
                });
            }
        }
        console.log(this.$todos);
        console.log(this.$todosdone);
    }
}

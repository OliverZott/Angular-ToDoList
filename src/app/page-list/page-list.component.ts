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
        if ('label' === event.label) {
            console.log('label-event on blur');
            /*
            if (!event.object.status) {
                this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
                this.$todos.push(event.object);
            } else {
                this.$todos.splice(this.$todos.indexOf(event.object), 1);
                this.$todosdone.push(event.object);
            }
            */
        }
    }
}

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
        this.toDoDoneShow = false;
        this.$todos = [
            {
                id: 0,
                label: 'puff',
                position: 1,
                status: false,
            },
            {
                id: 1,
                label: 'test2',
                position: 2,
                status: false,
            }
        ];
    }

    ngOnInit(): void {
    }

    public update(event: EventPing): void {
        if ('check' === event.label) {
            console.log(`%c"${event.label}-Event" was triggered.`, `color: green`);
        }
    }
}

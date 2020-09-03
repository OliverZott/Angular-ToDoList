import { Component, OnInit } from '@angular/core';
import { ToDo } from '../_interface/todo';
import { EventPing } from '../_interface/eventping';
import { DataService } from '../_service/data.service';
import { Subscription } from 'rxjs';

// noinspection SpellCheckingInspection
/**
 * ToDo:
 *  - Correct Order for objects?
 *  - How generate IDs ?
 *  - object status should be changed in database! to seperate todo and tododone!
 */
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

    constructor(
        public dataService: DataService,
    ) {
    }

    ngOnInit(): void {
        this.toDoShow = true;
        this.toDoDoneShow = true;
        this.loadData();
    }


    /*
    loadData / create / delete ...handle database requests
     */
    private loadData(): void {
        this.$todos = [];
        this.$todosdone = [];
        this.dataService.getToDo().subscribe((data: ToDo[]) => {
            this.$todos = data;
        }, error => {
            console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
        });
    }

    public create(event: ToDo): void {
        event.position = this.$todos.length + 1;
        this.dataService.postToDo(event).subscribe((data: ToDo) => {
            console.log(`%c: "${data.label}" was created successfully.`, `color: blue`);
            this.$todos.push(event);
        }, error => {
            console.log(`%cERROR: ${error.measure}`, `color: red`);
        });
    }

    private delete(event: ToDo): void {
        this.dataService.deleteToDo(event).subscribe((data: ToDo) => {
            console.log(`%c: "${data.label}" was deleted successfully.`, `color: blue`);
        });
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
            this.delete(event.object);
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
    }
}

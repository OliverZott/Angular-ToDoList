import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { ToDo } from '../_interface/todo';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private serverUrl = 'http://localhost:3000';

    constructor(
        private httpClient: HttpClient
    ) { }

    public getToDo(): Observable<ToDo[]> {
        return this.httpClient.get(serverUrl);
    }
}

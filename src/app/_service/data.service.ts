import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { ToDo } from '../_interface/todo';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private serverUrl = 'http://localhost:3000';

    // Header for get-request
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(
        private httpClient: HttpClient
    ) {    }

    public getToDo(): Observable<ToDo[]> {
        return this.httpClient.get<ToDo[]>(`${this.serverUrl}/todos`, this.httpOptions);
    }

    public postToDo(todo: ToDo): Observable<ToDo> {
        return this.httpClient.post<ToDo>(`${this.serverUrl}/todos`, todo, this.httpOptions);
    }

    public deleteToDo(todo: ToDo): Observable<any> {
        return this.httpClient.delete<ToDo>(`${this.serverUrl}/todos/${todo.id}`, this.httpOptions);
    }
}

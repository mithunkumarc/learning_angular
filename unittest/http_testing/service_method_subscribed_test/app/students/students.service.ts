import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class StudentsService {
    constructor(private _http: HttpClient) {
        console.log("created student")
    }

    getStudentList(): Observable<any> {
        console.log("subscribed")
        return this._http.get('https://reqres.in/api/users');
    }

    getStudentDetails(id) {
        return this._http.get(`https://reqres.in/api/users/${id}`)
        .pipe(map((data) => this.transformFresponseToAddUniversity(data)));
    }

    //adding new property university to json
    transformFresponseToAddUniversity(response) {
        response['data']['university'] = "MIT";
        return response;
    }

}
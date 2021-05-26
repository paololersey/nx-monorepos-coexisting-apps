import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '@my-org/angular-central-lib';





@Injectable()
export class AuthService {


    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>('/api/login', {email, password});
    }

}
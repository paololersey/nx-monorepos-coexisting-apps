import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User, UserResponse } from '../+state/login/user.model';


@Injectable()
export class AuthService {


    constructor(private http: HttpClient) {}

    tryLogin(email: string, password: string): Observable<UserResponse> {
        return this.http.post<UserResponse>('/api/login', {email, password});
    }

}

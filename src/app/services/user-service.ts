import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage'
import { Observable } from 'rxjs';
import { JWTAuthResponse } from '../models/jwtAuthResponse';
import { Login } from '../models/login';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url: string;
    user: User;
    constructor(private http: HttpClient, private localStorage: LocalStorageService){
        this.url = environment.url;
    }

    signUp(user: User){
        return this.http.post(this.url + '/user', user)
    }

    getUser(user: User){

       return this.http.get<User>(this.url + "/user");
    }

    login(username: string, password: string){
        this.localStorage.store("username", username);
        return this.http.get<User>(this.url + "/user");
    }
    // login(login: Login): Observable<boolean> {
    //     return this.http.get<Login>('http://localhost:8080/user').pipe(map(data => {
    //         this.localStorage.store('username', data.username);
    //         return true;
    //     }))
    // }

    isAuthenticated(): boolean{
        return this.localStorage.retrieve('username') !=null;
    }

    logout() {
        this.localStorage.clear('username');
    }
    findAll() {
        return this.http.get<User[]>('/server/user');
    }
}



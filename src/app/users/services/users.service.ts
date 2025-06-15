import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormGroup} from "@angular/forms";
import {Iuser} from "../interfaces/iuser";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
searchTerm=new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get('users');
  }

  addUser(data: FormGroup): Observable<any> {
    return this.http.post('users/add', data)
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`users/${id}`);
  }

  udateUser(data: FormGroup, id: number): Observable<any> {
    return this.http.put(`users/${id}`, data)
  }

  searchByUser(term:string): Observable<any> {
    return this.http.get(`users/search?q=${term}`);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`user/me`);
  }
}

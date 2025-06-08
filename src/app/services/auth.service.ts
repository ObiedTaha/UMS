import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  onLogin(data: FormGroup): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', data);
  }
}

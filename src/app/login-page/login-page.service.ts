import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginPage} from './login-page';
import {Observable, throwError} from 'rxjs';
import {error} from 'protractor';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private httpClient: HttpClient) { }

  insertUserCredentials(loginCredentials: LoginPage): Observable<any> {
    return this.httpClient.post('http://localhost:8080/usercredentials', loginCredentials);
  }

  updateUserCredentials(loginCredentials: LoginPage): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/usercredentials`, loginCredentials).pipe(
      catchError(err => throwError(err))
    );
  }

  deleteUserCredentials(userid: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/usercredentials/${userid}`);
  }
}

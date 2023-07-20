import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {InsertStudent} from './insert-student';

@Injectable({
  providedIn: 'root'
})
export class InsertStudentService {
  url = 'http://localhost:8080/students';

  constructor(private httpClient: HttpClient) {
  }
  insertStudent(insertStudent: InsertStudent): Observable<any>{
  return this.httpClient.post(this.url, insertStudent).pipe(
    catchError(err => throwError(err))
  );
  }
}

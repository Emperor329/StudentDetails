import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Students} from './students';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentsurl: string = 'http://localhost:8080/students';
  constructor(private httpClient: HttpClient) {
  }
  insertStudent(students: Students): Observable<any>{
  return this.httpClient.post(this.studentsurl, students);
  }
  getStudents(): Observable<Students[]> {
    return this.httpClient.get<Students[]>(this.studentsurl).pipe(
      catchError(err => throwError(err))
    );
  }

}


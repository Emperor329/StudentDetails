import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UpdateStudent} from './update-student';
import {ListOfStudents} from './list-of-students';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentService {

  url = 'http://localhost:8080/students';

  constructor(private httpClient: HttpClient) {
  }

  getListOfStudents(): Observable<ListOfStudents[]> {
    return this.httpClient.get<ListOfStudents[]>(`${this.url}/listofstudents`).pipe(
      catchError(err => throwError(err))
    );
  }

  fillStudentForm(studentId: number): Observable<UpdateStudent>{
    return this.httpClient.get<UpdateStudent>(`${this.url}/${studentId}`).pipe(
      catchError(err => throwError(err))
    );
  }
  updateStudent(updateStudent: UpdateStudent): Observable<any>{
   return this.httpClient.put(this.url, updateStudent).pipe(
     catchError(err => throwError(err))
   );
  }

}

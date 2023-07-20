import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Employees} from '../employees/employees';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeService {

  apiUrl: string = 'http://localhost:8080/employees';


  constructor(private httpClient: HttpClient) { }

  getEmployeeById(empId: number): Observable<Employees> {
    // this statement is used for calling the global variables/ constructor
    return this.httpClient.get<Employees>(`${this.apiUrl}/${empId}`).pipe(
      catchError(err => throwError(err))
    );
  }

  updateEmployeeById(employee: Employees): Observable<Employees>{
    return this.httpClient.put<Employees>(this.apiUrl, employee).pipe(
      catchError(err => throwError(err))
    );
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employees} from './employees';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apiUrl: string = 'http://localhost:8080/employees';

  constructor(private httpClient: HttpClient) {
  }

  getEmployees(): Observable<Employees[]> {
    // this statement is used for calling the global variables/ constructor
    return this.httpClient.get<Employees[]>(this.apiUrl).pipe(
      catchError(err => throwError(err))
    );
  }

  insertEmployee(employees: Employees): Observable<any> {
    return this.httpClient.post(this.apiUrl, employees).pipe(
      catchError(err => throwError(err))
    );
  }
  onDelete(empId: number): Observable<any>{
    return this.httpClient.delete(`${this.apiUrl}/${empId}`).pipe(
      catchError(err => throwError(err))
    );
  }

  onView(): Observable<Employees[]> {
    // this statement is used for calling the global variables/ constructor
    return this.httpClient.get<Employees[]>(this.apiUrl).pipe(
      catchError(err => throwError(err))
    );
  }
}

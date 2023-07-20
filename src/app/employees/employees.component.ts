import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {EmployeesService} from './employees.service';
import {Employees} from './employees';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employees[];

  cols: any[] = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'emailId', header: 'EmailId' }
  ];

  txtFirstName: string;

  txtLastName: string;

  txtEmailId: string;

  isEmployeesList: boolean = true;

  constructor(private employeesService: EmployeesService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeesService.getEmployees().subscribe((employees: Employees[]) => {
      this.employees = employees;
    });
  }

  onSubmit(): void {
    const insertEmployees: Employees = {firstName: this.txtFirstName, lastName: this.txtLastName, emailId: this.txtEmailId};
    this.employeesService.insertEmployee(insertEmployees).subscribe((employee: Employees) => {
        this.employees.push(employee);
        this.displayMethod('success', 'Employee Inserted Successfully', 'Success');
      },
      error => {
      console.log(error),
        this.displayMethod('error', error?.error?.message, 'Failed');
      });
  }

  onDelete(empId: number): void{
     this.employeesService.onDelete(empId).subscribe(() => {
       this.employees = this.employees.filter(employee => employee.empId !== empId); // filtering the data by elimination
       this.displayMethod('success', 'Employee deleted Successfully', 'Success');
    }, error => {
      this.displayMethod('error', error?.error?.message, 'Failed');
    });
  }

  onView(): void {
    this.employeesService.onView().subscribe((employees: Employees[]) => {
      this.employees = employees;
    });
  }

  menuNavigation(isEmployeeList: boolean): void {
    this.isEmployeesList = isEmployeeList;
  }

  navigateToUpdateEmployeePage(empId: number): void {
    this.router.navigate(['updateemployee', empId]);
  }

  displayMethod(severity: string, summary: string, details: string): void {
    this.messageService.add({
      severity,
      summary,
      detail: details
    });
  }
}

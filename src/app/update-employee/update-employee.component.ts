import {Component, OnInit} from '@angular/core';
import {Employees} from '../employees/employees';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {UpdateEmployeeService} from './update-employee.service';
import {error} from 'protractor';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  empId: number;

  employees: Employees;

  txtFirstName: string;

  txtLastName: string;

  txtEmailId: string;

  constructor(private updateEmployeesService: UpdateEmployeeService,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.empId = Number(this.activatedRoute.snapshot.paramMap.get('empId'));

    this.getEmployeeById();
  }

  getEmployeeById(): void {
    this.updateEmployeesService.getEmployeeById(this.empId).subscribe((employee: Employees) => {
        this.txtFirstName = employee.firstName;
        this.txtLastName = employee.lastName;
        this.txtEmailId = employee.emailId;
      },
      error => {
        this.displayMethod('error', error?.error?.message, 'Failed');
      });
  }

  updateEmployeeById(): void {
    const updateEmployee: Employees = { //  json
      empId: this.empId,
      firstName: this.txtFirstName,
      lastName: this.txtLastName,
      emailId: this.txtEmailId
    };

    this.updateEmployeesService.updateEmployeeById(updateEmployee).subscribe(() => {
      this.displayMethod('success', 'Employee Updated Successfully', 'Success');
    },
        error => {
      this.displayMethod('error', error?.error?.message, 'Failed');
    });
  }

  onSubmit(): void {
    // const insertEmployees: Employees = {firstName: this.txtFirstName, lastName: this.txtLastName, emailId: this.txtEmailId};
    // this.employeesService.insertEmployee(insertEmployees).subscribe((employee: Employees) => {
    //     this.employees.push(employee);
    //     this.displayMethod('success', 'Employee Inserted Successfully', 'Success');
    //   },
    //   error => {
    //     this.displayMethod('error', error?.error?.message, 'Failed');
    //   });
  }

  displayMethod(severity: string, summary: string, details: string): void {
    this.messageService.add({
      severity,
      summary,
      detail: details
    });
  }

}

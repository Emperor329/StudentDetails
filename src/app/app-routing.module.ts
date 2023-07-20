import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {EmployeesComponent} from './employees/employees.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {FormsComponent} from './forms/forms.component';
import {StudentsComponent} from './students/students.component';
import {InsertStudentComponent} from './insert-student/insert-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {AddNumbersComponent} from './addnumbers/add-numbers.component';



const routes: Routes = [
  {path: 'homepage', component: LoginPageComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'updateemployee/:empId', component: UpdateEmployeeComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'insertstudent', component: InsertStudentComponent},
  {path: 'updatestudent', component: UpdateStudentComponent},
  {path: 'addnumbers', component: AddNumbersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

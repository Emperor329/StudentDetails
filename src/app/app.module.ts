import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FormsComponent } from './forms/forms.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { StudentsComponent } from './students/students.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';
import {DropdownModule} from 'primeng/dropdown';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddNumbersComponent } from './addnumbers/add-numbers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EmployeesComponent,
    UpdateEmployeeComponent,
    FormsComponent,
    StudentsComponent,
    InsertStudentComponent,
    UpdateStudentComponent,
    AddNumbersComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        HttpClientModule,
        ToastModule,
        MenubarModule,
        ToolbarModule,
        TableModule,
        ReactiveFormsModule,
        RadioButtonModule,
        DropdownModule
    ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

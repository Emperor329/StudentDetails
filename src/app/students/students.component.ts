import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Students} from './students';
import {MessageService} from 'primeng/api';
import {StudentsService} from './students.service';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: any;

  studentsForm: any;

  cols: any[] = [
    {field: 'rollNo', header: 'RollNo'},
    {field: 'name', header: 'Name'},
    {field: 'sclass', header: 'Class'},
    {field: 'gender', header: 'Gender'},
    {field: 'dob', header: 'DOB'}
  ];

  isStudentsList = true;

  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService,
              private studentsService: StudentsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents().subscribe((students: Students[]) => {
      this.students = students;
    });
  }
  navigateToInsertPage(): void{
    this.router.navigate(['insertstudent']);
  }
  navigateToUpdatePage(): void {
    this.router.navigate(['updatestudent']);
  }

  getForm(): void {
    this.studentsForm = this.formBuilder.group({
      rollNo: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      dob: [null, Validators.required]
    });
  }
}




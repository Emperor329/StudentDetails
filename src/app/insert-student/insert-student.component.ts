import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InsertStudentService} from './insert-student.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {Students} from '../students/students';
import {InsertStudent} from './insert-student';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.scss']
})
export class InsertStudentComponent implements OnInit {

  studentForm: FormGroup;

  gender: any[] = [{id: 'M', name: 'Male'}, {id: 'F', name: 'Female'}];

  siblings: any[] = [{id: 1, status: 'Yes'}, {id: 0, status: 'No'}];

  residency: any[] = [
    {name: 'Hostler', id: 'H'},
    {name: 'Day Scholar', id: 'D'}
  ];


  constructor(private formBuilder: FormBuilder,
              private insertStudentService: InsertStudentService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getStudentForm();
  }

  getStudentForm(): void {
    this.studentForm = this.formBuilder.group({
        rollNo: [null, Validators.required],
        studentClass: [null, Validators.required],
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        name: [null, Validators.required],
        gender: [null, Validators.required],
        dob: [null, Validators.required],
        phoneNo: [null, Validators.required],
        emailId: [null, Validators.required],
        fatherName: [null, Validators.required],
        motherName: [null, Validators.required],
        siblings: [null, Validators.required],
        studentAddress: [null, Validators.required],
        residency: [null, Validators.required]
      }
    );
  }

  onSubmit(studentForm: any): void {
    const insertStudent: InsertStudent = {
      rollNo: studentForm.rollNo,
      studentClass: studentForm.studentClass,
      firstName: studentForm.firstName,
      lastName: studentForm.lastName,
      gender: studentForm.gender.id,
      // gender: studentForm.gender.name.toLowerCase() === 'male' ? 'M' : 'F',
      dob: studentForm.dob,
      phoneNo: studentForm.phoneNo,
      emailId: studentForm.emailId,
      fatherName: studentForm.fatherName,
      motherName: studentForm.motherName,
      siblings: studentForm.siblings.id,
      studentAddress: studentForm.studentAddress,
      residency: studentForm.residency.id
    };
    this.insertStudentService.insertStudent(insertStudent).subscribe(() => {
      this.displayMethod('success', 'Student inserted Successfully', 'Success');
    }, error => {
      this.displayMethod('error', error?.error?.message, 'Failed');
    });
  }

  displayMethod(severity: string, summary: string, details: string): void {
    this.messageService.add({
      severity,
      summary,
      detail: details
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {UpdateStudentService} from './update-student.service';
import {ListOfStudents} from './list-of-students';
import {UpdateStudent} from './update-student';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  studentForm: FormGroup;

  studentId: number;

  gender: any[] = [{id: 'M', name: 'Male'}, {id: 'F', name: 'Female'}];

  siblings: any[] = [{status: 'Yes', id: 1}, {status: 'No', id: 0}];

  residency = [
    {id: 'H', name: 'Hostler'},
    {id: 'D', name: 'Day Scholar'}
  ];

  listOfStudents: ListOfStudents[];

  // isSaveChanges: boolean = true;


  constructor(private formBuilder: FormBuilder,
              private updateStudentService: UpdateStudentService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getStudentForm();
    this.getListOfStudents();
  }

  getStudentForm(): void {
    this.studentForm = this.formBuilder.group({
      studentNames: [null, Validators.required],
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
    });
  }

  getListOfStudents(): void {
    this.updateStudentService.getListOfStudents().subscribe((listOfStudents: ListOfStudents[]) => {
        this.listOfStudents = listOfStudents;
        // after saving the details,Student names dropdown is not getting updated automatically.
        // So to update the student names dropdown automatically without refreshing the page,we wrote this
        if (this.studentId){
          this.studentForm.patchValue({
          studentNames: listOfStudents.filter(l => l.studentId === this.studentId)[0]
        });
        }
      },
      error => {
        this.displayMethod('error', error?.error?.message, 'Failed');
      });
  }

  fillStudentForm(): void {
    this.studentId = this.studentForm.value.studentNames.studentId;

      this.updateStudentService.fillStudentForm(this.studentId).subscribe((updateStudent: UpdateStudent) => {
          this.studentForm.patchValue({
            rollNo: updateStudent.rollNo,
            studentClass: updateStudent.studentClass,
            gender: this.gender.filter(g => g.id.toLowerCase() === updateStudent.gender.toLowerCase())[0],
            dob: updateStudent.dob,
            phoneNo: updateStudent.phoneNo,
            emailId: updateStudent.emailId,
            firstName: updateStudent.firstName,
            lastName: updateStudent.lastName,
            fatherName: updateStudent.fatherName,
            motherName: updateStudent.motherName,
            studentAddress: updateStudent.studentAddress,
            siblings: this.siblings.filter(s => s.id === Number(updateStudent.siblings))[0],
            residency: this.residency.filter(r => r.id.toLowerCase() === updateStudent.residency.toLowerCase())[0]
          });
        },
        error => {
          this.displayMethod('error', error?.error?.message, 'Failed');
        });



  }

  saveDetails(studentForm: any): void {
    console.log(studentForm);
    const updateStudent: UpdateStudent = {
      studentId: this.studentId,
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
    this.updateStudentService.updateStudent(updateStudent).subscribe(() => {
        this.getListOfStudents();
        this.displayMethod('success', 'Student Updated Successfully', 'Success');
      },
      error => {
        console.log(error),
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

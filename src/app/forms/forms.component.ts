import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  sampleForm: FormGroup;

  gender: any[] = [{name: 'Male'}, {name: 'Female'}];

  genderSelected: any = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getForm();

    this.genderSelected = this.gender[1];
  }
  onSubmit(): void{
    console.log(this.genderSelected);
  }

  getForm(): void {
    this.sampleForm = this.formBuilder.group({
      rollNo: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      dob: [null, Validators.required]
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addnumbers',
  templateUrl: './add-numbers.component.html',
  styleUrls: ['./add-numbers.component.scss']
})
export class AddNumbersComponent implements OnInit {
  addForm: FormGroup;
  c: number;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getNumbers();
  }

  getNumbers(): void {
    this.addForm = this.formBuilder.group({
      a: [],
      b: [],
      c: []
    });
  }

  onAdd(value: any): void{
    this.addForm.patchValue({
      c: value.a + value.b
    });
    // this.c = this.addForm.value.a + this.addForm.value.b;
  }
}

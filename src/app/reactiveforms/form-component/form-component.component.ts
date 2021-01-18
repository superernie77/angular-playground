import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  genders = ['male','female'];

  signupForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'gender' : new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

}

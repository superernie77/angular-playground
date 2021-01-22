import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.signupForm = new FormGroup( {
      'userData' : new FormGroup( {
        'username' : new FormControl(null, Validators.required ),
        'email' : new FormControl(null, [Validators.required , Validators.email] )
      } ),
      'gender' : new FormControl('male'),
      'hobbies': new FormArray([])
    } );
  }

  onAddHobbies(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);

  }

  onSubmit(){
    console.log(this.signupForm);
  }

}

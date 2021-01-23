import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, TimeoutError } from 'rxjs';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  genders = ['male','female'];

  signupForm : FormGroup;

  forbidenUsername = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup( {
      'userData' : new FormGroup( {
        'username' : new FormControl(null, [Validators.required, this.checkNames.bind(this)] ),
        'email' : new FormControl(null, [Validators.required , Validators.email], this.checkEmail );
      } ),
      'gender' : new FormControl('male'),
      'hobbies': new FormArray([])
    } );

    this.signupForm.setValue({
      'userData' : {
        'username' : 'Ernie',
        'email' : 'ernie@test.com'
      },
      'gender': 'male',
      'hobbies' : []
    });

    this.signupForm.patchValue({
      'userData' : {
        'username' : 'Heike',
        'email' : 'ernie@test.com'
      },
      'gender': 'female',
      'hobbies' : []
    });
  }

  onAddHobbies(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);

  }

  onSubmit(){
    console.log(this.signupForm);
  }

  checkNames(control : FormControl): {[s: string ] : boolean } {
    if (this.forbidenUsername.indexOf(control.value) != -1) {
      return {'nameisforbidden' : true};
    }
    return null;
  }

  checkEmail(control : FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden' : true});
        } else {
          resolve(null);
        }
      }
    });
    return promise;
  }

}

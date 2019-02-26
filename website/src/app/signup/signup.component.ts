import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.signupform=this.fb.group({
      'firstName':[null,[Validators.required]],
      'lastName': [null, Validators.required],
      'email':[null,[Validators.required,Validators.email]],
      'password': [null, Validators.required],
    
    });
  }
  signup(formData:NgForm){
    console.log(formData);
  }

}
//fin
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPayload } from 'src/app/models/user-payload';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  payLoad: UserPayload;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.signupForm = this.formBuilder.group ({
      
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      username:['', Validators.required],
      email:['', [Validators.required]],
      confirmEmail:['', Validators.required],
      password:['password', Validators.required],
      confirmPassword:['', Validators.required]
    });
    
    this.payLoad= {
      username: '',
      emailAddress: '',
      password: '',
      firstName: '',
      lastName: '',  
    }
   };

  ngOnInit(): void {
  }
  passwordValidation(){
    const password = this.signupForm.get('password').value;
    const confirmPassword = this.signupForm.get('confirmPassword').value;
    if(!password || !confirmPassword) {
      console.log("pass error")
      return null;}
    if(password === confirmPassword) {
      console.log("password clear")
      return true;
    }
  }

  emailValidation(){
    const email = this.signupForm.get('email').value;
    const confirmEmail = this.signupForm.get('confirmEmail').value;
    if (!email || !confirmEmail) {
      console.log("email error")
      return null}
    if (email === confirmEmail) { 
      console.log("email clear")
      return true;
    }        
  }
    

  onSubmit(){
    //verification that form is completed

    console.log("here - first");
    if (!this.passwordValidation() && !this.emailValidation()) {
    console.log("validation fails");
    }
    console.log("here - second")
    if ( this.passwordValidation() && this.emailValidation()) {
      console.log ("validation passes")
    }

    //setting payload for User creation of BE

    this.payLoad.username = this.signupForm.get('username').value;
    this.payLoad.firstName = this.signupForm.get('firstName').value;
    this.payLoad.lastName = this.signupForm.get('lastName').value;
    this.payLoad.emailAddress = this.signupForm.get('email').value;
    this.payLoad.password = this.signupForm.get('password').value;
    
    //sending User to the BR

    this.userService.signUp(this.payLoad).subscribe(data => {
      console.log('User created');
      alert("Welcome!");
      this.router.navigateByUrl('/login');
    }, error => {
      alert("Opps Something went wrong!")
      console.log('register failed'); 
    
    });
 
  }
}

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
    const password = this.signupForm.get('password');
    const confirmPassword = this.signupForm.get('confirmpassword');
    if(!password || !confirmPassword) {return null;}
    if(password.value === confirmPassword.value) {
      return true;
    }
    

    // if (this.signupForm.get(signup.password) != 'password') {
    //   var password = this.signupForm.get('password').value;

    //   var confirmPassword = this.signupForm.get('confirmPassword').value;
    //   return password === confirmPassword;
    // }
    // return null;
  
}

  emailValidation(){
    const email = this.signupForm.get('email');
    const confirmEmail = this.signupForm.get('confirmemail');
    if (!email || !confirmEmail) {return null}
    if (email.value === confirmEmail.value) { 
      return true}
  
    //   if (this.signupForm.get(email) != null){
  //   console.log(this.signupForm.get(email));
  //   var email = this.signupForm.get('email').value;
  //   var confirmEmail = this.signupForm.get('confirmEmail').value;
  //   return email === confirmEmail;
  //   }
  //   return "error";
    
  }
    

  onSubmit(){
    if (this.signupForm.dirty && this.signupForm.valid){
      console.log("validation dirty");
    }
    console.log("or here- first");
    if (!this.passwordValidation() && !this.emailValidation()) {
    console.log("validation fails");
    }
    this.payLoad.username = this.signupForm.get('username').value;
    this.payLoad.firstName = this.signupForm.get('firstName').value;
    this.payLoad.lastName = this.signupForm.get('lastName').value;
    this.payLoad.emailAddress = this.signupForm.get('email').value;
    this.payLoad.password = this.signupForm.get('password').value;
    

    this.userService.signUp(this.payLoad).subscribe(data => {
      console.log('User created');
      alert("Welcome!");
      this.router.navigateByUrl('/login');
    }, error => {
      alert("Opps Something went wrong!")
      console.log('register failed'); 
    
    });
  //}else(alert("Opps Something Went Wrong!"));
  }
}

import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: Login;

  constructor(private userService: UserService, private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

    this.login = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit(): boolean{
    this.login.username = this.loginForm.get('username').value;
    this.login.password = this.loginForm.get('password').value;
    this.userService.login(this.login.username, this.login.password);
    this.router.navigateByUrl('/home')
    return true;
  }
    //if null


  





  //   this.userService.login(this.login).subscribe(data => {
  //     if (data) {
  //       console.log('login success');
  //       this.router.navigateByUrl('/homepage');
  //     } else {
  //       console.log('Login failed');
  //     }
  //   });
  // }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string = ''
  password: string = ''
  errors: { email: string, password: string } = { email: '', password: '' }

  constructor(private router: Router, private message: NzMessageService) { }

  ngOnInit() {
  }

  signIn(email, password) {
    let emails = ['partha.konda@nividit.com', 'balamurali.panadranki@nividit.com', 'admin@nividit.com']
    let passwords = ['Welcome@123']
    if (emails.includes(email) && passwords.includes(password)) {
      this.errors = { email: '', password: '' }
      this.message.create('success', 'Welcome');
      localStorage.setItem('token', 'loggedin')
      this.router.navigate(['dashboard'])
    }
    else {
      this.errors = {
        email: 'Invalid email address',
        password: 'Invalid email address or password'
      }
    }
    if (this.password.length < 8) {
      this.errors.password = 'Password must 8 or more characters'
    }
  }

}

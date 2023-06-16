import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = false
  token = ''
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  usuario : any = {
    username: '',
    password: ''
  }
  username:string = ''
  password:string = ''

  constructor(private router: Router) { }
  onSubmit(){
    
      this.router.navigate(['/inicio'])
  }
}
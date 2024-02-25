import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private _auth:AuthService
  ){}
  ngOnInit():void{}
  login(loginForm: NgForm){
  if(loginForm.valid)
  {
   this._auth.login(loginForm.value);
  }
  }
  }

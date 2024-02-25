import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // kahve molası...
api:string="https://localhost:7245/api"+"/Auth";
  constructor(private _http:HttpClient,
    private _router:Router) { }
    login(model:UserModel)
    {
      this._http.post<UserModel>(this.api+"/Login",model).subscribe({
        next:(res)=>{
          localStorage.setItem("user",JSON.stringify(res));
          this._router.navigateByUrl("/");
        }
      })
    }
}
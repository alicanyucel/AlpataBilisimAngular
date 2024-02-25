import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user';
import { LoginResponseModel } from '../models/LoginResponseModel';
import { RegisterModel } from '../models/RegisterModel';

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
    register(model:RegisterModel, callBack: (res:LoginResponseModel)=> void){
      this._http.post<LoginResponseModel>("auth/register",model);
    }
}
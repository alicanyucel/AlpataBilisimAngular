import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { RegisterModel } from 'src/app/models/RegisterModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: RegisterModel = new RegisterModel();

  constructor(
    private _auth: AuthService,
    private _toastr:ToastrService,
    private _router: Router
  ){}

  register(form:NgForm){
    if(form.valid){
      this._auth.register(this.model,res=>{
        localStorage.setItem("token",res.token);
        localStorage.setItem("user",JSON.stringify(res.user));
        this._toastr.success("Kullanıcı kaydı başarıyla tamamlandı!");
        this._router.navigateByUrl("/");
      });
    }
  }
}

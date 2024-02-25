import { AfterContentChecked, Component } from '@angular/core';
import { UserModel } from './models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/meets">Toplantılar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="/">
          <i class="fa fa-home">Ana Sayfa</i>  
         </a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success" routerLink="/login" *ngIf="!isAuth" type="submit" >
          <i class="fa fa-lock">
          </i> Giriş Yap
          </button>
        <span class="btn btn-outline-danger mx-2" (click)="logOut()" *ngIf="isAuth"><i class="fa fa-power-off"></i>
          {{userName}}(Çıkış Yap)</span> 
      </form>
    </div>
  </div>
</nav>
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterContentChecked {
  isAuth=false
  userName:string=""
  constructor(
    private _router:Router,private _toastr:ToastrService
  ){}
    ngAfterContentChecked(): void {
     this.checkUser();
    }
  checkUser(){
    if(localStorage.getItem("user"))
    {
      this.isAuth=true;
      let user:UserModel=JSON.parse(localStorage.getItem("user"));
      this.userName=user.LastName;
    }
    else
    this.isAuth=false;
  }
  logOut(){
    localStorage.clear();
    this._toastr.warning("başarıyla çıkış yapıldı");
    this._router.navigateByUrl("/login");
  }
  }

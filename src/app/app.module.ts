import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { MeetComponent } from './components/meet/meet.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { CommonInterceptor } from './interceptors/common.interceptor';
import { FormsModule } from '@angular/forms';
import { CheckInputValidDirective } from './directives/check-input-valid.directive';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/meet/update/update.component';
import { LoginComponent } from './components/auth//login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';
import { AddComponent } from './components/meet/add/add.component';
import { pipe } from 'rxjs';
import { MeetsPipe } from './Pipes/meetpipe';
const routes: Routes = [
  {
    path: "meets",
    component:  MeetComponent
  
  },
  {
    path: "file",
    component:  FileUploadComponent
   
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "add",
    component: AddComponent,
 
  },
  {
    path: "update/:value",
    component: UpdateComponent,
  
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MeetComponent,
    FileUploadComponent,
    CheckInputValidDirective,
    UpdateComponent,
    AddComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
    }),
    RouterModule.forRoot(routes)
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

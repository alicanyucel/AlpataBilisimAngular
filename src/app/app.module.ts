import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MeetComponent } from './meet/meet.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { CommonInterceptor } from './interceptors/common.interceptor';
import { FormsModule } from '@angular/forms';
import { CheckInputValidDirective } from './directives/check-input-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MeetComponent,
    FileUploadComponent,
    SendMailComponent,
    CheckInputValidDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { AppComponent } from './app.component';

import {ServerComponent} from './server/server.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [AppComponent,
  ServerComponent,
  LoginComponent,
  SignupComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

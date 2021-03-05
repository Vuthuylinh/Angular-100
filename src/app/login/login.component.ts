import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  authForm = this.fb.group({
    email: ['', Validators.required],
   password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

}

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  userName: string;
  password: string;
  rememberMe: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('User Name: ' + this.userName + '\n password: ' + this.password);
  }

}

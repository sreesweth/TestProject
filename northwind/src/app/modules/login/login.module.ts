import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

//--------------Modules,.

//Directives,
//Compoents,
//Services
//Pipes

@NgModule({
  declarations: [ // Declare any components that you create as part of this module
    LoginFormComponent, RegistrationFormComponent
  ],
  imports: [ //
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
   exports: [
    LoginFormComponent
   ],
   providers: [ // add services to a module.

   ]
})

export class LoginModule { }

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   
    constructor(private builder:FormBuilder){
    }
    regform = new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
    //or
    registerForm = this.builder.group({
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
    get username(){return this.registerForm.get('username')}
     
    get password(){return this.registerForm.get('password')}
     
  onSubmit(){
    alert(JSON.stringify(this.registerForm.value))
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  form: FormGroup;
  isRegistration : boolean = false;
  control = new FormControl('',[Validators.required])

  constructor(private loginService: LoginService, private _fb: FormBuilder, private router: Router){
    this.form = this._fb.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
    this.updateFormControls();
  }

  updateFormControls(){
    this.isRegistration ? 
    this.form.addControl('confirmPassword', this.control) : 
    this.form.contains('confirmPassword') ? this.form.removeControl('confirmPassword') : null;
  }

  onSubmit(){
    if(this.form.valid){
      if(this.isRegistration) {
        this.loginService.signup(this.form.value.email as string, this.form.value.password as string).subscribe((data) => {
            console.log(data);
            localStorage.setItem('token', data?.token);
        }, e => {
            console.log(e)
        });
      } else {
        this.loginService.login(this.form.value.email as string, this.form.value.password as string).subscribe((data) => {
            console.log(data);
            localStorage.setItem('token', data?.token);
            this.router.navigateByUrl('/dashboard')
        }, e => {
            console.log(e)
        });
      }
    } else {
      alert('Form is invalid')
    }
  }



  onLoginTypeChange(){
    this.isRegistration = !this.isRegistration;
    this.updateFormControls();
  }
}

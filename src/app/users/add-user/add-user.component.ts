import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
  mode : string = 'create';
  userId : string = '';
  user : User = {
    id : '',
    fullName : '',
    email : ''
  };
  public form: FormGroup = new FormGroup({});

  constructor(
    private usersService: UsersService,
    private router : Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });

    this.route
    .queryParams
    .subscribe(params => {
        this.userId = params['id'];
        this.mode = this.userId ? 'edit' : 'create';
        if(this.userId){
          this.usersService.fetchUserInfo(this.userId).subscribe((data) => {
            console.log(data)
            this.user = {
              id : data.id,
              fullName : data.fullName,
              email : data.email
            }
            this.form.setValue({
              fullName : this.user.fullName,
              email : this.user.email
            })
          })
        }
    });
  }

  onSubmit(form: FormGroup) {
    if(form.valid){
      if(this.mode === 'create'){
        this.usersService.addUser(form.value.fullName, form.value.email).subscribe(responseData => {
          this.router.navigateByUrl('/users')
        });
      } else {
        this.usersService.updateUser(this.userId,form.value.fullName, form.value.email).subscribe(responseData => {
          this.router.navigateByUrl('/users')
        });
      }
    }
  }
}

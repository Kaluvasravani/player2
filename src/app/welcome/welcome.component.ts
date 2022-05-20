import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user=new User();
  msg='';

  constructor(private _service:RegistrationService,private _router : Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
        this.msg="bad credentials,please enter the valid username and password";
      }
    )


  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}

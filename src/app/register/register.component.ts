import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient, private userservice:UserService, private builder:FormBuilder, private router:Router) { }

ngOnInit(): void {

}

 registerform = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
  email: new FormControl('',[Validators.required,Validators.email]),
  contact: new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}$')]),
  gender: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required])
  })

signUp(){
  console.log(this.registerform.value)
  alert("Signup Successful...");
  this.registerform.reset();
  this.userservice.addData(this.registerform.value).subscribe((data)=>{
  //console.log("data")
  this.router.navigate(['login']);
  })

}


get err(){
  return this.registerform.controls;
}

get name(){
  return this.registerform.get("name");
}

get email(){
  return this.registerform.get("email");
}

get contact(){
  return this.registerform.get("contact");
}

get gender(){
  return this.registerform.get("gender");
}
get password(){
  return this.registerform.get("password");
}

}

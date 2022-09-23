import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // public loginForm!:FormGroup; //========for API call

  constructor(private formbuilder:FormBuilder, private userservice:UserService, private http:HttpClient, private router:Router) { }


  ngOnInit(): void {

    }

    loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required])
    })
    userdata:any
    login(){
      console.log(this.loginForm.value)
      this.userservice.getData().subscribe((mdata)=>{
        this.userdata=mdata
        this.userdata.push(this.loginForm.value)
        console.log(this.userdata)
        alert("Login Successful...");
        this.loginForm.reset();
      })

    }

    get err(){
      return this.loginForm.controls;
    }

    get email(){
      return this.loginForm.get("email");
    }

    get password(){
      return this.loginForm.get("password");
    }



  //========== API call =============

  // this.loginForm = this.formbuilder.group({
  //   email:['',Validators.required],
  //   password:['',Validators.required]
  // })

  //   login(){
  //     this.userservice.getData().
  //     subscribe(data=>{
  //       const user = data.find((a:any)=>{
  //         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  //       });
  //       if(user){
  //         alert("Login Successfull");
  //         this.loginForm.reset();
  //         this.router.navigate(['dashboard'])
  //       }else{
  //         alert("User Not found");
  //       }

  //       },err=>{
  //         alert("Something ent Wrong")
  //       });
  //  }



}

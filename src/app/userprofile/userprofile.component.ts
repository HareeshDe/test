import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.profile();
  }

  profiledata:any;
  profile(){
    this.service.userProfileData().subscribe((prodata)=>{
      this.profiledata=prodata
      console.log(prodata)
    })
  }

}

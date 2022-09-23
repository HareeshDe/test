import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.showData();
  }
  userdetails:any;

  showData(){
    this.userservice.getData().subscribe((mdata)=>{
    this.userdetails=mdata
    console.log(mdata)
    })

  }




}

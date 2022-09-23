import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

headers:any;

// ======= GetUser API ======
getData(){

  return this.http.get("https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json");
}

//======= GetUserProfile API ======
userProfileData(){
  return this.http.get("https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/user-profile.json")
}

// ======== PostUser API ======
addData(FormData:any){
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

return this.http.post("https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json",FormData)
}

}

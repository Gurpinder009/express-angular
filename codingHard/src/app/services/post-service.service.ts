import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userDataType} from "../interfaces/userDataType"
import {userInfoUrl }from "../import figures/userDataUrl"

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  userPost: userDataType;

  constructor(private http: HttpClient) {
    this.userPost= {
      userName: "",
      userEmail: "",
      userPassword: "",
      userPhoneNumber: ""
    };
  }

  postData(data) {
    this.userPost = {
      userName: data.userName,
      userEmail: data.userEmail,
      userPhoneNumber: data.userPhoneNumber,
      userPassword: data.userPassword
    }
    this.http.post(userInfoUrl, this.userPost).subscribe();
  }


}

import { Component, OnInit } from '@angular/core';import { GetServiceService } from '../../services/get-service.service'
import { Router } from '@angular/router';
import { userDataType } from '../../interfaces/userDataType'


@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['../style.css','./user-data-table.component.css']
})
export class UserDataTableComponent implements OnInit {
  userGet: userDataType[] = [
    {
      userName: "",
      userEmail: "",
      userPassword: "",
      userPhoneNumber: ""
    },
  ];

  constructor(private getService: GetServiceService, private router: Router) {
    this.getRefreshedData();
  }

  ngOnInit(): void {
  }
  getRefreshedData(): void  {
    this.getService.getData().subscribe((data) => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.userGet[i] = {
          userName: data[i].user_name,
          userEmail: data[i].user_email,
          userPassword: data[i].user_password,
          userPhoneNumber: data[i].user_phone_number
        }
      }
      
    })


  
  }
  
}

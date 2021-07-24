import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {userInfoUrl }from "../import figures/userDataUrl"


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(userInfoUrl);
  }
  
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private url = 'http://api.saba.tj:9998'
  // http://10.251.2.68:9998

  constructor(private http: HttpClient) {}

  // Auth
  authRequests(phone: any, pinCode: number) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post( this.url + "/api/reg/token", {"phone": phone, "pinCode": pinCode}, {headers: header})
  }
  // End of Auth

  // Users
  getUsersRequests() {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.get( this.url + "/api/users/all", {headers: header})
  }

  // Users Edit
  getUsersEditRequests(id: any) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.get( this.url + "/api/users/byid?q=" + id, {headers: header})
  }
  
  //End of Users Edit
  // End of Users
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private url = 'http://api.saba.tj:9998'
  // http://api.saba.tj:9998
  // http://45.94.219.6:9998
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


  putUsersEditRequests(userID: any, phoneNumber: any, firstName: any, lastName: any, birthDate: any, email: any, userInfo: any) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.post( this.url + "/api/users", {"userID": userID, "phoneNumber": phoneNumber, "firstName": firstName, "lastName": lastName, "birthDate": birthDate, "email": email, "userInfo": userInfo}, {headers: header})
  }

  deleteUsersEditRequests(id: any) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.delete( this.url + "/api/users?q=" + id, {headers: header})
  }
  //End of Users Edit
  // End of Users

  // Trips
  getTripsRequests() {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.get( this.url + "/api/order", {headers: header})
  }

  // Trips Edit
  putTripsEditRequests(orderID: any, active: any, created: any, dis: any, driverID: any, driverName: any, finishPoint: any, orderName: any, parkingsPoints: any, passengers: any, price: any, pricefront: any, reserveID: any, startPoint: any, time: any) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.post( this.url + "/api/order", {"orderID": orderID, "active": active, "created": created, "dis": dis, "driverID": driverID, "driverName": driverName, "finishPoint": finishPoint, "orderName": orderName, "parkingsPoints": parkingsPoints, "passengers": passengers, "price": price, "pricefront": pricefront, "reserveID": reserveID, "startPoint": startPoint, "time": time}, {headers: header})
  }

  deleteTripsEditRequests(ids: any) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.request('DELETE', this.url + "/api/order", { headers: header, body: {"ids": [ids]} })
  }
  // End of Trips Edit
  // End of Trips

  // Brones
  getBronesRequests() {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.get( this.url + "/api/order/reserve/all", {headers: header})
  }

  // Brones Edit
  getBronesEditRequests(id: any) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.get( this.url + "/api/order/reserve/byorderid?q=" + id, {headers: header})
  }

  // putBronesEditRequests(dopInfo: any, orderID: any, packagePrice: any, photoID: any, rID: any, status: any, userCount: any, userID: any, userName: any, userPhoto: any) {
  //   let header: HttpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `${localStorage.getItem('access_token')}`
  //   })
  //   return this.http.post( this.url + "/api/order/reserve", {"dopInfo": dopInfo, "orderID": orderID, "packagePrice": packagePrice, "photoID": photoID, "rID": rID, "status": status, "userCount": userCount, "userID": userID, "userName": userName, "userPhoto": userPhoto}, {headers: header})
  // }
  // End of Brones Edit
  // End of Brones

    // Cars
    getCarsRequests() {
      let header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('access_token')}`
      })
      return this.http.get( this.url + "/api/cars/all", {headers: header})
    }
  
    // Cars Edit
    getCarsEditRequests(id: any) {
      let header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('access_token')}`
      })
      return this.http.get( this.url + "/api/cars/byid?q=" + id, {headers: header})
    }
  
    putCarsEditRequests(carID: any, carNumber: any, carBody: any, markID: any, modelID: any, capacity: any, producedYear: any) {
      let header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('access_token')}`
      })
      return this.http.post( this.url + "/api/cars", {"carID": carID, "carNumber": carNumber, "carBody": carBody, "markID": markID, "modelID": modelID, "capacity": capacity, "producedYear": producedYear}, {headers: header})
    }

    deleteCarsEditRequests(id: any) {
      let header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('access_token')}`
      })
      return this.http.delete( this.url + "/api/cars/byid?q=" + id, {headers: header})
    }
    // End of Cars Edit
    // End of Cars

}
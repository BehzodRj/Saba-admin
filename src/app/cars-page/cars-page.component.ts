import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit {
  carsData: any = []
  page: any
  search: any

  constructor(private request: RequestsService) { }

  ngOnInit() {
    this.request.getCarsRequests().subscribe( (response: any) => {
      this.carsData = response.cars
    }, error => {
      alert(error.error)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-trips-page',
  templateUrl: './trips-page.component.html',
  styleUrls: ['./trips-page.component.scss']
})
export class TripsPageComponent implements OnInit {
  tripsData: any = []
  page: any
  search: any

  constructor(private request: RequestsService) {}

  ngOnInit() {
    this.request.getTripsRequests().subscribe(response => {
      this.tripsData = Object.values(response)
    }, error => {
      alert(error.error)
    })
  }

}

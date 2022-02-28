import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-brones-page',
  templateUrl: './brones-page.component.html',
  styleUrls: ['./brones-page.component.scss']
})
export class BronesPageComponent implements OnInit {
  bronesData: any = []
  page: any
  search: any

  constructor(private request: RequestsService) { }

  ngOnInit() {
    this.request.getBronesRequests().subscribe(response => {
      this.bronesData = Object.values(response)
    }, error => {
      alert(error.error)
    })
  }

}

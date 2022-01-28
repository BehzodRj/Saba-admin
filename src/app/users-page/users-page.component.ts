import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  page: any
  search: any
  usersData: any = []

  constructor(private request: RequestsService) { }

  ngOnInit() {
    this.request.getUsersRequests().subscribe(response => {
      this.usersData = Object.values(response)
    })
  }

}

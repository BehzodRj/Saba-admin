import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-users-edit-page',
  templateUrl: './users-edit-page.component.html',
  styleUrls: ['./users-edit-page.component.scss']
})
export class UsersEditPageComponent implements OnInit {
  usersEditData: any = []
  usersEditForm!: FormGroup

  constructor(private route: ActivatedRoute, private request: RequestsService) { }

  ngOnInit() {
    this.usersEditForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      userInfo: new FormControl('')
    })

    this.route.params.subscribe( (params: any) => {
      this.request.getUsersEditRequests(params.id).subscribe(response => {
        this.usersEditData = response
        this.usersEditForm.patchValue(response)
      })
    })
  }

  saveUserEdit() {
    const userEditFormData = {...this.usersEditForm.value}
    console.log(userEditFormData);
  }

}

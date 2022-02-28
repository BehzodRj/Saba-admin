import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-users-edit-page',
  templateUrl: './users-edit-page.component.html',
  styleUrls: ['./users-edit-page.component.scss']
})
export class UsersEditPageComponent implements OnInit {
  usersEditData: any = []
  usersEditForm!: FormGroup

  constructor(private route: ActivatedRoute, private router: Router, private request: RequestsService) { }

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
      }, error => {
        alert(error.error)
      })
    })
  }

  showCar(id: any) {
    if(id == '') {
      alert('У этого пользователя нет автомобил')
    } else if(id) {
      this.router.navigate(['/carsedit', id])
    }
    
  }

  saveUserEdit() {
    const userEditFormData = {...this.usersEditForm.value}
    this.route.params.subscribe( (params: any) => {
      this.request.putUsersEditRequests(params.id, userEditFormData.phoneNumber, userEditFormData.firstName, userEditFormData.lastName, this.usersEditData.birthDate, userEditFormData.email, userEditFormData.userInfo).subscribe(response => {
        this.router.navigate(['/users'])
      }, error => {
        alert(error.error)
      })
    })
  }
  
  deleteUserEdit(id: any) {
    this.request.deleteUsersEditRequests(id).subscribe(response => {
      this.router.navigate(['/users'])
    }, error => {
      alert(error.error)
    })
  }

}

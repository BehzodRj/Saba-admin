import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-brones-edit-page',
  templateUrl: './brones-edit-page.component.html',
  styleUrls: ['./brones-edit-page.component.scss']
})
export class BronesEditPageComponent implements OnInit {
   bronesEditForm!: FormGroup
   broneEditData: any = []

  constructor(private route: ActivatedRoute, private router: Router, private request: RequestsService) {}

  ngOnInit() {
    this.bronesEditForm = new FormGroup({
      dopInfo: new FormControl(''),
      status: new FormControl('')
    })

    this.route.params.subscribe( (params: any) => {
      this.request.getBronesEditRequests(params.id).subscribe( (response: any) => {
        this.broneEditData = response.reservs[0]
        this.bronesEditForm.patchValue(response.reservs[0])
      }, error => {
        alert(error.error)
      })
    })
  }

  // saveBronesEdit() {
  //   const bronesEditFormData = {...this.bronesEditForm.value}
  //   this.route.params.subscribe( (params: any) => {
  //     this.request.putBronesEditRequests(bronesEditFormData.dopInfo, this.broneEditData.orderID, this.broneEditData.packagePrice, this.broneEditData.photoID, this.broneEditData.rID, bronesEditFormData.status, this.broneEditData.userCount, this.broneEditData.userID, this.broneEditData.userName, this.broneEditData.userPhoto).subscribe(response => {
  //       this.router.navigate(['/brones'])
  //     }, error => {
  //       alert(error.error)
  //     })
  //   })
  // }

}

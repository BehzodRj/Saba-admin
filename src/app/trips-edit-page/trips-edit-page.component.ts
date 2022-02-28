import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-trips-edit-page',
  templateUrl: './trips-edit-page.component.html',
  styleUrls: ['./trips-edit-page.component.scss']
})
export class TripsEditPageComponent implements OnInit {
  tripsEditForm!: FormGroup
  tripsEditData: any = []

  constructor(private route: ActivatedRoute, private router: Router, private request: RequestsService) { }

  ngOnInit() {  
    this.tripsEditForm = new FormGroup({
      orderName: new FormControl(''),
      active: new FormControl()
    })

    this.route.params.subscribe( (params: any) => {
      this.request.getTripsRequests().subscribe( (response: any) => {
        let array: any = Object.values(response)[0]
        this.tripsEditData = array.filter( (res: any) => res.orderID == params.id)
        this.tripsEditForm.patchValue(this.tripsEditData[0])
      }, error => {
        alert(error.error)
      })
    })
  }

  saveTripsEdit() {
    const tripsEditFormData = {...this.tripsEditForm.value}
    this.route.params.subscribe( (params: any) => {
      this.request.putTripsEditRequests(params.id, tripsEditFormData.active, this.tripsEditData[0].created, this.tripsEditData[0].dis, this.tripsEditData[0].driverID, this.tripsEditData[0].driverName, this.tripsEditData[0].finishPoint, tripsEditFormData.orderName, this.tripsEditData[0].parkingsPoints, this.tripsEditData[0].passengers, this.tripsEditData[0].price, this.tripsEditData[0].pricefront, this.tripsEditData[0].reserveID, this.tripsEditData[0].startPoint, this.tripsEditData[0].time).subscribe(response => {
        this.router.navigate(['/trips'])
      }, error => {
        alert(error.error)
      })
    })
  }

  deleteTripsEdit(id: any) {
    this.request.deleteTripsEditRequests(id).subscribe(response => {
      this.router.navigate(['/trips'])
    }, error => {
      alert(error.error)
    })
  }

}

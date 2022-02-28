import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-cars-edit-page',
  templateUrl: './cars-edit-page.component.html',
  styleUrls: ['./cars-edit-page.component.scss']
})
export class CarsEditPageComponent implements OnInit {
  carsEditForm!: FormGroup
  carsEditData: any = []
  photo: any

  constructor(private route: ActivatedRoute, private router: Router, private request: RequestsService) {}

  ngOnInit() {
    this.carsEditForm = new FormGroup({
      carID: new FormControl(''),
      carNumber: new FormControl(''),
      carBody: new FormControl(''),
      markID: new FormControl(''), 
      modelID: new FormControl(''), 
      capacity: new FormControl(''), 
      producedYear: new FormControl('')
    })

    this.route.params.subscribe( (params: any) => {
      this.request.getCarsEditRequests(params.id).subscribe(response => {
        this.carsEditData = response
        this.carsEditForm.patchValue(response)
        this.photo = this.carsEditData.photos[0]
      }, error => {
        alert(error.error)
      })
    })
  }

  saveCarsEdit() {
    const carsEditFormData = {...this.carsEditForm.value}
    console.log(carsEditFormData);
    this.request.putCarsEditRequests(carsEditFormData.carID, carsEditFormData.carNumber, carsEditFormData.carBody, carsEditFormData.markID, carsEditFormData.modelID, carsEditFormData.capacity, carsEditFormData.producedYear).subscribe(response => {
      this.router.navigate(['/cars'])
    }, error => {
      alert(error.error)
    })
  }

  deleteCarsEdit(id: any) {
    this.request.deleteCarsEditRequests(id).subscribe(response => {
      this.router.navigate(['/cars'])
    }, error => {
      alert(error.error)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  authForm!: FormGroup

  constructor(private router: Router, private request: RequestsService) {}

  ngOnInit() {
    this.authForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    if(localStorage.getItem('access_token')) {
      this.router.navigate(['/profile'])
    } else {
      this.router.navigate(['/'])
    }
  }

  logIn() {
    const authFormData = {...this.authForm.value}
    this.request.authRequests(authFormData.login, authFormData.password).subscribe( (response: any) => {
      localStorage.setItem('access_token', response.token)
      this.router.navigate(['/profile'])
    }, error => {
      alert(error.error)      
    })
  }

}

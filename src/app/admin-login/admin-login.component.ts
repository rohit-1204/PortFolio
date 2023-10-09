import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  contactForm: FormGroup;
  showSuccess = false;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthServiceService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    let userToken = sessionStorage.getItem('userToken');
    if (userToken == 'true') {
      this.router.navigate(['/dashboard']);
    }
  }

  Login() {
    if (this.contactForm.valid) {
      this.auth.adminLogin(this.contactForm.value.userName, this.contactForm.value.password)
    }
  }
  // netlify pas
  // Peterportfolio
}

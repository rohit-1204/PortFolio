import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  showSuccess = false;
  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      phone: ['', Validators.required]

    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.showSuccess = true
      console.log(this.contactForm.value);
      this.apiService.contact(this.contactForm.value)
      setTimeout(() => {
        this.showSuccess = false
        this.contactForm.reset();
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      }, 1000);

    }
  }
}

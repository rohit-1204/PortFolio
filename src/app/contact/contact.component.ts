import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service.service';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  showSuccess = false;
  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService, private toasterService: ToastrService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      message: ['', [Validators.required, Validators.max(100)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]

    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.toasterService.success('Contact Saved Successfully !', 'Contact Details', { positionClass: 'toast-bottom-center' })
      this.sendEmail(this.contactForm.value);
      this.apiService.contact(this.contactForm.value)
      setTimeout(() => {
        this.contactForm.reset();
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      }, 1000);

    }
  }
  sendEmail(form: any) {
    emailjs.init('I709n2wKFFvSlaYVP');
    emailjs.send("service_jbj7kmt", "template_fg1duy1", {
      from_firstName: form.firstName,
      from_lastName: form.lastName,
      from_email: form.email,
      from_phone: form.phone,
      from_message: form.message,
    },);
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private apiService: ApiService, private router: Router, private toasterService: ToastrService) {
    this.getContacts()
  }
  async getContacts() {
    let contacts = await this.apiService.getContacts();
    console.log(contacts)
  }
  logOut() {
    sessionStorage.removeItem('userToken');
    this.toasterService.success('Log Out Successfully !', 'Log Out')
    this.router.navigate(['/admin'])
  }
}

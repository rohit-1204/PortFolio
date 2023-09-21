import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private apiService: ApiServiceService) {
    this.getContacts()
  }
  async getContacts() {
    let contacts = await this.apiService.getContacts();
    console.log(contacts)
  }
}

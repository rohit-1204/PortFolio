import { Component } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private apiService: ApiService) {
    this.getContacts()
  }
  async getContacts() {
    let contacts = await this.apiService.getContacts();
    console.log(contacts)
  }
}

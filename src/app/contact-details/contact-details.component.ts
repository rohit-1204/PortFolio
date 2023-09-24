import { Component } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  contactList = [];
  constructor(public api: ApiService) {

  }
  ngOnInit() {
    this.getContacts();
  }
  async getContacts() {
    (await this.api.getContacts()).subscribe((res) => {
      this.contactList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      console.log(this.contactList)
    })
  }
  deleteContact(contact: any) {
    this.api.delete(contact).then(res => {
      this.getContacts()
    })
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  contactList: void[];

  constructor(private api: AngularFirestore, private toaster: ToastrService, private router: Router) { }
  // add contact
  contact(record: any) {
    // record['Id'] = this.api.createId()
    this.api.collection('Contacts').add(record).then(() => {
      this.toaster.success('Contact Added Successfully', 'Contact Details');
    }).catch(err => {
      this.toaster.error(err.message, 'Contact Details');
    })
  }
  // get contacts
  async getContacts() {
    return await this.api.collection('Contacts').snapshotChanges();

  }
  // get contact
  getContact(id: string) {
    return this.api.collection('/Contacts').doc(id).snapshotChanges();
  }

  // delete contact
  delete(contact: any) {
    return this.api.collection('/Contacts').doc(contact.id).delete().then(() => {
      this.toaster.warning('Contact Deleted Successfully', 'Contact Delete');
    }).catch(err => {
      this.toaster.error(err.message, 'Contact Delete');
    })
  }
}

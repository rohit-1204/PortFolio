import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  contactList: void[];

  constructor(private api: AngularFirestore, private toaster: ToastrService, private router: Router) { }

  contact(record: any) {
    record['Id'] = this.api.createId()
    this.api.collection('Contacts').add(record).then(() => {
      this.toaster.success('Contact Added Successfully', 'Contact Details');
    }).catch(err => {
      this.toaster.error(err.message, 'Contact Details');
    })
  }
  async getContacts() {
    let result = await this.api.collection('Contacts').snapshotChanges();
    result.subscribe((responce => {
      this.contactList = responce.map((e: any) => {
        const data = e.payload.docs.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }))
    return this.contactList;
  }
  getContact(id: string) {
    return this.api.collection('/Contacts').doc(id).snapshotChanges();
  }
}

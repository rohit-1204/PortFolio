import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private fireAuth: AngularFireAuth, private toaster: ToastrService, private router: Router) {
    // this.register('rohitpathare1204@gmail.com', 'Test@1234');
  }
  adminLogin(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.toaster.success('Login Successfully', 'Admin Login', {
          timeOut: 10000,
        });
        sessionStorage.setItem('userToken', 'true');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        // Handle login errors
        this.toaster.error('Invalid Email or Password', 'Admin Login', {
          timeOut: 3000,
        });
        console.error(error); // Log the error for debugging
      });
  }
  register(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }
  logout() {
    return this.fireAuth.signOut().then(() => {
      sessionStorage.removeItem('userToken');
    })
  }
}

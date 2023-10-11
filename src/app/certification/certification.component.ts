import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  certifications = [
    { name: 'Angular Developer Level 1', desciption: 'For new Angular developers with a few days/weeks of experience.', url: 'https://angular-training.getlearnworlds.com/course/angular-level-1-certification-exam', imgeUrl: '../../../assets/angular_level_1.png' },
    // { name: 'Angular Developer Level 2', desciption: 'For developers with a few months/years of experience.', url: 'https://angular-training.getlearnworlds.com/course/angular-level-2-certification-exam' },
    { name: 'Postman API Fundamentals', desciption: 'Master of APIs and interacting with them using Postman.', url: 'https://academy.postman.com/path/postman-api-fundamentals-student-expert', imgeUrl: '../../../assets/postman_certfication.jpg' },
    { name: 'Web Development Bootcamp', desciption: 'Full-Stack Web Developer with HTML, CSS, Javascript, Node, React, MongoDB.', imgeUrl: '../../../assets/udemy_certification.png', url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/' }
  ]
}

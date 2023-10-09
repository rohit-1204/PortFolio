import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations: any[] = [
    {
      label: 'Post Graduation',
      duration: '2022-23',
      qualification: 'MCA (Master of Computer Application)',
      collegeName: 'IMS College of AhmedNagar, AhmedNagar',
      marks: '80 %',
      description: 'Attaining a masters degree or professional certification relevant to my career goals, Conducting original research or projects that contribute to my fields knowledge base, Establishing connections with industry professionals and experts.',
    },
    {
      label: 'Graduation',
      duration: '2020-21',
      qualification: 'BCA (Batchlor of Computer Application)',
      collegeName: 'C T Bora College,Shirur',
      marks: '73 %',
      description: 'Earning a bachelors degree with distinction in my chosen field, Participating in research projects and internships, gaining practical experience, Building a strong academic network and engaging with professors and peers to broaden my perspectives.',

    },
    {
      label: 'Higher Secondary',
      duration: '2017-18',
      qualification: '12th (HSC)',
      collegeName: 'Shri Mulika Devi Jr.College,Nighoj',
      marks: '53 %',
      description: 'Excelling in advanced coursework, particularly in subjects aligned with my career aspirations, Leadership roles in student organizations and projects, honing my organizational and teamwork skills. Exploring potential career paths and developing a clearer vision for my future academic pursuits.',
    },
    {
      label: 'Sedcondary School',
      duration: '2015-16',
      qualification: '10th (SSC)',
      collegeName: 'Shri Mulika Devi Vidya Mandir, Nighoj',
      marks: '72 %',
      description: 'Graduating with honors, demonstrating a strong work ethic and dedication to excellence, Active involvement in extracurricular activities, such as sports, clubs, and community service, Gaining a solid understanding of fundamental subjects, which formed the basis for my future studies',
    }
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  ngOnInit() {
  }

}

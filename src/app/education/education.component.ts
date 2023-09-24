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
      imgSrc: 'image1.jpg',
      label: 'Post Graduation',
      duration: '2022-23',
      details: {
        qualification: 'MCA (Master of Computer Application)',
        collegeName: 'IMS College of AhmedNagar, AhmedNagar',
        marks: '80 %',
        description: 'Details for item 1.',
      }
    },
    {
      imgSrc: 'image1.jpg',
      label: 'Graduation',
      duration: '2020-21',
      details: {
        qualification: 'BCA (Batchlor of Computer Application)',
        collegeName: 'C T Bora College,Shirur',
        marks: '73 %',
        description: 'Details for item 1.',
      }
    },
    {
      imgSrc: 'image1.jpg',
      label: 'Higher Secondary',
      duration: '2017-18',
      details: {
        qualification: '12th (HSC)',
        collegeName: 'Shri Mulika Devi Jr.College,Nighoj',
        marks: '53 %',
        description: 'Details for item 1.',
      }
    },
    {
      imgSrc: 'image1.jpg',
      label: 'Sedcondary School',
      duration: '2015-16',
      details: {
        qualification: '10th (SSC)',
        collegeName: 'Shri Mulika Devi Vidya Mandir, Nighoj',
        marks: '72 %',
        description: 'Details for item 1.',
      }
    }
  ];
  educationDetails = [];
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  ngOnInit() {
    this.educationDetails = [this.educations[0].details]
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (slideEvent && slideEvent.current) {
      let slide = this.educations[slideEvent.current.split('-')[2]].details;
      this.educationDetails = [slide]
    }
  }
}

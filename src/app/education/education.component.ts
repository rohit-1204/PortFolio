import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  carouselItems: any[] = [
    {
      imgSrc: 'image1.jpg',
      label: 'Item 1',
      details: 'Details for item 1.'
    },
    {
      imgSrc: 'image2.jpg',
      label: 'Item 2',
      details: 'Details for item 2.'
    },
    {
      imgSrc: 'image3.jpg',
      label: 'Item 3',
      details: 'Details for item 3.'
    }
  ];

}

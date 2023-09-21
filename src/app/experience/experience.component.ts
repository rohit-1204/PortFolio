import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  ngOnInit() {



  }
  openCompaney() {
    window.open("https://www.orektic.com/", "_blank");
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [{
    name: 'Agile Spring 1', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    name: 'Agile Spring 2', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    name: 'Agile Spring 3', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    name: 'Agile Spring 4', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    name: 'Agile Spring 5', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    name: 'Agile Spring 6', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    name: 'Agile Spring 7', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }]
  constructor() {

  }
}

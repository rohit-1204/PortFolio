import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [{
    name: 'Tic Tac Toe', buttonName: 'Play', imageSrc: './../../assets/TicTacToe.jpg', siteUrl: 'https://play-tic-tac-game.netlify.app/', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    name: 'Snake Game', buttonName: 'Play', imageSrc: './../../assets/snake.png', siteUrl: 'https://angular-snake-game.netlify.app/', description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    name: 'Online Test', buttonName: 'Demo',imageSrc: './../../assets/test2.png', siteUrl: 'https://exam-online.netlify.app/',description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }]
  constructor() {

  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('textStatic') textStatic: { nativeElement: any; } | undefined;
  @ViewChild('textTyping') textTyping: { nativeElement: any; } | undefined;

  // arrIntroduction: Array<string> = PortfolioHelper.arrIntroduction;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.initTypeWriter();
  }

  initTypeWriter() {
    if (this.textStatic && this.textTyping) {

      let textStatic = this.textStatic.nativeElement;
      let textTyping = this.textTyping.nativeElement;

      const writerTextStatic = new Typewriter(textStatic, {
        typeSpeed: 60
      })

      const writerTextTyping = new Typewriter(textTyping, {
        typeSpeed: 40
      })

      writerTextStatic
        .changeCursorColor('black') // Set the cursor color to gray

        .changeTypeColor('gray')
        .type('Hello, I am Rohit Pathare')
        .removeCursor()
        .then(writerTextTyping.start.bind(writerTextTyping))
        .start()


      writerTextTyping
        .changeCursorColor('black') // Set the cursor color to gray

        .changeTypeColor('gray')
        .type('Software Engineer')
        .rest(500)
        .clear()
        .changeTypeColor('gray')
        .type('UI Developer')
        .rest(500)
        .clear()
        .changeTypeColor('gray')
        .type('I am creative')
        .rest(500)
        .clear()
        .type('I love to design and develop')
        .rest(500)
        .clear()
        .changeTypeColor('gray')
        .removeCursor()
        .then(writerTextStatic.start.bind(writerTextStatic))

    }
  }


}

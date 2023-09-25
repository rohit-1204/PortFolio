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
  aboutMe: string;

  // arrIntroduction: Array<string> = PortfolioHelper.arrIntroduction;
  constructor() { }

  ngOnInit(): void {
    this.aboutMe = `${"I'm a passionate Angular UI developer with 2 years of experience. Proficient in Angular, TypeScript, and modern web technologies, I create dynamic and responsive user interfaces. With a strong foundation in computer science and a knack for problem-solving, I'm dedicated to crafting seamless digital experiences. Let's bring your ideas to life."}`
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

  openMail() {
    const recipient = 'rohitpathare1204@gmail.com';
    const subject = 'Hiring Inquiry';
    const body = 'Hello Rohit,';
    const attachment = './../../assets/Rohit Pathare Angular Dev 1 - Junior.pdf';
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}&attachment=${encodeURIComponent(attachment)}`;

    window.location.href = mailtoUrl;
  }
}

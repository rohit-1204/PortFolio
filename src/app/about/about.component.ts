import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  ngOnINit() {

  }
  copyToClipBoard(text: string, p?: any) {
    if (p) {
      setTimeout(() => {
        p.close();
      }, 500);
    }
    switch (text) {
      case 'email': navigator.clipboard.writeText('rohitpathare1204@gmail.com'); break;
      case 'phone': navigator.clipboard.writeText('+91 9561661204'); break;
      case 'address': navigator.clipboard.writeText('A/P- Nighoj Tal-Parner Dist-ANagar Shirur road'); break;
      default:
        break;
    }
  }

}

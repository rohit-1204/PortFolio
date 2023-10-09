import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  message: string;
  constructor(private toasterService: ToastrService) {

  }
  ngOnInit() {
    this.message = `${"I have a deep passion for innovation and a relentless pursuit of knowledge. I approach challenges with a positive attitude and a determination to find solutions swiftly. I am highly conscientious about how I manage my time and approach my work."}`
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
  openDilarPad() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'tel:+919561661204';
    }
  }
  openMailWindow() {
    window.location.href = 'mailto:rohitpathare1204@gmail.com';
  }
  navigateToGoogleMap() {
    // 18.94183, 74.28993
    var latitude = 18.94183;
    var longitude = 74.28993;
    var googleMapsUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;
    window.open(googleMapsUrl, "_blank");
  }
  openTelegramApp() {
    var phoneNumber = "+91 9561661204";
    var message = "Hello ....";
    var telegramUrl = "https://t.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(telegramUrl);
    } else {
      window.open("https://web.telegram.org/", "_blank");
    }
  }
  openWhatsApp() {
    var phoneNumber = "+91 9561661204";
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "https://wa.me/+91 9561661204";
    } else {
      window.open("https://web.whatsapp.com/", "_blank");
    }
  }
  openInstaGram() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let yourusername = 'rohit__pathare'
    if (isMobile) {
      window.location.href = `instagram://user?username=${yourusername}`;
    } else {
      window.open(`https://www.instagram.com/${yourusername}`, "_blank");
    }
  }
  openLinkedIn() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let yourprofileid = 'rohit-pathare-a8287a201'
    if (isMobile) {
      window.location.href = `linkedin://profile/${yourprofileid}`;
    } else {
      window.open(`https://www.linkedin.com/in/${yourprofileid}/`, "_blank");
    }
  }
  openGithub() {
    var githubUsername = "RohitPathare1";
    var githubUrl = "https://github.com/" + githubUsername;
    window.open(githubUrl, "_blank");
  }
  openGitLab() {
    var gitlabUsername = "orektic-rohit-pathare";
    var gitlabUrl = "https://gitlab.com/" + gitlabUsername;
    window.open(gitlabUrl, "_blank");
  }
  downloadResume() {
    this.toasterService.success('Resume Download Successfully !', 'Resume', { positionClass: 'toast-bottom-center' })
    const attachment = './../../assets/Rohit Pathare Angular Dev 1 - Junior.pdf';
    var anchor = document.createElement('a');
    anchor.href = attachment;
    anchor.download = 'Rohit Pathare Resume.pdf';
    anchor.click();
  }
}

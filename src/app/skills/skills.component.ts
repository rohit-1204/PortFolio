import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      "class": "web",
      "heading": "Web Technology",
      "technologies": [
        { "name": "HTML", "progress": 80 },
        { "name": "CSS", "progress": 70 },
        { "name": "Angular", "progress": 60 },
        { "name": "JavaScript", "progress": 90 },
        { "name": "Node.js", "progress": 75 }
      ]
    },
    {
      "class": "mobile",
      "heading": "Mobile App Development",
      "technologies": [
        { "name": "Ionic Framework", "progress": 80 },
        { "name": "Android Development", "progress": 60 },
        { "name": "iOS Development", "progress": 40 }
      ]
    },
    {
      "class": "Salesforce",
      "heading": "SalesForce Development",
      "technologies": [
        { "name": "Apex", "progress": 80 },
        { "name": "LWC", "progress": 57 },
        { "name": "Trigger", "progress": 85 },
        { "name": "Visualforce", "progress": 63 }
      ]
    }
  ]



}

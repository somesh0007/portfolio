import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "Hello, my name is Somesh ";
  paragraph: string = `Skilled Angular Developer with 2+ years of hands-on experience, adept at creating scalable web applications. Proficient in Angular, JavaScript, HTML, CSS, with expertise in developing single-page applications (SPAs) using Angular.`;

  ngOnInit() {}

}

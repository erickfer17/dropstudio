import { Component, OnInit } from '@angular/core';
import 'jarallax';
declare var jarallax: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }
  constructor() { }
   
  ngOnInit() {
  }

}

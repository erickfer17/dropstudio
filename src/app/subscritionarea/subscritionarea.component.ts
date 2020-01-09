import { Component, OnInit } from '@angular/core';
import 'jarallax';
declare var jarallax: any;
@Component({
  selector: 'app-subscritionarea',
  templateUrl: './subscritionarea.component.html',
  styleUrls: ['./subscritionarea.component.scss']
})
export class SubscritionareaComponent implements OnInit {
  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

  constructor() { 
    
  }

  

  ngOnInit() {
  }

}

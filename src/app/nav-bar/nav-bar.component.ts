import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent{
  constructor() { }
@HostListener('window:scroll', ['$event'])
onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset -500 > element.clientHeight) { 
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');
      if(navbar){
        navbar.classList.toggle('sticky', window.scrollY > 0);
      }
    })
  }

  toggle() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    if (menuToggle && navigation) {
      menuToggle.classList.toggle('active');
      navigation.classList.toggle('active');
    }
  }

  toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    if (menuToggle && navigation) {
      menuToggle.classList.remove('active');
      navigation.classList.remove('active');
    }
  }
}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isTransparent = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('header');
    if (header) {
      // Verificamos si la posición del scroll es mayor que la altura del navbar
      this.isTransparent = window.pageYOffset > header.offsetHeight;
    }
  }
}

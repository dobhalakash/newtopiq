import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('menu-open', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.remove('menu-open');
  }
}
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 600;
  }

  isDropdownOpen = false;
  currentCountry = 'USA';
  currentFlag = 'https://flagcdn.com/w40/us.png';

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Prevents the document click listener from immediately closing it
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCountry(country: string, flag: string) {
    this.currentCountry = country;
    this.currentFlag = flag;
    this.isDropdownOpen = false;
  }

  // Closes the dropdown if you click anywhere else on the page
  @HostListener('document:click')
  closeDropdown() {
    this.isDropdownOpen = false;
  }
}

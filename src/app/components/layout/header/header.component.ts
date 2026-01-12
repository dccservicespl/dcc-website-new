import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationService, MenuItem } from '../../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigation: MenuItem[] = [];
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigation = this.navigationService.getMainNavigation();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 50;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

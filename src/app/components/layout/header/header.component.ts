import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService, MenuItem } from '../../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  navigation: MenuItem[] = [];
  isScrolled = false;
  isMobileMenuOpen = false;
  openMobileSubmenus: Set<string> = new Set();

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) { }

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

    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
      // Clear all open submenus when closing mobile menu
      this.openMobileSubmenus.clear();
    }
  }

  toggleMobileSubmenu(itemLabel: string): void {
    if (this.openMobileSubmenus.has(itemLabel)) {
      this.openMobileSubmenus.delete(itemLabel);
    } else {
      this.openMobileSubmenus.add(itemLabel);
    }
  }

  isMobileSubmenuOpen(itemLabel: string): boolean {
    return this.openMobileSubmenus.has(itemLabel);
  }

  closeMobileMenuAndNavigate(item: MenuItem, parentLabels: string[] = []): void {
    this.isMobileMenuOpen = false;
    document.body.classList.remove('mobile-menu-open');
    this.openMobileSubmenus.clear();
    this.navigateToDetails(item, parentLabels);
  }

  navigateToDetails(item: MenuItem, parentLabels: string[] = []): void {
    if (item.href && item.href.startsWith('/solutions#')) {
      // Handle solutions navigation with fragment
      const fragment = item.href.split('#')[1];
      this.router.navigate(['/solutions'], { fragment: fragment });
    } else if (item.href && item.href.startsWith('/solutions')) {
      // Handle direct solutions page navigation
      this.router.navigate(['/solutions']);
    } else if (item.href && item.href.startsWith('/industries#')) {
      // Handle industries navigation with fragment
      const fragment = item.href.split('#')[1];
      this.router.navigate(['/industries'], { fragment: fragment });
    } else if (item.href && item.href.startsWith('/industries')) {
      // Handle direct industries page navigation
      this.router.navigate(['/industries']);
    } else if (item.href && item.href.startsWith('/technologies#')) {
      // Handle technologies navigation with fragment
      const fragment = item.href.split('#')[1];
      this.router.navigate(['/technologies'], { fragment: fragment });
    } else if (item.href && item.href.startsWith('/technologies')) {
      // Handle direct technologies page navigation
      this.router.navigate(['/technologies']);
    } else if (item.slug) {
      // Handle details navigation
      const breadcrumb = [...parentLabels, item.label].join(' > ');
      this.router.navigate(['/details', item.slug], {
        queryParams: { breadcrumb }
      });
    }
  }

  getBreadcrumbPath(parentLabels: string[], currentLabel: string): string {
    return [...parentLabels, currentLabel].join(' > ');
  }

  ngOnDestroy(): void {
    // Clean up body class when component is destroyed
    document.body.classList.remove('mobile-menu-open');
  }
}

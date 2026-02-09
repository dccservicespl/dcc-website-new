import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService, ServicesCard } from 'src/app/services/content.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  services: ServicesCard[] = [];
  filteredServices: ServicesCard[] = [];
  selectedServiceSlug: string | null = null;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.services = this.contentService.getServices();
    this.filteredServices = this.services;

    // Listen for URL fragment changes
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.selectedServiceSlug = fragment;
        this.filterServices(fragment);
        setTimeout(() => this.scrollToSection(fragment), 100);
      } else {
        this.selectedServiceSlug = null;
        this.filteredServices = this.services;
      }
    });
  }

  ngAfterViewInit(): void {
    // Handle initial fragment if present
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      setTimeout(() => this.scrollToSection(fragment), 200);
    }
  }

  private filterServices(slug: string): void {
    const slugToTitle: { [key: string]: string } = {
      'change-management': 'Change Management',
      'cloud-migration-and-architecture': 'Cloud Migration and Architecture',
      'managed-services': 'Managed Services',
      'data-analytics': 'Data & Analytics',
      'implementation': 'Implementation',
      'integration': 'Integration',
      'managed-support': 'Managed Support',
      'program-management': 'Program Management',
      'strategy-consulting': 'Strategy & Consulting'

    };

    const targetTitle = slugToTitle[slug];
    if (targetTitle) {
      this.filteredServices = this.services.filter(service => service.title === targetTitle);
    }
  }

  private scrollToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  showAllServices(): void {
    this.selectedServiceSlug = null;
    this.filteredServices = this.services;
    window.history.pushState({}, '', '/services');
  }

  getServiceId(service: ServicesCard): string {
    const titleToSlug: { [key: string]: string } = {
      'Change Management': 'change-management',
      'Cloud Migration and Architecture': 'cloud-migration-and-architecture',
      'Managed Services': 'managed-services',
      'Data & Analytics': 'data-analytics',
      'Implementation': 'implementation',
      'Integration': 'integration',
      'Managed Support': 'managed-support',
      'Program Management': 'program-management',
      'Strategy & Consulting': 'strategy-consulting'
    };
    return titleToSlug[service.title] || '';
  }


}

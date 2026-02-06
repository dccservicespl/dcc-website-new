import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService, TechnologyCard } from 'src/app/services/content.service';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit, AfterViewInit {

  technologies: TechnologyCard[] = [];
  filteredTechnologies: TechnologyCard[] = [];
  selectedTechnologySlug: string | null = null;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.technologies = this.contentService.getTechnologies();
    this.filteredTechnologies = this.technologies;

    // Listen for URL fragment changes
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.selectedTechnologySlug = fragment;
        this.filterTechnologies(fragment);
        setTimeout(() => this.scrollToSection(fragment), 100);
      } else {
        this.selectedTechnologySlug = null;
        this.filteredTechnologies = this.technologies;
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

  private filterTechnologies(slug: string): void {
    const slugToTitle: { [key: string]: string } = {
      'enterprise-platforms': 'Enterprise Platforms',
      'cloud-infrastructure': 'Cloud & Infrastructure',
      'data-analytics-ai': 'Data, Analytics & AI',
      'application-development-integration': 'Application Development & Integration',
      'cybersecurity-compliance': 'Cybersecurity & Compliance'
    };

    const targetTitle = slugToTitle[slug];
    if (targetTitle) {
      this.filteredTechnologies = this.technologies.filter(technology => technology.title === targetTitle);
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

  showAllTechnologies(): void {
    this.selectedTechnologySlug = null;
    this.filteredTechnologies = this.technologies;
    window.history.pushState({}, '', '/technologies');
  }

  getTechnologyId(technology: TechnologyCard): string {
    const titleToSlug: { [key: string]: string } = {
      'Enterprise Platforms': 'enterprise-platforms',
      'Cloud & Infrastructure': 'cloud-infrastructure',
      'Data, Analytics & AI': 'data-analytics-ai',
      'Application Development & Integration': 'application-development-integration',
      'Cybersecurity & Compliance': 'cybersecurity-compliance'
    };
    return titleToSlug[technology.title] || '';
  }
}

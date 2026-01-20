import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService, SolutionCard } from '../../services/content.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit, AfterViewInit {
  solutions: SolutionCard[] = [];
  filteredSolutions: SolutionCard[] = [];
  selectedSolutionSlug: string | null = null;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.solutions = this.contentService.getSolutions();
    this.filteredSolutions = this.solutions;
    
    // Listen for URL fragment changes
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.selectedSolutionSlug = fragment;
        this.filterSolutions(fragment);
        setTimeout(() => this.scrollToSection(fragment), 100);
      } else {
        this.selectedSolutionSlug = null;
        this.filteredSolutions = this.solutions;
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

  private filterSolutions(slug: string): void {
    const slugToTitle: { [key: string]: string } = {
      'enterprise-resource-planning': 'Enterprise Resource Planning (ERP)',
      'customer-experience-and-application-development': 'Customer Experience & Application Development',
      'supply-chain-management': 'Supply Chain Management',
      'customer-relationship-management': 'Customer Relationship Management (CRM)',
      'security-stack': 'Security Stack'
    };

    const targetTitle = slugToTitle[slug];
    if (targetTitle) {
      this.filteredSolutions = this.solutions.filter(solution => solution.title === targetTitle);
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

  showAllSolutions(): void {
    this.selectedSolutionSlug = null;
    this.filteredSolutions = this.solutions;
    window.history.pushState({}, '', '/solutions');
  }

  getSolutionId(solution: SolutionCard): string {
    const titleToSlug: { [key: string]: string } = {
      'Enterprise Resource Planning (ERP)': 'enterprise-resource-planning',
      'Customer Experience & Application Development': 'customer-experience-and-application-development',
      'Supply Chain Management': 'supply-chain-management',
      'Customer Relationship Management (CRM)': 'customer-relationship-management',
      'Security Stack': 'security-stack'
    };
    return titleToSlug[solution.title] || '';
  }
}
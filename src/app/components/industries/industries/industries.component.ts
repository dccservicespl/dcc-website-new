import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService, IndustryCard } from 'src/app/services/content.service';


@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit, AfterViewInit {
  industries: IndustryCard[] = [];
  filteredIndustries: IndustryCard[] = [];
  selectedIndustrySlug: string | null = null;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Load industries from service
    this.industries = this.contentService.getIndustries();
    this.filteredIndustries = this.industries;

    // Listen for URL fragment changes
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.selectedIndustrySlug = fragment;
        this.filterIndustries(fragment);
        setTimeout(() => this.scrollToSection(fragment), 100);
      } else {
        this.selectedIndustrySlug = null;
        this.filteredIndustries = this.industries;
      }
    });
  }

  ngAfterViewInit(): void {
    // Handle initial fragment load
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      setTimeout(() => this.scrollToSection(fragment), 200);
    }
  }

  private filterIndustries(slug: string): void {
    const slugToTitle: Record<string, string> = {
      'manufacturing': 'Manufacturing',
      'recycling': 'Recycling',
      'produce-market': 'Produce Market',
      'grocery-retail': 'Grocery & Retail'
    };

    const targetTitle = slugToTitle[slug];
    if (targetTitle) {
      this.filteredIndustries = this.industries.filter(
        industry => industry.title === targetTitle
      );
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

  showAllIndustries(): void {
    this.selectedIndustrySlug = null;
    this.filteredIndustries = this.industries;
    window.history.pushState({}, '', '/industries');
  }

  getIndustryId(industry: IndustryCard): string {
    const titleToSlug: { [key: string]: string } = {
      'Manufacturing': 'manufacturing',
      'Recycling': 'recycling',
      'Produce Market': 'produce-market',
      'Grocery & Retail': 'grocery-retail'
    };

    return titleToSlug[industry.title] || '';
  }

}

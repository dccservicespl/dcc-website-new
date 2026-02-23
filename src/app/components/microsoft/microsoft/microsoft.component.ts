import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService, MicrosoftCard } from 'src/app/services/content.service';

@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.scss']
})
export class MicrosoftComponent {

  microsofts: MicrosoftCard[] = [];
  filteredMicrosofts: MicrosoftCard[] = [];
  selectedMicrosoftSlug: string | null = null;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.microsofts = this.contentService.getMicrosofts();
    this.filteredMicrosofts = this.microsofts;

    // Listen for URL fragment changes
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.selectedMicrosoftSlug = fragment;
        this.filterMicrosofts(fragment);
        setTimeout(() => this.scrollToSection(fragment), 100);
      } else {
        this.selectedMicrosoftSlug = null;
        this.filteredMicrosofts = this.microsofts;
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

  private filterMicrosofts(slug: string): void {
    const slugToTitle: { [key: string]: string } = {
      'microsoft': 'Microsoft',

    };

    const targetTitle = slugToTitle[slug];
    if (targetTitle) {
      this.filteredMicrosofts = this.microsofts.filter(microsoft => microsoft.title === targetTitle);
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

  // showAllSolutions(): void {
  //   this.selectedSolutionSlug = null;
  //   this.filteredSolutions = this.solutions;
  //   window.history.pushState({}, '', '/solutions');
  // }

  getMicrosoftId(microsoft: MicrosoftCard): string {
    const titleToSlug: { [key: string]: string } = {
      'Microsoft': 'microsoft',

    };
    return titleToSlug[microsoft.title] || '';
  }

}

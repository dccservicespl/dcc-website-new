import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  title: string = '';
  content: any = {};
  breadcrumbs: string[] = [];
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug) {
        this.loadContent(slug);
      }
    });

    // Get breadcrumbs from query parameters
    this.route.queryParams.subscribe(params => {
      if (params['breadcrumb']) {
        this.breadcrumbs = params['breadcrumb'].split(' > ');
      }
    });
  }

  loadContent(slug: string): void {
    this.isLoading = true;
    this.content = this.contentService.getContentBySlug(slug);
    this.title = this.content.title || this.formatTitle(slug);
    this.isLoading = false;
  }

  private formatTitle(slug: string): string {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  getDefaultFeatures() {
    return this.contentService.getDefaultFeatures();
  }

  getDefaultTechnologies() {
    return this.contentService.getDefaultTechnologies();
  }

  getDefaultIndustries() {
    return this.contentService.getDefaultIndustries();
  }

  goBack(): void {
    window.history.back();
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }
}
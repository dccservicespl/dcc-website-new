import { Component, OnInit } from '@angular/core';
import { ContentService, CaseStudy } from '../../../services/content.service';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {
  caseStudies: CaseStudy[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.caseStudies = this.contentService.getCaseStudies();
  }
}

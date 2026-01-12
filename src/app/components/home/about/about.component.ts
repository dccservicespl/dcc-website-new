import { Component, OnInit } from '@angular/core';
import { ContentService, CompanyStats } from '../../../services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  companyStats: CompanyStats[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.companyStats = this.contentService.getCompanyStats();
  }
}

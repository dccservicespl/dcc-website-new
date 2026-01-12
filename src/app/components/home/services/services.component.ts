import { Component, OnInit } from '@angular/core';
import { ContentService, ServiceCard } from '../../../services/content.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceCards: ServiceCard[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.serviceCards = this.contentService.getServiceCards();
  }
}

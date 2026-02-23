import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService, SapSalesforceCard } from 'src/app/services/content.service';

@Component({
  selector: 'app-sap-salesforce',
  templateUrl: './sap-salesforce.component.html',
  styleUrls: ['./sap-salesforce.component.scss']
})
export class SapSalesforceComponent {

  sapSalesforces: any;
  isModalOpen = false;
  modalData: any = {};

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sapSalesforces = this.contentService.getSapSalesforces();

  }

  modalContent: any = {
    implementation: {
      title: 'SAP Implementation Services',
      description: 'This refers to greenfield/brownfield implementation of SAP. Data Consultants has strong expertise and experience of several successful implementations in SAP S/4HANA suite across various industries. Data Consultants has proven methodology which supports the pillars of any such implementation'
    },
    ams: {
      title: 'SAP Application Management Services (AMS)',
      description: 'Data Consultants’ Application Management Services span across the entire gamut of SAP – Functional, Technical, Infrastructure and any other related areas. We are committed to provide best possible AMS to our clients.'
    },
    migration: {
      title: 'SAP Migration Services',
      description: 'We have attractive Mock Migration services offering real time visibility of migration of Client’s landscapes at a very affordable cost. Contact us for more information and attractive offers.'
    },
    odc: {
      title: 'SAP Offshore Delivery Centre (ODC)',
      description: 'Custom Developments (Enhancements, interfaces, conversions, reports and forms), Post Go-live support, Bug fixing, Performance Tuning, Basis Administration and Security support, Functional consulting etc.'
    },
    advanced: {
      title: 'SAP Advanced Services',
      description: 'Data Consultants Corp offers advanced SAP services in specific areas such as SAP Fiori, Industry Solution templates, etc.SAP Fiori is a design system with simple screens that run on any device. It enables casual users to create business apps with consumer-grade user experience. By using the SAP Fiori design guidelines and tools, it is possible to build and customize your own apps that are consistent with SAP landscape of SAPS/4HANA and other enterprise software solutions.'
    },
    fuel: {
      title: 'SAP Fuel Sourcing Solution',
      description: 'Data Consultants has a unique template-based SAP solution for thermal power generating stations which is equally applicable to the coal-fired captive power stations .This solution will aid the Fuel Sourcing process to be mapped in SAP for both Thermal Power Generating Stations and Coal-fired Captive Power Stations. This has been developed as part of the Fuel Sourcing process implementation in one of the most efficiently run Supercritical Thermal Power Stations in India.This customized SAP solution will take care of the overall coal sourcing challenges faced in the industry.'
    },
    wmewm: {
      title: 'SAP WM/EWM Implementation Services',
      description: 'Data Consultants offers implementation services for SAP Warehouse Management (WM/EWM). We analyze the existing warehouse structure and business processes, identify integration challenges, and deliver optimized solution design and implementation across diverse system landscapes.'
    },

    docmanage: {
      title: 'SAP Document Management & Collaboration',
      description: 'Data Consultants has come up with a home-grown Document Management & Collaboration Solution, Knowledge Management & Learning Platform in SAP with zero licensing cost. It\'s affordable and involves rapid deployment (only 4 weeks).'
    }
  };

  openModal(type: string) {
    this.modalData = this.modalContent[type];
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}

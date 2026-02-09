import { Injectable } from '@angular/core';

export interface MenuItem {
  label: string;
  href?: string;
  slug?: string;
  children?: MenuItem[];
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  mainNavigation: MenuItem[] = [
    {
      label: 'What we do',
      children: [
        {
          label: 'Solutions',
          href: '/solutions',
          children: [
            {
              label: 'Enterprise Resource Planning',
              href: '/solutions#enterprise-resource-planning',
              slug: 'enterprise-resource-planning'
            },
            {
              label: 'Customer Experience and Application Development',
              href: '/solutions#customer-experience-and-application-development',
              slug: 'customer-experience-and-application-development'
            },
            {
              label: 'Supply Chain Management',
              href: '/solutions#supply-chain-management',
              slug: 'supply-chain-management'
            },
            {
              label: 'Customer Relationship Management',
              href: '/solutions#customer-relationship-management',
              slug: 'customer-relationship-management'
            },
            {
              label: 'Security Stack',
              href: '/solutions#security-stack',
              slug: 'security-stack'
            },
          ],
        },
        {
          label: 'Services',
          href: '/service',
          children: [
            {
              label: 'Change Management',
              href: '/service#change-management',
              slug: 'change-management'
            },
            {
              label: 'Cloud Migration and Architecture',
              href: '/service#cloud-migration-and-architecture',
              slug: 'cloud-migration-and-architecture'
            },
            {
              label: 'Managed Services',
              href: '/service#managed-services',
              slug: 'managed-services'
            },
            {
              label: 'Data & Analytics',
              href: '/service#data-analytics',
              slug: 'data-analytics'
            },
            {
              label: 'Implementation',
              href: '/service#implementation',
              slug: 'implementation'
            },
            {
              label: 'Integration',
              href: '/service#integration',
              slug: 'integration'
            },
            {
              label: 'Managed Support',
              href: '/service#managed-support',
              slug: 'managed-support'
            },
            {
              label: 'Program Management',
              href: '/service#program-management',
              slug: 'program-management'
            },
            {
              label: 'Strategy & Consulting',
              href: '/service#strategy-consulting',
              slug: 'strategy-consulting'
            },
          ],
        },
        {
          label: 'Industries',
          href: '/industries',
          children: [
            {
              label: 'Manufacturing',
              href: '/industries#manufacturing',
              slug: 'manufacturing'
            },
            {
              label: 'Recycling',
              href: '/industries#recycling',
              slug: 'recycling'
            },
            {
              label: 'Produce Market',
              href: '/industries#produce-market',
              slug: 'produce-market'
            },
            {
              label: 'Grocery & Retail',
              href: '/industries#grocery-retail',
              slug: 'grocery-retail'
            },
          ],
        },

        {
          label: 'Technologies',
          href: '/technologies',
          children: [
            {
              label: 'Enterprise Platforms - SAP',
              href: '/technologies#enterprise-platforms-sap',
              slug: 'enterprise-platforms-sap'
            },
            {
              label: 'Enterprise Platforms - Microsoft',
              href: '/technologies#enterprise-platforms-microsoft',
              slug: 'enterprise-platforms-microsoft'
            },
            {
              label: 'Enterprise Platforms - Salesforce',
              href: '/technologies#enterprise-platforms-salesforce',
              slug: 'enterprise-platforms-salesforce'
            },
            {
              label: 'Cloud & Infrastructure',
              href: '/technologies#cloud-infrastructure',
              slug: 'cloud-infrastructure'
            },
            {
              label: 'Data, Analytics & AI',
              href: '/technologies#data-analytics-ai',
              slug: 'data-analytics-ai'
            },
            {
              label: 'Application Development & Integration',
              href: '/technologies#application-development-integration',
              slug: 'application-development-integration'
            },
            {
              label: 'Cybersecurity & Compliance',
              href: '/technologies#cybersecurity-compliance',
              slug: 'cybersecurity-compliance'
            },
          ],
        }

      ],
    },
    {
      label: 'How we do it',
      children: [
        {
          label: 'SAP/Salesforce',
          href: '#',
          slug: 'sap-salesforce'
        },
        {
          label: 'Microsoft',
          href: '#',
          slug: 'microsoft'
        },
        {
          label: 'Customs Solutions',
          href: '#',
          slug: 'customs-solutions'
        },
        {
          label: 'Security Stack',
          href: '#',
          slug: 'security-stack-how'
        },
      ],
    },
    {
      label: 'Why DCC',
      children: [
        {
          label: 'Mission',
          href: '#',
          slug: 'mission'
        },
        {
          label: 'Vision',
          href: '#',
          slug: 'vision'
        },
        {
          label: 'Approach',
          href: '#',
          slug: 'approach'
        },
        {
          label: 'Leadership',
          href: '#',
          slug: 'leadership'
        },
        {
          label: 'Partnerships',
          href: '#',
          slug: 'partnerships'
        },
        {
          label: 'News',
          href: '#',
          slug: 'news'
        },
      ],
    },
    {
      label: 'Insights',
      children: [
        {
          label: 'Success Stories',
          href: '#',
          slug: 'success-stories'
        },
        {
          label: 'Events',
          href: '#',
          slug: 'events'
        },
      ],
    },
    {
      label: 'Careers',
      children: [
        {
          label: 'Why work with DCC?',
          href: '#',
          slug: 'why-work-with-dcc'
        },
        {
          label: 'Benefits',
          href: '#',
          slug: 'benefits'
        },
        {
          label: 'Open Positions',
          href: '#',
          slug: 'open-positions'
        },
      ],
    },
    {
      label: 'Contact',
      children: [
        {
          label: 'Send Message',
          href: '#',
          slug: 'send-message'
        },
        {
          label: 'Submit RFP',
          href: '#',
          slug: 'submit-rfp'
        },
        {
          label: 'Schedule Meeting',
          href: '#',
          slug: 'schedule-meeting'
        },
      ],
    },
  ];

  constructor() { }

  getMainNavigation(): MenuItem[] {
    return this.mainNavigation;
  }
}

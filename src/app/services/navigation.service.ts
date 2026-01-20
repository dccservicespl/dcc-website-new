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
          children: [
            { 
              label: 'Change Management', 
              href: '#',
              slug: 'change-management'
            },
            { 
              label: 'Cloud Migration and Architecture', 
              href: '#',
              slug: 'cloud-migration-and-architecture'
            },
            { 
              label: 'Managed Services', 
              href: '#',
              slug: 'managed-services'
            },
            { 
              label: 'Data & Analytics', 
              href: '#',
              slug: 'data-analytics'
            },
            { 
              label: 'Implementation', 
              href: '#',
              slug: 'implementation'
            },
            { 
              label: 'Integration', 
              href: '#',
              slug: 'integration'
            },
            { 
              label: 'Managed Services & Support', 
              href: '#',
              slug: 'managed-services-support'
            },
            { 
              label: 'Program Management', 
              href: '#',
              slug: 'program-management'
            },
            { 
              label: 'Strategy & Consulting', 
              href: '#',
              slug: 'strategy-consulting'
            },
          ],
        },
        {
          label: 'Industries',
          children: [
            { 
              label: 'Manufacturing', 
              href: '#',
              slug: 'manufacturing'
            },
            { 
              label: 'Recycling', 
              href: '#',
              slug: 'recycling'
            },
            { 
              label: 'Produce Market', 
              href: '#',
              slug: 'produce-market'
            },
            { 
              label: 'Grocery & Retail', 
              href: '#',
              slug: 'grocery-retail'
            },
          ],
        },

        { 
          label: 'Technologies', 
          href: '#technologies',
          slug: 'technologies'
        },
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

  constructor() {}

  getMainNavigation(): MenuItem[] {
    return this.mainNavigation;
  }
}

import { Injectable } from '@angular/core';

export interface MenuItem {
  label: string;
  href?: string;
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
          children: [
            { label: 'Enterprise Resource Planning', href: '#' },
            {
              label: 'Customer Experience and Application Development',
              href: '#',
            },
            { label: 'Supply Chain Management', href: '#' },
            { label: 'Customer Relationship Management', href: '#' },
            { label: 'Security Stack', href: '#' },
          ],
        },
        {
          label: 'Services',
          children: [
            { label: 'Change Management', href: '#' },
            { label: 'Cloud Migration and Architecture', href: '#' },
            { label: 'Managed Services', href: '#' },
            { label: 'Data & Analytics', href: '#' },
            { label: 'Implementation', href: '#' },
            { label: 'Integration', href: '#' },
            { label: 'Managed Services & Support', href: '#' },
            { label: 'Program Management', href: '#' },
            { label: 'Strategy & Consulting', href: '#' },
          ],
        },
        {
          label: 'Industries',
          children: [
            { label: 'Manufacturing', href: '#' },
            { label: 'Recycling', href: '#' },
            { label: 'Produce Market', href: '#' },
            { label: 'Grocery & Retail', href: '#' },
          ],
        },

        { label: 'Technologies', href: '#technologies' },
      ],
    },
    {
      label: 'How we do it',
      children: [
        { label: 'SAP/Salesforce', href: '#' },
        { label: 'Microsoft', href: '#' },
        { label: 'Customs Solutions', href: '#' },
        { label: 'Security Stack', href: '#' },
      ],
    },
    {
      label: 'Why DCC',
      children: [
        { label: 'Mission', href: '#' },
        { label: 'Vision', href: '#' },
        { label: 'Approach', href: '#' },
        { label: 'Leadership', href: '#' },
        { label: 'Partnerships', href: '#' },
        { label: 'News', href: '#' },
      ],
    },
    {
      label: 'Insights',
      children: [
        { label: 'Success Stories', href: '#' },
        { label: 'Events', href: '#' },
      ],
    },
    {
      label: 'Careers',
      children: [
        { label: 'Why work with DCC?', href: '#' },
        { label: 'Benefits', href: '#' },
        { label: 'Open Positions', href: '#' },
      ],
    },
    {
      label: 'Contact',
      children: [
        { label: 'Send Message', href: '#' },
        { label: 'Submit RFP', href: '#' },
        { label: 'Schedule Meeting', href: '#' },
      ],
    },
  ];

  constructor() {}

  getMainNavigation(): MenuItem[] {
    return this.mainNavigation;
  }
}

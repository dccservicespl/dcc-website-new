import { Injectable } from '@angular/core';

export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  mainNavigation: MenuItem[] = [
    {
      label: 'What we do',
      children: [
        {
          label: 'Solutions',
          children: [
            { label: 'Enterprise Resource Planning', href: '#solutions/erp' },
            { label: 'Customer Experience', href: '#solutions/cx' },
            { label: 'Security Stack', href: '#solutions/security' }
          ]
        },
        {
          label: 'Services',
          children: [
            { label: 'Cloud Architecture', href: '#services/cloud' },
            { label: 'Implementation', href: '#services/implementation' },
            { label: 'Managed Services', href: '#services/managed' }
          ]
        },
        { label: 'Technologies', href: '#technologies' }
      ]
    },
    {
      label: 'How we do it',
      children: [
        { label: 'SAP/Salesforce', href: '#how/sap-salesforce' },
        { label: 'Microsoft', href: '#how/microsoft' },
        { label: 'Custom Solutions', href: '#how/custom' }
      ]
    },
    {
      label: 'Why DCC',
      children: [
        { label: 'Mission & Vision', href: '#about/mission' },
        { label: 'Leadership', href: '#about/leadership' },
        { label: 'News', href: '#about/news' }
      ]
    },
    {
      label: 'Insights',
      href: '#success'
    }
  ];

  constructor() { }

  getMainNavigation(): MenuItem[] {
    return this.mainNavigation;
  }
}

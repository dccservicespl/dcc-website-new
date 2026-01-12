import { Injectable } from '@angular/core';

export interface CompanyStats {
  value: string;
  label: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  category: string;
  image: string;
  metrics: { value: string; label: string; }[];
}

export interface HeroSlide {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  buttonHref: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  companyStats: CompanyStats[] = [
    { value: '38+', label: 'Years Excellence' },
    { value: '1200+', label: 'Projects Delivered' }
  ];

  heroSlides: HeroSlide[] = [
    {
      tag: 'Expertise Since 1985',
      title: 'Modernizing <span class="text-brand">Enterprise</span> Technology.',
      description: 'Driving efficiency through SAP management, Cybersecurity, and tailored Gen-AI solutions for global leaders.',
      buttonText: 'Get Started',
      buttonIcon: 'fas fa-arrow-right',
      buttonHref: '#contact',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800'
    },
    {
      tag: 'Future-Proof Architecture',
      title: 'Accelerate with <span class="text-brand">Gen-AI</span> Agents.',
      description: 'Integrate cutting-edge Large Language Models into your existing ERP workflows to unlock hidden productivity.',
      buttonText: 'Explore AI',
      buttonIcon: 'fas fa-wand-magic-sparkles',
      buttonHref: '#competencies',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800'
    }
  ];

  serviceCards: ServiceCard[] = [
    {
      title: 'SAP & Oracle',
      description: 'Industry-leading ERP management, seamless S/4HANA migrations, and comprehensive database architecture optimization for enterprise-scale stability.',
      icon: 'fas fa-server',
      color: 'blue'
    },
    {
      title: 'Gen AI Agents',
      description: 'Developing custom LLM-powered autonomous agents that integrate directly into legacy workflows to automate decision-making and data synthesis.',
      icon: 'fas fa-microchip',
      color: 'orange'
    },
    {
      title: 'Cyber Security',
      description: 'End-to-end security posture assessments, PCI-DSS compliance audits, and proactive threat hunting to safeguard critical transaction volumes.',
      icon: 'fas fa-user-shield',
      color: 'red'
    }
  ];

  caseStudies: CaseStudy[] = [
    {
      title: 'Recycle Easy: Scrap Inventory Mastery',
      description: 'Integrated real-time supply chain tracking across 40+ sites using custom SAP S/4HANA workflows, increasing visibility by 85%.',
      category: 'Recycling Tech',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200',
      metrics: [
        { value: '34%', label: 'ROI Increase' },
        { value: 'Live', label: 'Tracking' }
      ]
    },
    {
      title: 'PCI DSS Shield for Pan-African Banking',
      description: 'Achieved 100% compliance across 12 nations for Africa\'s largest retail bank, securing over $10B in annual transaction volume.',
      category: 'Fintech Security',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200',
      metrics: [
        { value: 'Zero', label: 'Breaches' },
        { value: '12', label: 'Nations Active' }
      ]
    }
  ];

  constructor() { }

  getCompanyStats(): CompanyStats[] {
    return this.companyStats;
  }

  getHeroSlides(): HeroSlide[] {
    return this.heroSlides;
  }

  getServiceCards(): ServiceCard[] {
    return this.serviceCards;
  }

  getCaseStudies(): CaseStudy[] {
    return this.caseStudies;
  }
}

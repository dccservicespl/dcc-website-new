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
  metrics: { value: string; label: string }[];
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

export interface DetailContent {
  title: string;
  description: string;
  image?: string;
  features: { title: string; description: string; icon: string }[];
  technologies?: string[];
  methods?: string[];
  industries: { name: string; icon: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  companyStats: CompanyStats[] = [
    { value: '38+', label: 'Years Excellence' },
    { value: '1200+', label: 'Projects Delivered' },
  ];

  heroSlides: HeroSlide[] = [
    {
      tag: 'Expertise Since 1985',
      title:
        'Modernizing <span class="text-brand">Enterprise</span> Technology.',
      description:
        'Driving efficiency through SAP management, Cybersecurity, and tailored Gen-AI solutions for global leaders.',
      buttonText: 'Get Started',
      buttonIcon: 'fas fa-arrow-right',
      buttonHref: '#contact',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800',
    },
    {
      tag: 'Future-Proof Architecture',
      title: 'Accelerate with <span class="text-brand">Gen-AI</span> Agents.',
      description:
        'Integrate cutting-edge Large Language Models into your existing ERP workflows to unlock hidden productivity.',
      buttonText: 'Explore AI',
      buttonIcon: 'fas fa-wand-magic-sparkles',
      buttonHref: '#competencies',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800',
    },
  ];

  serviceCards: ServiceCard[] = [
    {
      title: 'SAP & Oracle',
      description:
        'Industry-leading ERP management, seamless S/4HANA migrations, and comprehensive database architecture optimization for enterprise-scale stability.',
      icon: 'fas fa-server',
      color: 'blue',
    },
    {
      title: 'Gen AI Agents',
      description:
        'Developing custom LLM-powered autonomous agents that integrate directly into legacy workflows to automate decision-making and data synthesis.',
      icon: 'fas fa-microchip',
      color: 'orange',
    },
    {
      title: 'Cyber Security',
      description:
        'End-to-end security posture assessments, PCI-DSS compliance audits, and proactive threat hunting to safeguard critical transaction volumes.',
      icon: 'fas fa-user-shield',
      color: 'red',
    },
  ];

  caseStudies: CaseStudy[] = [
    {
      title: 'Recycle Easy: Scrap Inventory Mastery',
      description:
        'Integrated real-time supply chain tracking across 40+ sites using custom SAP S/4HANA workflows, increasing visibility by 85%.',
      category: 'Recycling Tech',
      image: 'assets/images/img_1.jpg',
      metrics: [
        { value: '34%', label: 'ROI Increase' },
        { value: 'Live', label: 'Tracking' },
      ],
    },
    {
      title: 'PCI DSS Shield for Pan-African Banking',
      description:
        "Achieved 100% compliance across 12 nations for Africa's largest retail bank, securing over $10B in annual transaction volume.",
      category: 'Fintech Security',
      image: 'assets/images/img_2.jpg',
      metrics: [
        { value: 'Zero', label: 'Breaches' },
        { value: '12', label: 'Nations Active' },
      ],
    },
  ];

  private detailsContent: { [key: string]: DetailContent } = {
    'enterprise-resource-planning': {
      title: 'Enterprise Resource Planning',
      description: 'Transform your business operations with comprehensive ERP solutions that integrate all aspects of your enterprise into a unified, efficient system.',
      image: 'placeholder',
      features: [
        {
          title: 'Unified Operations',
          description: 'Integrate finance, HR, supply chain, and operations into one cohesive system.',
          icon: 'fas fa-unite'
        },
        {
          title: 'Real-time Analytics',
          description: 'Access real-time business intelligence and reporting across all departments.',
          icon: 'fas fa-chart-line'
        },
        {
          title: 'Process Automation',
          description: 'Automate routine tasks and workflows to increase efficiency and reduce errors.',
          icon: 'fas fa-robot'
        },
        {
          title: 'Scalable Architecture',
          description: 'Grow your system alongside your business with flexible, scalable solutions.',
          icon: 'fas fa-expand-arrows-alt'
        }
      ],
      technologies: ['SAP S/4HANA', 'Oracle ERP Cloud', 'Microsoft Dynamics 365', 'NetSuite', 'Workday'],
      industries: [
        { name: 'Manufacturing', icon: 'fas fa-industry' },
        { name: 'Retail', icon: 'fas fa-shopping-cart' },
        { name: 'Healthcare', icon: 'fas fa-heartbeat' },
        { name: 'Finance', icon: 'fas fa-university' }
      ]
    },
    'customer-experience-and-application-development': {
      title: 'Customer Experience & Application Development',
      description: 'Create exceptional digital experiences with custom applications that engage customers and drive business growth.',
      image: 'placeholder',
      features: [
        {
          title: 'User-Centric Design',
          description: 'Design applications with intuitive interfaces that prioritize user experience.',
          icon: 'fas fa-users'
        },
        {
          title: 'Omnichannel Integration',
          description: 'Deliver consistent experiences across all customer touchpoints.',
          icon: 'fas fa-globe'
        },
        {
          title: 'Custom Development',
          description: 'Build tailored solutions that meet your unique business requirements.',
          icon: 'fas fa-code'
        },
        {
          title: 'Performance Optimization',
          description: 'Ensure fast, reliable applications that handle high traffic volumes.',
          icon: 'fas fa-rocket'
        }
      ],
      technologies: ['React', 'Angular', 'Node.js', 'AWS', 'Azure', 'Salesforce'],
      industries: [
        { name: 'E-commerce', icon: 'fas fa-shopping-bag' },
        { name: 'Banking', icon: 'fas fa-piggy-bank' },
        { name: 'Insurance', icon: 'fas fa-shield-alt' },
        { name: 'Telecommunications', icon: 'fas fa-satellite-dish' }
      ]
    },
    'supply-chain-management': {
      title: 'Supply Chain Management',
      description: 'Optimize your supply chain operations with intelligent solutions that provide end-to-end visibility and control.',
      image: 'placeholder',
      features: [
        {
          title: 'End-to-End Visibility',
          description: 'Track products and materials from source to destination in real-time.',
          icon: 'fas fa-eye'
        },
        {
          title: 'Demand Forecasting',
          description: 'Use AI-powered analytics to predict demand and optimize inventory levels.',
          icon: 'fas fa-chart-area'
        },
        {
          title: 'Supplier Integration',
          description: 'Seamlessly integrate with suppliers for better collaboration and transparency.',
          icon: 'fas fa-handshake'
        },
        {
          title: 'Risk Management',
          description: 'Identify and mitigate supply chain risks before they impact operations.',
          icon: 'fas fa-shield'
        }
      ],
      technologies: ['SAP Ariba', 'Oracle SCM', 'Kinaxis', 'Blue Yonder', 'Manhattan Associates'],
      industries: [
        { name: 'Manufacturing', icon: 'fas fa-industry' },
        { name: 'Retail', icon: 'fas fa-store' },
        { name: 'Automotive', icon: 'fas fa-car' },
        { name: 'Pharmaceuticals', icon: 'fas fa-pills' }
      ]
    },
    'customer-relationship-management': {
      title: 'Customer Relationship Management',
      description: 'Build stronger customer relationships with comprehensive CRM solutions that drive sales growth and customer satisfaction.',
      image: 'placeholder',
      features: [
        {
          title: '360° Customer View',
          description: 'Get complete visibility into customer interactions and history.',
          icon: 'fas fa-user-circle'
        },
        {
          title: 'Sales Automation',
          description: 'Automate sales processes to improve efficiency and close more deals.',
          icon: 'fas fa-handshake'
        },
        {
          title: 'Marketing Integration',
          description: 'Align sales and marketing efforts with integrated campaign management.',
          icon: 'fas fa-bullhorn'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Make data-driven decisions with powerful analytics and reporting tools.',
          icon: 'fas fa-analytics'
        }
      ],
      technologies: ['Salesforce', 'Microsoft Dynamics', 'HubSpot', 'Zoho CRM', 'SugarCRM'],
      industries: [
        { name: 'Technology', icon: 'fas fa-laptop' },
        { name: 'Real Estate', icon: 'fas fa-home' },
        { name: 'Financial Services', icon: 'fas fa-chart-line' },
        { name: 'Healthcare', icon: 'fas fa-heartbeat' }
      ]
    },
    'security-stack': {
      title: 'Security Stack',
      description: 'Protect your organization with comprehensive cybersecurity solutions that defend against evolving threats.',
      image: 'placeholder',
      features: [
        {
          title: 'Multi-Layer Defense',
          description: 'Implement comprehensive security across all layers of your infrastructure.',
          icon: 'fas fa-shield-alt'
        },
        {
          title: 'Threat Intelligence',
          description: 'Stay ahead of threats with real-time intelligence and proactive monitoring.',
          icon: 'fas fa-search'
        },
        {
          title: 'Compliance Management',
          description: 'Ensure compliance with industry regulations and security standards.',
          icon: 'fas fa-clipboard-check'
        },
        {
          title: '24/7 Monitoring',
          description: 'Round-the-clock security monitoring and incident response capabilities.',
          icon: 'fas fa-clock'
        }
      ],
      technologies: ['Splunk', 'CyberArk', 'Palo Alto', 'Fortinet', 'Microsoft Defender'],
      industries: [
        { name: 'Banking', icon: 'fas fa-university' },
        { name: 'Government', icon: 'fas fa-landmark' },
        { name: 'Healthcare', icon: 'fas fa-user-md' },
        { name: 'Energy', icon: 'fas fa-bolt' }
      ]
    },
    'change-management': {
      title: 'Change Management',
      description: 'Navigate organizational transformations successfully with structured change management methodologies.',
      image: 'placeholder',
      features: [
        {
          title: 'Stakeholder Engagement',
          description: 'Build consensus and support across all organizational levels.',
          icon: 'fas fa-users'
        },
        {
          title: 'Training & Development',
          description: 'Comprehensive training programs to ensure successful adoption.',
          icon: 'fas fa-graduation-cap'
        },
        {
          title: 'Communication Strategy',
          description: 'Clear, consistent messaging throughout the transformation journey.',
          icon: 'fas fa-comments'
        },
        {
          title: 'Risk Mitigation',
          description: 'Identify and address potential obstacles before they impact success.',
          icon: 'fas fa-exclamation-triangle'
        }
      ],
      methods: ['ADKAR Model', 'Kotter 8-Step', 'Lean Change', 'Agile Transformation', 'PROSCI Methodology'],
      industries: [
        { name: 'Technology', icon: 'fas fa-microchip' },
        { name: 'Manufacturing', icon: 'fas fa-industry' },
        { name: 'Financial Services', icon: 'fas fa-coins' },
        { name: 'Healthcare', icon: 'fas fa-hospital' }
      ]
    },
    'cloud-migration-and-architecture': {
      title: 'Cloud Migration & Architecture',
      description: 'Accelerate your digital transformation with strategic cloud migration and modern architecture design.',
      image: 'placeholder',
      features: [
        {
          title: 'Migration Strategy',
          description: 'Develop comprehensive migration roadmaps tailored to your business needs.',
          icon: 'fas fa-route'
        },
        {
          title: 'Architecture Design',
          description: 'Design scalable, resilient cloud architectures for optimal performance.',
          icon: 'fas fa-sitemap'
        },
        {
          title: 'Cost Optimization',
          description: 'Optimize cloud spend while maintaining performance and reliability.',
          icon: 'fas fa-dollar-sign'
        },
        {
          title: 'Security & Compliance',
          description: 'Ensure security and compliance throughout the cloud journey.',
          icon: 'fas fa-lock'
        }
      ],
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      industries: [
        { name: 'Enterprise', icon: 'fas fa-building' },
        { name: 'Startups', icon: 'fas fa-rocket' },
        { name: 'Government', icon: 'fas fa-flag' },
        { name: 'Education', icon: 'fas fa-school' }
      ]
    }
  };

  constructor() {}

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

  getContentBySlug(slug: string): DetailContent {
    const content = this.detailsContent[slug];
    if (content) {
      return content;
    }

    // Return default content if specific content not found
    return {
      title: this.formatTitle(slug),
      description: `Learn more about our ${this.formatTitle(slug).toLowerCase()} solutions and how we can help transform your business with innovative technology and expert guidance.`,
      features: this.getDefaultFeatures(),
      industries: this.getDefaultIndustries()
    };
  }

  private formatTitle(slug: string): string {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  getDefaultFeatures(): { title: string; description: string; icon: string }[] {
    return [
      {
        title: 'Expert Implementation',
        description: 'Professional implementation services with industry best practices.',
        icon: 'fas fa-cogs'
      },
      {
        title: '24/7 Support',
        description: 'Round-the-clock technical support and maintenance services.',
        icon: 'fas fa-headset'
      },
      {
        title: 'Scalable Solutions',
        description: 'Solutions designed to grow with your business requirements.',
        icon: 'fas fa-expand'
      },
      {
        title: 'Cost Effective',
        description: 'Maximize ROI with efficient and cost-effective implementations.',
        icon: 'fas fa-dollar-sign'
      }
    ];
  }

  getDefaultTechnologies(): string[] {
    return ['Cloud Computing', 'AI/ML', 'Cybersecurity', 'Data Analytics', 'Integration'];
  }

  getDefaultIndustries(): { name: string; icon: string }[] {
    return [
      { name: 'Manufacturing', icon: 'fas fa-industry' },
      { name: 'Retail', icon: 'fas fa-store' },
      { name: 'Healthcare', icon: 'fas fa-heartbeat' },
      { name: 'Finance', icon: 'fas fa-university' }
    ];
  }
}

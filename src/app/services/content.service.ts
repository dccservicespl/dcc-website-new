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

export interface SolutionCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  capabilities: string[];
  outcomes: string[];
  stats?: { value: string; label: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  // Mission and Vision Statements
  valueStatement = `At Data Consultants, we are committed to providing our clients a partnership for the long haul. Our strategy has always been to partner with the best in the industry. We then obtain the highest level of solution specialization available from these key partners. This allows us to provide solutions to our clients through projects that exceed their expectation.`;

  missionStatement = `We provide end-to-end solutions for our clients, right from strategic consulting to full implementation. We deliver solutions as per business demands, efficiently and with the required security. We also assist business' to transform their application and infrastructure landscape as per the new wave.`;

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
    },
    'mission': {
      title: 'Our Mission',
      description: this.missionStatement,
      image: 'placeholder',
      features: [
        {
          title: 'End-to-End Solutions',
          description: 'We provide comprehensive solutions from strategic consulting to full implementation.',
          icon: 'fas fa-tasks'
        },
        {
          title: 'Business Demands',
          description: 'We deliver solutions efficiently and securely as per business requirements.',
          icon: 'fas fa-business-time'
        },
        {
          title: 'Transformation Partner',
          description: 'We assist businesses to transform their application and infrastructure landscape.',
          icon: 'fas fa-exchange-alt'
        },
        {
          title: 'Modern Wave',
          description: 'We help businesses adapt to the new wave of technological advancement.',
          icon: 'fas fa-wave-square'
        }
      ],
      technologies: ['Strategic Consulting', 'Implementation', 'Security', 'Infrastructure Transformation', 'Application Development'],
      industries: [
        { name: 'Enterprise', icon: 'fas fa-building' },
        { name: 'Healthcare', icon: 'fas fa-heartbeat' },
        { name: 'Finance', icon: 'fas fa-university' },
        { name: 'Manufacturing', icon: 'fas fa-industry' }
      ]
    },
    'vision': {
      title: 'Our Values',
      description: this.valueStatement,
      image: 'placeholder',
      features: [
        {
          title: 'Long-haul Partnership',
          description: 'We are committed to providing clients with a partnership built for the long term.',
          icon: 'fas fa-handshake'
        },
        {
          title: 'Industry Excellence',
          description: 'Our strategy focuses on partnering with the best in the industry.',
          icon: 'fas fa-award'
        },
        {
          title: 'Solution Specialization',
          description: 'We obtain the highest level of solution specialization from our key partners.',
          icon: 'fas fa-graduation-cap'
        },
        {
          title: 'Exceeding Expectations',
          description: 'We deliver solutions through projects that consistently exceed client expectations.',
          icon: 'fas fa-star'
        }
      ],
      technologies: ['Partnership Strategy', 'Solution Specialization', 'Quality Assurance', 'Client Excellence', 'Industry Standards'],
      industries: [
        { name: 'Technology', icon: 'fas fa-microchip' },
        { name: 'Consulting', icon: 'fas fa-users-cog' },
        { name: 'Professional Services', icon: 'fas fa-briefcase' },
        { name: 'Innovation', icon: 'fas fa-lightbulb' }
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

  getSolutions(): SolutionCard[] {
    return [
      {
        title: 'Enterprise Resource Planning (ERP)',
        subtitle: 'Modernize, Integrate, and Scale Your Core Business Systems',
        description: 'DCC is in the business of helping companies like yours revamp their core operations. We do this with ERP solutions that are not only robust and scalable but also future-ready. We have a deep understanding of both SAP and Microsoft ecosystems. We empower organizations to streamline their finance, operations, HR, and supply chain processes while maintaining compliance and control.',
        icon: 'fas fa-server',
        color: 'blue',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800',
        capabilities: [
          'SAP ECC & S/4HANA (Greenfield & Brownfield)',
          'Microsoft Dynamics 365 (Finance, Supply Chain, Business Central)',
          'ERP Upgrades & Migrations',
          'Custom Enhancements & Integrations',
          'Reporting, Analytics & Automation',
          'Ongoing AMS & Managed Services'
        ],
        outcomes: [
          'Improved operational visibility',
          'Faster financial close',
          'Reduced manual processes',
          'Scalable enterprise architecture'
        ],
        stats: [
          { value: '95%', label: 'Implementation Success Rate' },
          { value: '40%', label: 'Process Efficiency Gain' }
        ]
      },
      {
        title: 'Customer Experience & Application Development',
        subtitle: 'Build Intelligent, User-Centric Digital Experiences',
        description: 'We\'re all about designing and developing secure, scalable, and high-performance applications that boost customer engagement and empower your internal teams. From enterprise portals to mobile and cloud-native applications, DCC delivers solutions that combine usability, performance, and business intelligence.',
        icon: 'fas fa-mobile-alt',
        color: 'orange',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800',
        capabilities: [
          'Web & Mobile Application Development',
          'Cloud-Native & Microservices Architecture',
          'UX/UI Design & Prototyping',
          'Low-Code / No-Code Platforms',
          'API & ERP/CRM Integrations',
          'Application Modernization'
        ],
        outcomes: [
          'Enhanced customer engagement',
          'Faster time-to-market',
          'Improved user productivity',
          'Secure and scalable applications'
        ],
        stats: [
          { value: '60%', label: 'Faster Development Cycles' },
          { value: '85%', label: 'User Satisfaction Rate' }
        ]
      },
      {
        title: 'Supply Chain Management',
        subtitle: 'Gain Real-Time Visibility and Control Across Your Supply Chain',
        description: 'DCC provides end-to-end supply chain solutions that boost visibility, efficiency, and compliance across procurement, inventory, logistics, and distribution. Our industry-focused solutions help organizations react faster to demand shifts, cut costs, and ensure they\'re meeting all the regulatory requirements.',
        icon: 'fas fa-shipping-fast',
        color: 'green',
        image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800',
        capabilities: [
          'Supply Chain Planning & Optimization',
          'Warehouse & Inventory Management',
          'Traceability & Compliance (FSMA, Lot Tracking)',
          'Demand Forecasting & Analytics',
          'Automation & Workflow Optimization',
          'ERP-Integrated Supply Chain Solutions'
        ],
        outcomes: [
          'Reduced inventory costs',
          'Improved order fulfillment',
          'Enhanced compliance & traceability',
          'Data-driven decision making'
        ],
        stats: [
          { value: '30%', label: 'Inventory Cost Reduction' },
          { value: '99%', label: 'Order Accuracy Rate' }
        ]
      },
      {
        title: 'Customer Relationship Management (CRM)',
        subtitle: 'Strengthen Customer Relationships with Intelligent CRM Solutions',
        description: 'DCC helps organizations bring together their sales, marketing, and service operations using powerful CRM platforms. These platforms give you a 360-degree view of your customer, enabling personalized engagement, better pipeline visibility, and measurable growth.',
        icon: 'fas fa-users',
        color: 'red',
        image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800',
        capabilities: [
          'Salesforce CRM Implementation',
          'Microsoft Dynamics 365 CRM',
          'Sales, Marketing & Service Automation',
          'Customer Data Integration',
          'Analytics & Performance Dashboards',
          'CRM Enhancements & Support'
        ],
        outcomes: [
          'Increased sales effectiveness',
          'Improved customer satisfaction',
          'Better pipeline visibility',
          'Data-driven customer insights'
        ],
        stats: [
          { value: '35%', label: 'Sales Growth' },
          { value: '90%', label: 'Customer Retention Rate' }
        ]
      },
      {
        title: 'Security Stack',
        subtitle: 'Secure Your Enterprise in a Rapidly Evolving Threat Landscape',
        description: 'DCC offers a comprehensive security stack to protect your enterprise systems, applications, data, and users. Our layered security approach brings together governance, technology, and continuous monitoring to reduce risk and ensure compliance.',
        icon: 'fas fa-shield-alt',
        color: 'purple',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800',
        capabilities: [
          'Security Assessments & VAPT',
          'Identity & Access Management (IAM)',
          'Cloud & Infrastructure Security',
          'Network & Endpoint Protection',
          'Compliance & Risk Management',
          'Security Monitoring & Incident Response'
        ],
        outcomes: [
          'Reduced security risk',
          'Improved regulatory compliance',
          'Secure digital transformation',
          'Increased organizational resilience'
        ],
        stats: [
          { value: '99.9%', label: 'Threat Detection Rate' },
          { value: '24/7', label: 'Security Monitoring' }
        ]
      }
    ];
  }
}

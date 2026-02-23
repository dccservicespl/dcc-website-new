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

export interface ServicesCard {
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

export interface IndustryCard {
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
export interface TechnologyCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  capabilities: string[];
  stats?: { value: string; label: string }[];
}

export interface SapSalesforceCard {
  title: string;
  subtitle: string;
  description: string;

}

export interface MicrosoftCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  capabilities: string[];
  outcomes: string[];

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
      description:
        'Transform your business operations with comprehensive ERP solutions that integrate all aspects of your enterprise into a unified, efficient system.',
      image: 'placeholder',
      features: [
        {
          title: 'Unified Operations',
          description:
            'Integrate finance, HR, supply chain, and operations into one cohesive system.',
          icon: 'fas fa-unite',
        },
        {
          title: 'Real-time Analytics',
          description:
            'Access real-time business intelligence and reporting across all departments.',
          icon: 'fas fa-chart-line',
        },
        {
          title: 'Process Automation',
          description:
            'Automate routine tasks and workflows to increase efficiency and reduce errors.',
          icon: 'fas fa-robot',
        },
        {
          title: 'Scalable Architecture',
          description:
            'Grow your system alongside your business with flexible, scalable solutions.',
          icon: 'fas fa-expand-arrows-alt',
        },
      ],
      technologies: [
        'SAP S/4HANA',
        'Oracle ERP Cloud',
        'Microsoft Dynamics 365',
        'NetSuite',
        'Workday',
      ],
      industries: [
        { name: 'Manufacturing', icon: 'fas fa-industry' },
        { name: 'Retail', icon: 'fas fa-shopping-cart' },
        { name: 'Healthcare', icon: 'fas fa-heartbeat' },
        { name: 'Finance', icon: 'fas fa-university' },
      ],
    },
    'customer-experience-and-application-development': {
      title: 'Customer Experience & Application Development',
      description:
        'Create exceptional digital experiences with custom applications that engage customers and drive business growth.',
      image: 'placeholder',
      features: [
        {
          title: 'User-Centric Design',
          description:
            'Design applications with intuitive interfaces that prioritize user experience.',
          icon: 'fas fa-users',
        },
        {
          title: 'Omnichannel Integration',
          description:
            'Deliver consistent experiences across all customer touchpoints.',
          icon: 'fas fa-globe',
        },
        {
          title: 'Custom Development',
          description:
            'Build tailored solutions that meet your unique business requirements.',
          icon: 'fas fa-code',
        },
        {
          title: 'Performance Optimization',
          description:
            'Ensure fast, reliable applications that handle high traffic volumes.',
          icon: 'fas fa-rocket',
        },
      ],
      technologies: [
        'React',
        'Angular',
        'Node.js',
        'AWS',
        'Azure',
        'Salesforce',
      ],
      industries: [
        { name: 'E-commerce', icon: 'fas fa-shopping-bag' },
        { name: 'Banking', icon: 'fas fa-piggy-bank' },
        { name: 'Insurance', icon: 'fas fa-shield-alt' },
        { name: 'Telecommunications', icon: 'fas fa-satellite-dish' },
      ],
    },
    'supply-chain-management': {
      title: 'Supply Chain Management',
      description:
        'Optimize your supply chain operations with intelligent solutions that provide end-to-end visibility and control.',
      image: 'placeholder',
      features: [
        {
          title: 'End-to-End Visibility',
          description:
            'Track products and materials from source to destination in real-time.',
          icon: 'fas fa-eye',
        },
        {
          title: 'Demand Forecasting',
          description:
            'Use AI-powered analytics to predict demand and optimize inventory levels.',
          icon: 'fas fa-chart-area',
        },
        {
          title: 'Supplier Integration',
          description:
            'Seamlessly integrate with suppliers for better collaboration and transparency.',
          icon: 'fas fa-handshake',
        },
        {
          title: 'Risk Management',
          description:
            'Identify and mitigate supply chain risks before they impact operations.',
          icon: 'fas fa-shield',
        },
      ],
      technologies: [
        'SAP Ariba',
        'Oracle SCM',
        'Kinaxis',
        'Blue Yonder',
        'Manhattan Associates',
      ],
      industries: [
        { name: 'Manufacturing', icon: 'fas fa-industry' },
        { name: 'Retail', icon: 'fas fa-store' },
        { name: 'Automotive', icon: 'fas fa-car' },
        { name: 'Pharmaceuticals', icon: 'fas fa-pills' },
      ],
    },
    'customer-relationship-management': {
      title: 'Customer Relationship Management',
      description:
        'Build stronger customer relationships with comprehensive CRM solutions that drive sales growth and customer satisfaction.',
      image: 'placeholder',
      features: [
        {
          title: '360° Customer View',
          description:
            'Get complete visibility into customer interactions and history.',
          icon: 'fas fa-user-circle',
        },
        {
          title: 'Sales Automation',
          description:
            'Automate sales processes to improve efficiency and close more deals.',
          icon: 'fas fa-handshake',
        },
        {
          title: 'Marketing Integration',
          description:
            'Align sales and marketing efforts with integrated campaign management.',
          icon: 'fas fa-bullhorn',
        },
        {
          title: 'Analytics & Reporting',
          description:
            'Make data-driven decisions with powerful analytics and reporting tools.',
          icon: 'fas fa-analytics',
        },
      ],
      technologies: [
        'Salesforce',
        'Microsoft Dynamics',
        'HubSpot',
        'Zoho CRM',
        'SugarCRM',
      ],
      industries: [
        { name: 'Technology', icon: 'fas fa-laptop' },
        { name: 'Real Estate', icon: 'fas fa-home' },
        { name: 'Financial Services', icon: 'fas fa-chart-line' },
        { name: 'Healthcare', icon: 'fas fa-heartbeat' },
      ],
    },
    'security-stack': {
      title: 'Security Stack',
      description:
        'Protect your organization with comprehensive cybersecurity solutions that defend against evolving threats.',
      image: 'placeholder',
      features: [
        {
          title: 'Multi-Layer Defense',
          description:
            'Implement comprehensive security across all layers of your infrastructure.',
          icon: 'fas fa-shield-alt',
        },
        {
          title: 'Threat Intelligence',
          description:
            'Stay ahead of threats with real-time intelligence and proactive monitoring.',
          icon: 'fas fa-search',
        },
        {
          title: 'Compliance Management',
          description:
            'Ensure compliance with industry regulations and security standards.',
          icon: 'fas fa-clipboard-check',
        },
        {
          title: '24/7 Monitoring',
          description:
            'Round-the-clock security monitoring and incident response capabilities.',
          icon: 'fas fa-clock',
        },
      ],
      technologies: [
        'Splunk',
        'CyberArk',
        'Palo Alto',
        'Fortinet',
        'Microsoft Defender',
      ],
      industries: [
        { name: 'Banking', icon: 'fas fa-university' },
        { name: 'Government', icon: 'fas fa-landmark' },
        { name: 'Healthcare', icon: 'fas fa-user-md' },
        { name: 'Energy', icon: 'fas fa-bolt' },
      ],
    },
    'change-management': {
      title: 'Change Management',
      description:
        'Navigate organizational transformations successfully with structured change management methodologies.',
      image: 'placeholder',
      features: [
        {
          title: 'Stakeholder Engagement',
          description:
            'Build consensus and support across all organizational levels.',
          icon: 'fas fa-users',
        },
        {
          title: 'Training & Development',
          description:
            'Comprehensive training programs to ensure successful adoption.',
          icon: 'fas fa-graduation-cap',
        },
        {
          title: 'Communication Strategy',
          description:
            'Clear, consistent messaging throughout the transformation journey.',
          icon: 'fas fa-comments',
        },
        {
          title: 'Risk Mitigation',
          description:
            'Identify and address potential obstacles before they impact success.',
          icon: 'fas fa-exclamation-triangle',
        },
      ],
      methods: [
        'ADKAR Model',
        'Kotter 8-Step',
        'Lean Change',
        'Agile Transformation',
        'PROSCI Methodology',
      ],
      industries: [
        { name: 'Technology', icon: 'fas fa-microchip' },
        { name: 'Manufacturing', icon: 'fas fa-industry' },
        { name: 'Financial Services', icon: 'fas fa-coins' },
        { name: 'Healthcare', icon: 'fas fa-hospital' },
      ],
    },
    'cloud-migration-and-architecture': {
      title: 'Cloud Migration & Architecture',
      description:
        'Accelerate your digital transformation with strategic cloud migration and modern architecture design.',
      image: 'placeholder',
      features: [
        {
          title: 'Migration Strategy',
          description:
            'Develop comprehensive migration roadmaps tailored to your business needs.',
          icon: 'fas fa-route',
        },
        {
          title: 'Architecture Design',
          description:
            'Design scalable, resilient cloud architectures for optimal performance.',
          icon: 'fas fa-sitemap',
        },
        {
          title: 'Cost Optimization',
          description:
            'Optimize cloud spend while maintaining performance and reliability.',
          icon: 'fas fa-dollar-sign',
        },
        {
          title: 'Security & Compliance',
          description:
            'Ensure security and compliance throughout the cloud journey.',
          icon: 'fas fa-lock',
        },
      ],
      technologies: [
        'AWS',
        'Microsoft Azure',
        'Google Cloud',
        'Kubernetes',
        'Docker',
        'Terraform',
      ],
      industries: [
        { name: 'Enterprise', icon: 'fas fa-building' },
        { name: 'Startups', icon: 'fas fa-rocket' },
        { name: 'Government', icon: 'fas fa-flag' },
        { name: 'Education', icon: 'fas fa-school' },
      ],
    },
    mission: {
      title: 'Our Mission',
      description: this.missionStatement,
      image: 'placeholder',
      features: [
        {
          title: 'End-to-End Solutions',
          description:
            'We provide comprehensive solutions from strategic consulting to full implementation.',
          icon: 'fas fa-tasks',
        },
        {
          title: 'Business Demands',
          description:
            'We deliver solutions efficiently and securely as per business requirements.',
          icon: 'fas fa-business-time',
        },
        {
          title: 'Transformation Partner',
          description:
            'We assist businesses to transform their application and infrastructure landscape.',
          icon: 'fas fa-exchange-alt',
        },
        {
          title: 'Modern Wave',
          description:
            'We help businesses adapt to the new wave of technological advancement.',
          icon: 'fas fa-wave-square',
        },
      ],
      technologies: [
        'Strategic Consulting',
        'Implementation',
        'Security',
        'Infrastructure Transformation',
        'Application Development',
      ],
      industries: [
        { name: 'Enterprise', icon: 'fas fa-building' },
        { name: 'Healthcare', icon: 'fas fa-heartbeat' },
        { name: 'Finance', icon: 'fas fa-university' },
        { name: 'Manufacturing', icon: 'fas fa-industry' },
      ],
    },
    vision: {
      title: 'Our Values',
      description: this.valueStatement,
      image: 'placeholder',
      features: [
        {
          title: 'Long-haul Partnership',
          description:
            'We are committed to providing clients with a partnership built for the long term.',
          icon: 'fas fa-handshake',
        },
        {
          title: 'Industry Excellence',
          description:
            'Our strategy focuses on partnering with the best in the industry.',
          icon: 'fas fa-award',
        },
        {
          title: 'Solution Specialization',
          description:
            'We obtain the highest level of solution specialization from our key partners.',
          icon: 'fas fa-graduation-cap',
        },
        {
          title: 'Exceeding Expectations',
          description:
            'We deliver solutions through projects that consistently exceed client expectations.',
          icon: 'fas fa-star',
        },
      ],
      technologies: [
        'Partnership Strategy',
        'Solution Specialization',
        'Quality Assurance',
        'Client Excellence',
        'Industry Standards',
      ],
      industries: [
        { name: 'Technology', icon: 'fas fa-microchip' },
        { name: 'Consulting', icon: 'fas fa-users-cog' },
        { name: 'Professional Services', icon: 'fas fa-briefcase' },
        { name: 'Innovation', icon: 'fas fa-lightbulb' },
      ],
    },
  };

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
      industries: this.getDefaultIndustries(),
    };
  }

  private formatTitle(slug: string): string {
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  getDefaultFeatures(): { title: string; description: string; icon: string }[] {
    return [
      {
        title: 'Expert Implementation',
        description:
          'Professional implementation services with industry best practices.',
        icon: 'fas fa-cogs',
      },
      {
        title: '24/7 Support',
        description:
          'Round-the-clock technical support and maintenance services.',
        icon: 'fas fa-headset',
      },
      {
        title: 'Scalable Solutions',
        description:
          'Solutions designed to grow with your business requirements.',
        icon: 'fas fa-expand',
      },
      {
        title: 'Cost Effective',
        description:
          'Maximize ROI with efficient and cost-effective implementations.',
        icon: 'fas fa-dollar-sign',
      },
    ];
  }

  getDefaultTechnologies(): string[] {
    return [
      'Cloud Computing',
      'AI/ML',
      'Cybersecurity',
      'Data Analytics',
      'Integration',
    ];
  }

  getDefaultIndustries(): { name: string; icon: string }[] {
    return [
      { name: 'Manufacturing', icon: 'fas fa-industry' },
      { name: 'Retail', icon: 'fas fa-store' },
      { name: 'Healthcare', icon: 'fas fa-heartbeat' },
      { name: 'Finance', icon: 'fas fa-university' },
    ];
  }

  getSolutions(): SolutionCard[] {
    return [
      {
        title: 'Enterprise Resource Planning (ERP)',
        subtitle: 'Modernize, Integrate, and Scale Your Core Business Systems',
        description: `DCC is in the business of helping companies like yours revamp their core operations. 
        We do this with ERP solutions that are not only robust and scalable but also future-ready. 
        We have a deep understanding of both SAP and Microsoft ecosystems. We empower organizations to streamline their finance, operations, 
        HR, and supply chain processes while maintaining compliance and control. 

        Our ERP solutions are built to support everything from modernizing older systems to implementing brand-new ones, 
        ensuring your business keeps running smoothly while you take advantage of new efficiencies.`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'SAP ECC & S/4HANA (Greenfield & Brownfield)',
          'Microsoft Dynamics 365 (Finance, Supply Chain, Business Central)',
          'ERP Upgrades & Migrations',
          'Custom Enhancements & Integrations',
          'Reporting, Analytics & Automation',
          'Ongoing AMS & Managed Services',
        ],
        outcomes: [
          'Improved operational visibility',
          'Faster financial close',
          'Reduced manual processes',
          'Scalable enterprise architecture',
        ],
        stats: [
          { value: '95%', label: 'Implementation Success Rate' },
          { value: '40%', label: 'Process Efficiency Gain' },
        ],
      },
      {
        title: 'Customer Experience & Application Development',
        subtitle: 'Build Intelligent, User-Centric Digital Experiences',
        description: `We're all about designing and developing secure, scalable, and high-performance applications that boost customer engagement 
        and empower your internal teams. From enterprise portals to mobile and cloud-native applications, DCC delivers solutions that combine usability, 
        performance, and business intelligence.
        
        Our development approach mixes modern architecture, agile delivery, and seamless integration with ERP and CRM platforms.`,
        icon: 'fas fa-mobile-alt',
        color: 'orange',
        image: 'assets/images/Experience_Application.jpg',
        capabilities: [
          'Web & Mobile Application Development',
          'Cloud-Native & Microservices Architecture',
          'UX/UI Design & Prototyping',
          'Low-Code / No-Code Platforms',
          'API & ERP/CRM Integrations',
          'Application Modernization',
        ],
        outcomes: [
          'Enhanced customer engagement',
          'Faster time-to-market',
          'Improved user productivity',
          'Secure and scalable applications',
        ],
        stats: [
          { value: '60%', label: 'Faster Development Cycles' },
          { value: '85%', label: 'User Satisfaction Rate' },
        ],
      },
      {
        title: 'Supply Chain Management',
        subtitle:
          'Gain Real-Time Visibility and Control Across Your Supply Chain',
        description: `We're DCC provides end-to-end supply chain solutions that boost visibility, efficiency, 
        and compliance across procurement, inventory, logistics, and distribution. Our industry-focused solutions help organizations 
        react faster to demand shifts, cut costs, and ensure they're meeting all the regulatory requirements.
       
        We specialize in supply chain solutions for retail, manufacturing, produce distribution, and logistics-driven enterprises.`,
        icon: 'fas fa-shipping-fast',
        color: 'green',
        image: 'assets/images/Supply-Chain.jpg',
        capabilities: [
          'Supply Chain Planning & Optimization',
          'Warehouse & Inventory Management',
          'Traceability & Compliance (FSMA, Lot Tracking)',
          'Demand Forecasting & Analytics',
          'Automation & Workflow Optimization',
          'ERP-Integrated Supply Chain Solutions',
        ],
        outcomes: [
          'Reduced inventory costs',
          'Improved order fulfillment',
          'Enhanced compliance & traceability',
          'Data-driven decision making',
        ],
        stats: [
          { value: '30%', label: 'Inventory Cost Reduction' },
          { value: '99%', label: 'Order Accuracy Rate' },
        ],
      },
      {
        title: 'Customer Relationship Management (CRM)',
        subtitle:
          'Strengthen Customer Relationships with Intelligent CRM Solutions',
        description: `DCC helps organizations bring together their sales, marketing, and service operations using powerful CRM platforms. 
          These platforms give you a 360-degree view of your customer, enabling personalized engagement, better pipeline visibility, 
          and measurable growth.

          We implement and fine-tune CRM platforms that play well with your ERP, analytics, and digital channels.`,
        icon: 'fas fa-users',
        color: 'red',
        image: 'assets/images/CRM.jpg',
        capabilities: [
          'Salesforce CRM Implementation',
          'Microsoft Dynamics 365 CRM',
          'Sales, Marketing & Service Automation',
          'Customer Data Integration',
          'Analytics & Performance Dashboards',
          'CRM Enhancements & Support',
        ],
        outcomes: [
          'Increased sales effectiveness',
          'Improved customer satisfaction',
          'Better pipeline visibility',
          'Data-driven customer insights',
        ],
        stats: [
          { value: '35%', label: 'Sales Growth' },
          { value: '90%', label: 'Customer Retention Rate' },
        ],
      },
      {
        title: 'Security Stack',
        subtitle:
          'Secure Your Enterprise in a Rapidly Evolving Threat Landscape',
        description: `DCC offers a comprehensive security stack to protect your enterprise systems, applications, data, and users. 
          Our layered security approach brings together governance, technology, and continuous monitoring to reduce risk and ensure compliance.

          We help organizations design, implement, and manage security frameworks that align with industry best practices.`,
        icon: 'fas fa-shield-alt',
        color: 'purple',
        image: 'assets/images/Security-Stack.jpg',
        capabilities: [
          'Security Assessments & VAPT',
          'Identity & Access Management (IAM)',
          'Cloud & Infrastructure Security',
          'Network & Endpoint Protection',
          'Compliance & Risk Management',
          'Security Monitoring & Incident Response',
        ],
        outcomes: [
          'Reduced security risk',
          'Improved regulatory compliance',
          'Secure digital transformation',
          'Increased organizational resilience',
        ],
        stats: [
          { value: '99.9%', label: 'Threat Detection Rate' },
          { value: '24/7', label: 'Security Monitoring' },
        ],
      },
    ];
  }

  getServices(): ServicesCard[] {
    return [
      {
        title: 'Change Management',
        subtitle: 'Enable Adoption, Minimize Risk, and Drive Business Value',
        description: `Tech transformation only works if people actually use it. DCC's Change Management services make sure that new systems, processes, and ways of working are embraced across the organization.
We focus on clear communication, training, and getting everyone on board to reduce disruption and speed up user adoption.
`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'Organizational Change Strategy',
          'Stakeholder & Impact Analysis',
          'Communication Planning',
          'End-User Training & Enablement',
          'Adoption & Readiness Assessments'

        ],
        outcomes: [
          'Faster user adoption',
          'Reduced operational disruption',
          'Improved ROI on technology investments'

        ],

      },

      {
        title: 'Cloud Migration and Architecture',
        subtitle: 'Secure, Scalable, and Cost-Effective Cloud Transformation',
        description: `DCC helps organizations plan, design, and carry out cloud migrations that align with their business goals, security needs, and compliance standards. Our cloud architects ensure a smooth move from on-premise environments to modern cloud platforms.`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'Cloud Readiness Assessment',
          'Migration Strategy & Planning',
          'Azure & Hybrid Cloud Architecture',
          'Application & Data Migration',
          'Security & Governance Frameworks',


        ],
        outcomes: [
          'Improved scalability and agility',
          'Optimized infrastructure costs',
          'Enhanced security and resilience'


        ],

      },

      {
        title: 'Managed Services',
        subtitle: 'Reliable Operations with Predictable Costs',
        description: `Our Managed Services provide continuous monitoring, management, and optimization of your enterprise systems and infrastructure. Consider DCC an extension of your IT team, ensuring stability, performance, and compliance.`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'Application Management Services (AMS)',
          'Infrastructure & Cloud Management',
          'Proactive Monitoring & Incident Management',
          'Patch Management & Upgrades',
          'SLA-Driven Support Models'
        ],
        outcomes: [
          'Reduced downtime',
          'Predictable IT operating costs',
          'Improved system performance'

        ],

      },

      {
        title: 'Data & Analytics',
        subtitle: 'Turn Enterprise Data into Actionable Insights',
        description: `DCC delivers analytics solutions that provide clear visibility into business performance, enabling faster and more informed decision-making. We help organizations unify data across ERP, CRM, and operational systems.`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'Data Strategy & Architecture',
          'Power BI & Enterprise Reporting',
          'Data Integration & Warehousing',
          'Advanced Analytics & Forecasting',
          'AI-Driven Insights'

        ],
        outcomes: [
          'Improved operational visibility',
          'Faster decision cycles',
          'Data-driven business strategy'
        ],

      },

      {
        title: 'Implementation',
        subtitle: 'Structured, Predictable, and On-Time Delivery',
        description: `DCC provides end-to-end implementation services for ERP, CRM, analytics, and enterprise applications. Our proven delivery methods ensure projects are completed on time, within scope, and aligned with business requirements.`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'ERP & CRM Implementations',
          'Application Deployments',
          'Configuration & Customization',
          'User Acceptance Testing (UAT)',
          'Go-Live & Post-Go-Live Support'

        ],
        outcomes: [
          'Reduced project risk',
          'Faster time-to-value',
          'High-quality system adoption'

        ],

      },

      {
        title: 'Integration',
        subtitle: 'Seamless Connectivity Across Enterprise Systems',
        description: `We design and implement secure, scalable integrations that connect ERP, CRM, cloud platforms, and third-party applications—ensuring consistent data flow and process automation.`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'ERP & CRM Integrations',
          'API & Middleware Solutions',
          'Data Synchronization',
          'Legacy System Integration',
          'Real-Time & Batch Processing'

        ],
        outcomes: [
          'Improved data accuracy',
          'Streamlined business processes',
          'Reduced manual effort'

        ],

      },

      {
        title: 'Managed Support',
        subtitle: 'Continuous Support for Mission-Critical Systems',
        description: `DCC provides ongoing support services to ensure your enterprise systems remain secure, up-to-date, and optimized. Our support models are flexible and tailored to your business needs.`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'Tiered Support (L1, L2, L3)',
          'Incident & Problem Management',
          'System Enhancements',
          'Performance Optimization',
          'Compliance & Audit Support',

        ],
        outcomes: [
          'Stable and reliable systems',
          'Faster issue resolution',
          'Long-term operational confidence'

        ],

      },

      {
        title: 'Program Management',
        subtitle: 'Governance and Control for Complex Initiatives',
        description: `Our Program Management services ensure large-scale, multi-workstream initiatives are delivered with clear governance, transparency, and accountability.`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'Program & Portfolio Management',
          'PMO Setup & Governance',
          'Risk & Dependency Management',
          'Budget & Resource Tracking',
          'Executive Reporting'

        ],
        outcomes: [
          'Improved project predictability',
          'Clear stakeholder visibility',
          'Reduced delivery risk'
        ],

      },

      {
        title: 'Strategy & Consulting',
        subtitle: 'Align Technology with Business Objectives',
        description: `DCC's Strategy & Consulting services help organizations define technology roadmaps that support growth, efficiency, and long-term competitiveness.`,
        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'IT Strategy & Roadmaps',
          'Digital Transformation Planning',
          'ERP & Application Assessments',
          'Process Optimization',
          'Vendor & Platform Selection'

        ],
        outcomes: [
          'Clear strategic direction',
          'Optimized technology investments',
          'Measurable business impact'

        ],

      },

    ];
  }


  getIndustries(): IndustryCard[] {
    return [
      {
        title: 'Manufacturing',
        subtitle: 'Enabling Operational Excellence Through Integrated Technology',
        description: `DCC partners with manufacturers to modernize operations, improve production efficiency, and gain real-time visibility across the enterprise. Our solutions support discrete and process manufacturing environments by integrating ERP, analytics, and operational systems.
We help manufacturers respond to market demand, control costs, and improve profitability through data-driven decision making.
`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'ERP for manufacturing operations',
          'Production planning & scheduling',
          'Inventory & materials management',
          'Cost accounting & margin analysis',
          'Shop floor & system integration',
          'Reporting & operational analytics',
        ],
        outcomes: [
          'Improved production efficiency',
          'Enhanced regulatory compliance',
          'Accurate financial tracking',
          'Better margin visibility',
        ],

      },
      {
        title: 'Recycling',
        subtitle: 'Driving Efficiency, Compliance, and Visibility in Recycling Operations',
        description: `DCC delivers technology solutions tailored to the unique challenges of the recycling industry, including fluctuating commodity pricing, complex logistics, and regulatory compliance.
Our solutions integrate finance, operations, inventory, and analytics to help recycling organizations operate efficiently and scale with confidence.`,
        icon: 'fas fa-mobile-alt',
        color: 'orange',
        image: 'assets/images/Experience_Application.jpg',
        capabilities: [
          'ERP & financial management',
          'Inventory & materials tracking',
          'Pricing & settlement management',
          'Compliance & reporting',
          'Analytics & performance dashboards',
        ],
        outcomes: [
          'Improved production efficiency',
          'Reduced operational costs',
          'Better demand forecasting',
          'Increased operational visibility',
        ],

      },
      {
        title: 'Produce Market',
        subtitle:
          'Supporting Fast-Moving, Compliance-Driven Produce Operations',
        description: `DCC has deep expertise in the produce industry and understands the operational realities of perishability, traceability, and regulatory requirements. Our solutions are designed to support end-to-end operations—from grower procurement to distribution and retail delivery`,
        icon: 'fas fa-shipping-fast',
        color: 'green',
        image: 'assets/images/Supply-Chain.jpg',
        capabilities: [
          'Lot & batch traceability',
          'FSMA compliance & reporting',
          'Inventory aging & spoilage control',
          'Order management & fulfillment',
          'Pricing, settlements & analytics'
        ],
        outcomes: [
          'Enhanced traceability & compliance',
          'Reduced waste & spoilage',
          'Faster order fulfillment',
          'Improved operational visibility',
        ],

      },
      {
        title: 'Grocery & Retail',
        subtitle:
          'Powering Scalable, Data-Driven Retail Operations',
        description: `DCC helps grocery and retail organizations streamline operations across stores, distribution centers, and corporate functions. Our solutions integrate ERP, analytics, and customer systems to support growth, profitability, and customer satisfaction.`,
        icon: 'fas fa-users',
        color: 'red',
        image: 'assets/images/CRM.jpg',
        capabilities: [
          'ERP for multi-location retail',
          'Inventory & supply chain optimization',
          'Financial consolidation & reporting',
          'POS & system integration',
          'Analytics & demand forecasting'

        ],
        outcomes: [
          'Improved inventory accuracy',
          'Reduced stockouts & overstocks',
          'Better financial visibility',
          'Scalable retail operations',
        ],

      }

    ];
  }

  getTechnologies(): TechnologyCard[] {
    return [
      {
        title: 'Enterprise Platforms - SAP',
        subtitle: 'SAP',
        description: `We deliver end-to-end SAP services, including implementation, upgrades, migrations, and support for ECC, S/4HANA, and SuccessFactors.`,
        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',
        capabilities: [
          'SAP ECC & S/4HANA',
          'Finance, Supply Chain & HR',
          'Migrations & upgrades',
          'Enhancements & integrations',
          'AMS & ongoing support',
        ],

      },
      {
        title: 'Enterprise Platforms - Microsoft',
        subtitle: 'Microsoft',
        description: `DCC is a trusted Microsoft partner delivering solutions across Dynamics 365, Azure, Power BI, and Microsoft 365.`,
        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',
        capabilities: [
          'Dynamics 365 (Finance, Supply Chain, CRM)',
          'Azure cloud & hybrid architecture',
          'Power BI analytics & reporting',
          'Microsoft 365 & collaboration tools',
        ],

      },

      {
        title: 'Enterprise Platforms - Salesforce',
        subtitle: 'Salesforce',
        description: `We help organizations implement and optimize Salesforce to improve sales performance, customer engagement, and service delivery.`,
        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',
        capabilities: [
          'Sales, Service & Marketing Clouds',
          'CRM customization & integration',
          'Analytics & dashboards',
          'Ongoing enhancements & support',
        ],

      },
      {
        title: 'Cloud & Infrastructure',
        subtitle: 'Cloud & Hybrid Environments',
        description: `We design and manage secure, scalable cloud and hybrid infrastructures aligned with business and compliance needs.`,
        icon: 'fas fa-mobile-alt',
        color: 'orange',
        image: 'assets/images/Experience_Application.jpg',
        capabilities: [
          'Cloud architecture & migration',
          'Hybrid & multi-cloud environments',
          'Infrastructure optimization',
          'Security & governance',

        ],

      },
      {
        title: 'Data, Analytics & AI',
        subtitle:
          'Turning Enterprise Data into Actionable Intelligence',
        description: `DCC enables organizations to unlock the full value of their data through enterprise analytics and AI-enabled insights.`,
        icon: 'fas fa-shipping-fast',
        color: 'green',
        image: 'assets/images/Supply-Chain.jpg',
        capabilities: [
          'Data strategy & architecture',
          'Power BI & enterprise reporting',
          'Data integration & warehousing',
          'Predictive analytics & forecasting',
          'Gen-AI & intelligent automation'
        ],

      },
      {
        title: 'Application Development & Integration',
        subtitle:
          'Building and Connecting Enterprise Systems',
        description: `We design, build, and integrate applications that support business operations and improve user productivity.`,
        icon: 'fas fa-users',
        color: 'red',
        image: 'assets/images/CRM.jpg',
        capabilities: [
          'Custom application development',
          'ERP & CRM integrations',
          'API & middleware solutions',
          'Application modernization',

        ],

      },
      {
        title: 'Cybersecurity & Compliance',
        subtitle:
          'Securing Enterprise Systems and Data',
        description: `DCC provides a layered security approach to protect applications, infrastructure, and data while meeting regulatory requirements.`,
        icon: 'fas fa-users',
        color: 'red',
        image: 'assets/images/CRM.jpg',
        capabilities: [
          'Identity & access management',
          'Network & endpoint security',
          'Cloud security',
          'Compliance & risk management',
          'Security assessments & monitoring',

        ],

      }

    ];
  }

  getSapSalesforces(): SapSalesforceCard[] {
    return [
      {
        title: 'One Stop Shop',
        subtitle: 'What We Offer',
        description: `Data Consultants offers an entire portfolio of services related to SAP – defining the KPI driven objective to implementations, miscellaneous enhancements & review. Data Consultants also assists the clients realize the benefit irrespective of the stage in the SAP journey.`,

      },
      {
        title: 'Adaptability',
        subtitle: 'The Way We Engage',
        description: `Continuous innovations paired with flexibility fosters an unmatched client experience. Data Consultants team is always committed to evolving client needs and is agile enough to respond to the same, resulting in long term relationships.`,

      },

      {
        title: 'Quick Results',
        subtitle: 'How We Deliver',
        description: `Data Consultants, owing to their years of experience across the various industries, have adopted a focused and industry centric approach. The tools and templates help Data Consultants start engagements quickly and show results from day one.`,

      },


    ];
  }

  getMicrosofts(): MicrosoftCard[] {
    return [
      {
        title: 'Microsoft',
        subtitle: 'Turn Microsoft into a secure, scalable operating platform.',
        description: `What we deliver :
- Cloud & infrastructure modernization for performance, uptime, and cost control
- Data & analytics enablement for faster decisions and clearer KPI ownership
- Governance & security alignment for real-world risk reduction`,

        icon: 'fas fa-server',
        color: 'blue',
        image: 'assets/images/ERP.jpg',

        capabilities: [
          'Microsoft Azure architecture, migration support, and optimization',
          'Microsoft 365 tenant planning, identity, and endpoint readiness',
          'Microsoft Power BI dashboards and semantic models for leadership reporting',
          'Microsoft Dynamics 365 advisory and integration services (as needed)',
          'Identity and access planning with Microsoft Entra',
        ],
        outcomes: [
          'Reduced operational overhead with standardized cloud services',
          'Higher user productivity with practical governance and adoption',
          'Better visibility across systems with unified reporting',
        ],

      },

    ];

  }

}

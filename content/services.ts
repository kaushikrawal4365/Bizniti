export type Service = {
  slug: string;
  number: string;
  name: string;
  navName?: string;
  short: string;
  intro: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'website-development', number: '01', name: 'Website Development',
    short: 'Digital experiences that look sharp, load fast, and guide people to act.',
    intro: 'BizNiti treats a website as more than a digital footprint. It is the heart of a brand experience and a critical point of engagement.',
    points: ['Custom web design', 'Responsive development', 'E-commerce solutions', 'CMS integrations', 'SEO-ready builds', 'Speed optimization', 'Security-minded delivery'],
  },
  {
    slug: 'seo', number: '02', name: 'Search Engine Optimization',
    short: 'Make the right people discover the right offer without paying for every click.',
    intro: 'BizNiti simplifies SEO around the things that compound: search intent, useful content, technical clarity, and sustainable visibility.',
    points: ['Keyword and intent strategy', 'On-page optimization', 'Technical SEO', 'Content opportunities', 'Local visibility', 'Performance tracking'],
  },
  {
    slug: 'social-media-management', number: '03', name: 'Social Media Management',
    short: 'Turn social channels into a recognizable, responsive extension of the brand.',
    intro: 'Strategy, content, community and measurement work together so a brand does more than participate in the conversation—it leads it.',
    points: ['Channel strategy', 'Content creation', 'Community engagement', 'Social advertising', 'Analytics and reporting'],
  },
  {
    slug: 'ppc', number: '04', name: 'Pay-Per-Click Advertising',
    short: 'Put high-intent campaigns in front of people when the moment to act is strongest.',
    intro: 'BizNiti builds targeted PPC campaigns designed to increase qualified traffic, conversions, visibility and return on spend.',
    points: ['Campaign architecture', 'Search and social ads', 'Audience targeting', 'Landing-page alignment', 'Budget optimization', 'Performance reporting'],
  },
  {
    slug: 'content-marketing', number: '05', name: 'Content Marketing',
    short: 'Turn expertise into stories people remember, search for, and share.',
    intro: 'BizNiti uses content to make brands more useful and more distinctive—connecting voice, value, search visibility and action.',
    points: ['Content strategy', 'Articles and blog content', 'Visual storytelling', 'Distribution planning', 'Content optimization', 'Performance insights'],
  },
  {
    slug: 'email-marketing', number: '06', name: 'Email Marketing',
    short: 'Build direct relationships through timely, personal communication.',
    intro: 'Email becomes a relationship layer: targeted campaigns, thoughtful design, automation and measurement working as one system.',
    points: ['Targeted campaigns', 'Email design and copy', 'Subscriber growth', 'Automation and personalization', 'Performance optimization'],
  },
  {
    slug: 'fractional-cmo', number: '07', name: 'Fractional CMO',
    short: 'Senior marketing leadership without the overhead of a full-time executive.',
    intro: 'BizNiti brings experienced strategic leadership to businesses that need stronger direction, clearer priorities and a more connected marketing engine.',
    points: ['Strategic planning', 'Brand development', 'Digital marketing optimization', 'Market analysis', 'Martech evaluation', 'Team leadership', 'Performance analytics'],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

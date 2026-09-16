export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  takeaway: string;
  tags: string[];
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'callout' | 'list';
    text?: string;
    items?: string[];
    author?: string;
  }[];
}

export const insights: InsightArticle[] = [
  {
    slug: 'digital-strategy-isnt-a-channel',
    category: 'Strategy',
    title: 'Digital strategy is not another channel',
    excerpt: 'The strongest digital programs connect positioning, experience and execution instead of adding more disconnected tactics.',
    readTime: '4 min read',
    date: 'September 14, 2026',
    author: {
      name: 'Vish Nath',
      role: 'Founder & Growth Strategist',
    },
    takeaway: 'Stop treating digital as a collection of isolated campaigns. Alignment between brand proposition, technical infrastructure, and customer intent is what drives compounding growth.',
    tags: ['Strategy', 'Digital Transformation', 'Growth Systems'],
    content: [
      {
        type: 'paragraph',
        text: 'When businesses feel stuck in their growth, the most common reflex is to add another channel: launch a new ad format, publish twice as many blog posts, or redesign a landing page in isolation. But channels don’t fix core clarity issues.',
      },
      {
        type: 'heading',
        text: 'The Friction of Fragmented Execution',
      },
      {
        type: 'paragraph',
        text: 'When your paid media team speaks one language, your web team builds for a different objective, and your sales team receives unvetted leads, effort multiplies while outcome shrinks. Strategy isn’t what you publish—it is how your entire digital ecosystem reinforces your core advantage.',
      },
      {
        type: 'quote',
        text: 'Good businesses don’t need more noise. They need a clearer way forward that connects positioning to customer conversion.',
        author: 'Vish Nath',
      },
      {
        type: 'heading',
        text: 'Three Pillars of a Connected System',
      },
      {
        type: 'list',
        items: [
          'Positioning & Context: Defining exactly who you serve and why your solution matters before spending a single dollar on distribution.',
          'Experience & Velocity: A fast, frictionless digital environment that turns high-intent visitors into committed partners.',
          'Feedback Loops & Data: Real-time telemetry that informs strategy rather than vanity reporting metrics.',
        ],
      },
      {
        type: 'callout',
        text: 'Action item: Audit your current stack. If any tool or campaign cannot trace its contribution back to enterprise growth or customer clarity, pause it.',
      },
    ],
  },
  {
    slug: 'content-that-does-more',
    category: 'Content',
    title: 'Create content that does more than fill a calendar',
    excerpt: 'Useful content compounds when it is built around real customer questions, clear expertise and measurable intent.',
    readTime: '5 min read',
    date: 'August 28, 2026',
    author: {
      name: 'Vish Nath',
      role: 'Founder & Growth Strategist',
    },
    takeaway: 'Content strategy should solve problems, build trust, and lower buying friction—not just chase search impressions that never convert into pipeline.',
    tags: ['Content Marketing', 'SEO', 'Brand Authority'],
    content: [
      {
        type: 'paragraph',
        text: 'Most content calendars are built around publishing frequency rather than value creation. The result? Endless articles that look like generic summaries and fail to build genuine authority.',
      },
      {
        type: 'heading',
        text: 'From Volume to High-Intent Relevance',
      },
      {
        type: 'paragraph',
        text: 'High-performing content isn’t about matching word counts. It’s about answering the high-stakes questions your prospective buyers are asking right before making a decision.',
      },
      {
        type: 'quote',
        text: 'Your prospective clients don’t want generic advice. They want sharp, actionable perspectives from people who have solved their specific problem.',
        author: 'Vish Nath',
      },
      {
        type: 'heading',
        text: 'How Content Compounds Over Time',
      },
      {
        type: 'list',
        items: [
          'Deep Subject Authority: Write from first-hand expertise, case studies, and proprietary insights.',
          'Search & Intent Alignment: Target search terms where buyers are actively evaluating solutions.',
          'Multi-format Reusability: Turn core strategic frameworks into newsletters, executive decks, and targeted video breaks.',
        ],
      },
    ],
  },
  {
    slug: 'the-modern-website',
    category: 'Web',
    title: 'A modern website should behave like a growth system',
    excerpt: 'Design matters. So do speed, structure, conversion paths, discoverability and the data behind the experience.',
    readTime: '6 min read',
    date: 'August 10, 2026',
    author: {
      name: 'Vish Nath',
      role: 'Founder & Growth Strategist',
    },
    takeaway: 'Your website is your primary digital asset. Treat it as a continuous growth product rather than a static digital brochure updated every 3 years.',
    tags: ['Web Development', 'UX Design', 'Conversion Optimization'],
    content: [
      {
        type: 'paragraph',
        text: 'A great website is not just a visual showcase. It is an active engine designed to communicate value, remove buying hesitation, and move decision-makers seamlessly to action.',
      },
      {
        type: 'heading',
        text: 'The Architecture of Modern Web Growth',
      },
      {
        type: 'paragraph',
        text: 'Sub-second performance, typography hierarchy, micro-animations, and intuitive user paths work together to construct a sense of high quality and reliability.',
      },
      {
        type: 'quote',
        text: 'Every millisecond of latency and every point of cognitive friction cost customer trust. Design with clarity, build with precision.',
        author: 'Vish Nath',
      },
      {
        type: 'heading',
        text: 'Key Components of High-Converting Digital Work',
      },
      {
        type: 'list',
        items: [
          'Ultra-fast load speed & clean technical SEO architecture.',
          'Contextual storytelling that guides visitors from awareness to intent.',
          'Frictionless lead intake forms with intelligent multi-select options.',
        ],
      },
    ],
  },
];

export const getInsight = (slug: string) => insights.find((item) => item.slug === slug);

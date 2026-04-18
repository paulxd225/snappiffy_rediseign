export type NavItem = {
  label: string
  sectionId: 'home' | 'catalogue' | 'our-process' | null
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: 'home', href: '#home' },
  { label: 'About us', sectionId: null, href: '#home' },
  { label: 'Services', sectionId: null, href: '#catalogue' },
  { label: 'Case Study', sectionId: null, href: '#catalogue' },
  { label: 'Catalogue', sectionId: 'catalogue', href: '#catalogue' },
  { label: 'Our Process', sectionId: 'our-process', href: '#our-process' },
  { label: 'Industries', sectionId: null, href: '#home' },
  { label: "FAQ's", sectionId: null, href: '#faqs' },
]

export const TECH_STACK = [
  'Flutter',
  'FlutterFlow',
  'Firebase',
  'HTML',
  'CSS',
  'JS',
  'Nest',
  'Node / TS',
] as const

export const PROCESS_STEP_IMAGE_URLS = [
  'https://kxdbpkaywjrudesmonef.supabase.co/storage/v1/object/public/assets-files/section6_steps/step1.png',
  'https://kxdbpkaywjrudesmonef.supabase.co/storage/v1/object/public/assets-files/section6_steps/step2.png',
  'https://kxdbpkaywjrudesmonef.supabase.co/storage/v1/object/public/assets-files/section6_steps/step3_1.png',
  'https://kxdbpkaywjrudesmonef.supabase.co/storage/v1/object/public/assets-files/section6_steps/step3_1.png',
] as const

export type FaqItem = { q: string; a: string }

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How long does it take to build an app?',
    a: 'Most MVPs ship in a few weeks depending on scope, integrations, and review cycles. We align on milestones early so you always know what to expect.',
  },
  {
    q: 'Do you work with startups and established businesses?',
    a: 'Yes. We tailor discovery, design, and delivery whether you are validating an idea or scaling an existing product.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We combine Flutter / FlutterFlow with Firebase and modern web backends (Node, Nest, TypeScript) so your stack stays maintainable and fast to iterate.',
  },
  {
    q: 'How does pricing work?',
    a: 'Projects typically start from published entry packages with clear deliverables. After discovery we provide a tailored proposal with milestones and optional retainers.',
  },
]

export const HERO_BENEFITS = [
  'Cheaper',
  'Faster',
  'Smarter',
  'Scalable',
] as const

export type PortfolioApp = {
  title: string
  description: string
  mockVariant: 'restaurant' | 'food' | 'health' | 'realestate'
}

export const PORTFOLIO_APPS: PortfolioApp[] = [
  {
    title: 'Restaurant App',
    description: 'Made to order with fresh ingredients.',
    mockVariant: 'restaurant',
  },
  {
    title: 'Food App',
    description: 'Find the best recipes for summer.',
    mockVariant: 'food',
  },
  {
    title: 'Health App',
    description: 'Materiats develop and functieiæ.',
    mockVariant: 'health',
  },
  {
    title: 'Real Estate App',
    description: 'Stay short fiñarn:sode for modeling.',
    mockVariant: 'realestate',
  },
]

export type ProcessStep = {
  title: string
  body: string
  side: 'left' | 'right'
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: '1 Schedule a Discovery Call & Visit',
    body: "Book a detailed consultation or an in-person meeting (Only in Ohio) to deeply understand your needs, business goals, and challenges. We'll discuss the project scope, timeline, and budget.",
    side: 'left',
  },
  {
    title: '2 Action Plan & Proposal',
    body: "Based on our discussion, we'll create a comprehensive action plan, outlining deliverables, milestones, and a tailored proposal.",
    side: 'right',
  },
  {
    title: '3 AI-Driven Development',
    body: 'Our expert team, leveraging cutting-edge AI tools and frameworks like FlutterFlow and Firebase, begins building your custom mobile application.',
    side: 'left',
  },
  {
    title: '4 Review, Iterate & Launch',
    body: 'We provide regular updates and incorporate your feedback. Once finalized, we handle the seamless deployment of your app to the app stores.',
    side: 'right',
  },
]

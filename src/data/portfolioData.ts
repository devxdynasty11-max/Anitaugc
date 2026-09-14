import { ServiceItem, SelectedWorkItem } from '../types';

export const CREATOR_PROFILE = {
  name: 'Anita Lenka',
  displayName: 'Anita',
  role: 'Faceless UGC Creator',
  location: 'Delhi NCR, India',
  tagline: 'Content that feels real.',
  heroDescription: 'Creating aesthetic, scroll-stopping content that helps brands connect with their audience — authentically.',
  aboutHeadline: 'More than content, it’s a connection.',
  aboutPara1: "I'm Anita, a faceless UGC creator based in Delhi NCR, passionate about creating lifestyle, beauty, skincare, and aesthetic content. I believe in the power of storytelling — where products become a part of real moments and everyday lives.",
  aboutPara2: "Through clean visuals, natural composition, and thoughtful creative direction, I help brands showcase their products in a way that feels authentic, relatable, and visually memorable.",
  aboutQuote: "Good content doesn't just show products, it creates feelings.",
  email: 'anita.lenka14@gmail.com',
  instagramHandle: '@ugcby_ayeesha',
  instagramUrl: 'https://www.instagram.com/ugcby_ayeesha/',
  adityaxUrl: 'https://www.instagram.com/adityax/',
  niches: ['Beauty', 'Skincare', 'Lifestyle', 'Fashion'],
  aboutSideDetails: [
    {
      id: 'side-1',
      icon: 'map-pin',
      title: 'Delhi NCR, India',
      subtitle: 'Based in'
    },
    {
      id: 'side-2',
      icon: 'heart',
      title: '24+ Brands',
      subtitle: 'Worked With'
    },
    {
      id: 'side-3',
      icon: 'sparkle',
      title: '45+ Collaborations',
      subtitle: 'Across Beauty, Skincare, Lifestyle & More'
    },
    {
      id: 'side-4',
      icon: 'leaf',
      title: 'Faceless & Product-Focused',
      subtitle: 'Letting the product be the hero'
    },
    {
      id: 'side-5',
      icon: 'user',
      title: 'Open to Collaborations',
      subtitle: 'Always excited to work with new brands'
    }
  ]
};

// Selected Work items matching the reference design
export const SELECTED_WORK: SelectedWorkItem[] = [
  {
    id: 'work-1',
    title: 'Luxury Perfume & Warm Sunlight',
    category: 'BEAUTY & FRAGRANCE',
    subtitle: 'Golden Amber Reflections & Glass Craft',
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85',
    tag: 'Beauty & Fragrance',
    note: 'Warm golden sunlight with delicate prism reflections'
  },
  {
    id: 'work-2',
    title: 'Sensory Face Cream & Self Care Journal',
    category: 'SKINCARE & LIFESTYLE',
    subtitle: 'Velvet Texture & Daily Mindful Rituals',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85',
    tag: 'Skincare & Lifestyle',
    note: 'Linen flatlay with botanical notes'
  }
];

// Hero Collage Images matching the reference screenshot's composition
export const HERO_COLLAGE = {
  polaroid1: {
    // Aesop amber bottle photo in aesthetic setting
    url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85',
    alt: 'Aesop amber skincare bottle in natural sunlight',
    label: 'Aesop.'
  },
  polaroid2: {
    // Skincare tube with chic branding
    url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85',
    alt: 'Aesthetic skincare tube still life with washi tape',
    label: 'Rhode'
  },
  polaroid3: {
    // Card with text: "Good Products Better Stories"
    url: 'https://images.unsplash.com/photo-1608248597359-0a6886e57cb0?auto=format&fit=crop&w=800&q=85',
    alt: 'Good Products Better Stories moodboard',
    caption: 'Good Products Better Stories.'
  },
  polaroid4: {
    // Scented candle / luxe jar ("SANTAL 26")
    url: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85',
    alt: 'Luxury scented candle on aesthetic surface',
    label: 'SANTAL 26'
  }
};

// Anita's 8 core UGC services as displayed in the reference screenshot
export const SERVICES: ServiceItem[] = [
  {
    id: 'svc-1',
    title: 'UGC Product Videos',
    subtitle: 'Relatable product demo',
    description: 'Engaging product videos that drive real connection.',
    iconName: 'video'
  },
  {
    id: 'svc-2',
    title: 'Unboxing Videos',
    subtitle: 'First impression reveals',
    description: 'Aesthetic unboxing that builds excitement and trust.',
    iconName: 'box'
  },
  {
    id: 'svc-3',
    title: 'Testimonials & Reviews',
    subtitle: 'Social proof',
    description: 'Authentic reviews that feel real and relatable.',
    iconName: 'message'
  },
  {
    id: 'svc-4',
    title: 'Voiceover Videos',
    subtitle: 'Audio storytelling',
    description: 'Story-driven voiceovers for deeper audience engagement.',
    iconName: 'mic'
  },
  {
    id: 'svc-5',
    title: 'Aesthetic Product Videos',
    subtitle: 'Visual texture reels',
    description: 'Clean, minimal, and visually refined product shots.',
    iconName: 'sparkle'
  },
  {
    id: 'svc-6',
    title: 'Product Photography',
    subtitle: 'Still life & flatlays',
    description: 'High-quality, aesthetic product photography.',
    iconName: 'image'
  },
  {
    id: 'svc-7',
    title: 'Lifestyle Content',
    subtitle: 'Daily rituals',
    description: 'Everyday moments that blend naturally with your brand.',
    iconName: 'coffee'
  },
  {
    id: 'svc-8',
    title: 'Social Media Reels',
    subtitle: 'Short-form trends',
    description: 'Short-form content tailored for Instagram, TikTok & more.',
    iconName: 'smartphone'
  }
];

// Brands strip matching the screenshot
export const TRUSTED_BRANDS = [
  { name: 'L’ORÉAL', sub: 'PROFESSIONAL' },
  { name: 'Nestlé' },
  { name: 'DeoDap' },
  { name: 'Muloha' },
  { name: 'Sanova', sub: 'COSMETICS' },
  { name: 'SkinInspired' },
  { name: 'KEYDERMA' },
  { name: 'Niconi' },
  { name: 'Ved Sanjeevni' },
  { name: 'The Hug Box' },
  { name: 'Tuffon Industries' },
  { name: '& More' }
];

// Dedicated Brand Collaboration Cards for the "Brand Collaborations" section
export const BRAND_COLLABORATION_CARDS = [
  {
    id: 'b-1',
    name: 'L’Oréal Professional',
    niche: 'HAIRCARE & BEAUTY'
  },
  {
    id: 'b-2',
    name: 'Nestlé',
    niche: 'LIFESTYLE & FMCG'
  },
  {
    id: 'b-3',
    name: 'DeoDap',
    niche: 'E-COMMERCE & LIFESTYLE'
  },
  {
    id: 'b-4',
    name: 'Muloha',
    niche: 'FASHION & JEWELLERY'
  },
  {
    id: 'b-5',
    name: 'Sanova Cosmetics',
    niche: 'CLEAN COSMETICS'
  },
  {
    id: 'b-6',
    name: 'SkinInspired',
    niche: 'DERMATOLOGICAL SKINCARE'
  },
  {
    id: 'b-7',
    name: 'KEYDERMA',
    niche: 'CLINICAL SKINCARE'
  },
  {
    id: 'b-8',
    name: 'Niconi',
    niche: 'PROFESSIONAL BEAUTY'
  },
  {
    id: 'b-9',
    name: 'Ved Sanjeevni',
    niche: 'AYURVEDIC WELLNESS'
  },
  {
    id: 'b-10',
    name: 'The Hug Box',
    niche: 'CURATED GIFTING'
  },
  {
    id: 'b-11',
    name: 'Tuffon Industries',
    niche: 'LIFESTYLE DESIGN'
  },
  {
    id: 'b-12',
    name: '& More',
    niche: 'BOUTIQUE DTC LABELS'
  }
];

export const BRAND_COLLABORATIONS = {
  confirmedPartnerships: '24+ Confirmed Partnerships',
  confirmedBrands: '24+',
  collaborations: '45+'
};

// Audience & Insights metrics matching the screenshot
export const AUDIENCE_INSIGHTS = [
  {
    id: 'stat-1',
    number: '40K',
    rawNumber: 40,
    unit: 'K',
    label: 'Reach',
    icon: 'bar-chart'
  },
  {
    id: 'stat-2',
    number: '5K',
    rawNumber: 5,
    unit: 'K',
    label: 'Average Reach',
    icon: 'trending-up'
  },
  {
    id: 'stat-3',
    number: '18–34',
    label: 'Main Age Group',
    icon: 'users'
  },
  {
    id: 'stat-4',
    number: 'India, USA & UK',
    label: 'Top Audience Locations',
    icon: 'map-pin'
  },
  {
    id: 'stat-5',
    number: 'Female',
    label: 'Primary Audience',
    icon: 'heart'
  }
];

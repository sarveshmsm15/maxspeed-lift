/**
 * MAXSPEED LIFT — Central Business Configuration
 * 
 * All business information is centralized here.
 * Update this file when verified information becomes available.
 * Fields marked with [PLACEHOLDER] should be confirmed before production.
 */

export const siteConfig = {
  company: {
    name: 'MAXSPEED LIFT',
    tagline: 'Premium Elevator Solutions',
    description: 'Professional elevator solutions provider based in Tamil Nadu, India. Specializing in passenger lifts, home elevators, and commercial elevator systems.',
    phone: '+91 70946 33952',
    phoneClean: '917094633952',
    whatsapp: '917094633952',
    whatsappMessage: 'Hello MAXSPEED LIFT, I visited your website and would like to enquire about your elevator products and services. Please contact me with further details.',
    email: '', // [PLACEHOLDER] — Confirm official email before publication
    address: {
      street: 'Near Pallikonda Toll, SH-127',
      area: 'Pallikonda',
      city: 'Vellore',
      state: 'Tamil Nadu',
      pincode: '635809',
      country: 'India',
      full: 'Near Pallikonda Toll, SH-127, Pallikonda, Vellore, Tamil Nadu 635809, India',
    },
    googleMapsUrl: 'https://maps.app.goo.gl/C2DfFmMNsm37r7q17',
    // [PLACEHOLDER] — Confirm business hours before publication
    businessHours: {
      weekdays: '9:00 AM – 6:00 PM',
      saturday: '9:00 AM – 2:00 PM',
      sunday: 'Closed',
      note: 'Business hours are approximate. Please call to confirm.',
    },
    regions: ['Vellore', 'Tirupattur', 'Tamil Nadu'],
  },

  developer: {
    name: 'Wildarion Technologies',
    url: 'https://wildarion.netlify.app/',
    credit: 'Crafted with precision by Wildarion Technologies',
  },

  seo: {
    siteUrl: '', // [PLACEHOLDER] — Set production URL before deployment
    siteName: 'MAXSPEED LIFT',
    defaultTitle: 'MAXSPEED LIFT — Premium Elevator Solutions',
    defaultDescription: 'MAXSPEED LIFT provides premium elevator solutions including passenger lifts, home elevators, and commercial elevator systems in Tamil Nadu, India.',
    defaultImage: '/images/og-image.jpg',
    locale: 'en_IN',
    twitterHandle: '', // [PLACEHOLDER]
  },

  social: {
    // [PLACEHOLDER] — Add verified social media URLs
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  },

  products: [
    {
      id: 'passenger-elevators',
      slug: 'passenger-elevators',
      name: 'Passenger Elevators',
      shortDescription: 'Reliable and smooth passenger elevator systems designed for residential and commercial buildings.',
      description: 'Our passenger elevators combine safety, comfort, and efficiency. Engineered for smooth vertical transportation in residential complexes, office buildings, and commercial spaces.',
      features: [
        'Smooth and quiet operation',
        'Energy-efficient drive systems',
        'Customizable cabin interiors',
        'Advanced safety mechanisms',
        'Suitable for various building types',
      ],
      image: '/images/products/passenger-elevators.jpg',
      category: 'Passenger',
      verified: true,
    },
    {
      id: 'home-elevators',
      slug: 'home-elevators',
      name: 'Home Elevators',
      shortDescription: 'Elegant residential elevators that blend seamlessly with your home architecture.',
      description: 'Transform your home with our premium residential elevators. Designed to complement modern architecture while providing convenient vertical mobility for families.',
      features: [
        'Compact design for residential spaces',
        'Customizable finishes and materials',
        'Quiet operation technology',
        'Easy installation process',
        'Low maintenance requirements',
      ],
      image: '/images/products/home-elevators.jpg',
      category: 'Residential',
      verified: true,
    },
    {
      id: 'hospital-elevators',
      slug: 'hospital-elevators',
      name: 'Hospital Elevators',
      shortDescription: 'Specialized elevator systems designed for healthcare facilities and medical environments.',
      description: 'Purpose-built hospital elevators designed to safely transport patients, medical equipment, and healthcare personnel. Spacious cabins with smooth operation for critical medical environments.',
      features: [
        'Spacious cabin for stretcher access',
        'Smooth and stable operation',
        'Emergency operation features',
        'Hygienic interior materials',
        'Priority call systems',
      ],
      image: '/images/products/hospital-elevators.jpg',
      category: 'Healthcare',
      verified: false, // [PLACEHOLDER] — Confirm if offered
    },
    {
      id: 'goods-elevators',
      slug: 'goods-elevators',
      name: 'Goods Elevators',
      shortDescription: 'Heavy-duty freight elevators for industrial and commercial material handling.',
      description: 'Robust goods elevators engineered for efficient vertical transportation of heavy loads and materials. Built for warehouses, factories, and commercial operations.',
      features: [
        'High load capacity',
        'Durable construction',
        'Wide door openings',
        'Industrial-grade components',
        'Reliable operation under heavy use',
      ],
      image: '/images/products/goods-elevators.jpg',
      category: 'Industrial',
      verified: true,
    },
    {
      id: 'capsule-elevators',
      slug: 'capsule-elevators',
      name: 'Capsule Elevators',
      shortDescription: 'Stunning panoramic capsule elevators that make a bold architectural statement.',
      description: 'Our capsule elevators feature transparent glass panels and elegant designs, creating a distinctive architectural feature while providing panoramic views during transit.',
      features: [
        'Panoramic glass panels',
        'Architectural design element',
        'LED lighting systems',
        'Premium cabin finishes',
        'Smooth scenic ride experience',
      ],
      image: '/images/products/capsule-elevators.jpg',
      category: 'Premium',
      verified: false, // [PLACEHOLDER] — Confirm if offered
    },
    {
      id: 'commercial-elevators',
      slug: 'commercial-elevators',
      name: 'Commercial Elevators',
      shortDescription: 'Professional elevator solutions tailored for offices, malls, and commercial properties.',
      description: 'Comprehensive commercial elevator solutions designed for high-traffic environments. Our systems combine reliability, speed, and elegance to serve modern commercial spaces.',
      features: [
        'High-traffic capacity',
        'Fast travel speeds',
        'Destination dispatch systems',
        'Professional cabin interiors',
        'Energy-efficient operation',
      ],
      image: '/images/products/commercial-elevators.jpg',
      category: 'Commercial',
      verified: true,
    },
  ],

  services: [
    {
      id: 'elevator-installation',
      title: 'Elevator Installation',
      description: 'Professional installation of new elevator systems with precision engineering and minimal disruption to your building operations.',
      icon: 'Wrench',
      verified: true,
    },
    {
      id: 'lift-maintenance',
      title: 'Lift Maintenance',
      description: 'Scheduled preventive maintenance programs to ensure reliable, safe, and efficient elevator operation throughout the year.',
      icon: 'Settings',
      verified: true,
    },
    {
      id: 'elevator-modernization',
      title: 'Elevator Modernization',
      description: 'Upgrade aging elevator systems with modern technology, improved safety features, and enhanced performance.',
      icon: 'RefreshCw',
      verified: true,
    },
    {
      id: 'elevator-repair',
      title: 'Elevator Repair',
      description: 'Responsive repair services to minimize downtime and restore your elevator systems to optimal operation.',
      icon: 'Hammer',
      verified: true,
    },
    {
      id: 'technical-inspection',
      title: 'Technical Inspection',
      description: 'Comprehensive safety inspections and technical assessments to ensure compliance and reliable operation.',
      icon: 'ClipboardCheck',
      verified: false, // [PLACEHOLDER]
    },
    {
      id: 'consultation',
      title: 'Elevator Consultation',
      description: 'Expert consultation services to help you choose the right elevator solution for your building requirements and budget.',
      icon: 'MessageSquare',
      verified: true,
    },
  ],

  whyChooseUs: [
    {
      title: 'Engineering Quality',
      description: 'Every elevator system is engineered with precision components and rigorous quality standards.',
      icon: 'Award',
    },
    {
      title: 'Customer-Centric Service',
      description: 'We prioritize your requirements and provide dedicated support from consultation to installation and beyond.',
      icon: 'Users',
    },
    {
      title: 'Reliable Solutions',
      description: 'Our elevator systems are built for consistent, dependable performance in every environment.',
      icon: 'Shield',
    },
    {
      title: 'Professional Support',
      description: 'Our trained technicians provide prompt maintenance and repair services when you need them.',
      icon: 'Headphones',
    },
    {
      title: 'Safety-Oriented Approach',
      description: 'Safety is integrated into every aspect of our design, installation, and maintenance processes.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Installation Expertise',
      description: 'Skilled installation teams ensure your elevator system is set up correctly and efficiently.',
      icon: 'Zap',
    },
  ],

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ],

  footerLinks: {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Products', path: '/products' },
      { label: 'Services', path: '/services' },
      { label: 'Projects', path: '/projects' },
      { label: 'Contact', path: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Cookie Policy', path: '/cookie-policy' },
      { label: 'Terms & Conditions', path: '/terms-and-conditions' },
    ],
  },

  // Gallery images — add your own photos inside public/images/gallery/ using these exact filenames.
  gallery: [
    {
      src: '/images/gallery/01-interiors.jpg',
      alt: 'Modern elevator interior with polished steel and warm lighting',
      category: 'Interiors',
    },
    {
      src: '/images/gallery/02-architecture.jpg',
      alt: 'Contemporary building architecture with glass elevator shaft',
      category: 'Architecture',
    },
    {
      src: '/images/gallery/03-commercial.jpg',
      alt: 'Modern commercial building lobby with elevator banks',
      category: 'Commercial',
    },
    {
      src: '/images/gallery/04-residential.jpg',
      alt: 'Elegant residential interior with home elevator entrance',
      category: 'Residential',
    },
    {
      src: '/images/gallery/05-industrial.jpg',
      alt: 'Industrial building with freight elevator installation',
      category: 'Industrial',
    },
    {
      src: '/images/gallery/06-healthcare.jpg',
      alt: 'Modern hospital corridor with specialized medical elevator',
      category: 'Healthcare',
    },
    {
      src: '/images/gallery/07-premium.jpg',
      alt: 'Luxury apartment building with panoramic elevator view',
      category: 'Premium',
    },
    {
      src: '/images/gallery/08-cabin-detail.jpg',
      alt: 'Modern residential property with integrated elevator access',
      category: 'Residential',
    },
  ],
} as const

export type Product = (typeof siteConfig.products)[number]
export type Service = (typeof siteConfig.services)[number]
export type GalleryImage = (typeof siteConfig.gallery)[number]

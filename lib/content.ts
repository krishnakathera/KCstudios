export const site = {
  name: "K C STUDIOS",
  tagline: "Cinematic storytelling for your most important moments.",
  description:
    "Professional photography and videography for weddings, events, and productions. Hundreds of weddings across cultures, full production capability, and post-production services.",
  email: "hello@kcstudios.com",
  bookingUrl: "",
  social: {
    instagram: "",
    vimeo: "",
    youtube: "",
  },
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Gear", href: "#gear" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  {
    value: "100+",
    label: "Weddings",
    description: "Across cultures, traditions, and timelines",
  },
  {
    value: "8",
    label: "Team Members Led",
    description: "Experienced in coordinating large productions",
  },
  {
    value: "Full",
    label: "Production",
    description: "Photo, video, audio, lighting & aerial under one roof",
  },
];

export const services = [
  {
    title: "Photography",
    description:
      "Timeless stills captured with professional Sony bodies and a full lens lineup — from wide establishing shots to intimate portraits.",
    icon: "camera" as const,
  },
  {
    title: "Videography",
    description:
      "Cinematic event films and highlight reels shot on cinema-grade Sony FX bodies with professional audio and stabilization.",
    icon: "video" as const,
  },
  {
    title: "Aerial & Drone",
    description:
      "Stunning aerial perspectives with DJI Mavic 3 Pro and Air 2S for venue reveals, outdoor ceremonies, and cinematic B-roll.",
    icon: "drone" as const,
  },
  {
    title: "Full Production",
    description:
      "End-to-end coverage — photo, video, audio, lighting, and aerial — managed and delivered by one experienced team.",
    icon: "production" as const,
  },
];

export const portfolio = {
  featuredVideo: {
    url: "",
    title: "Featured Reel",
    caption: "Your highlight reel will appear here",
  },
  galleryPlaceholderCount: 6,
  gallery: [] as { src: string; alt: string; category?: string }[],
};

export const beforeAfter = [] as {
  before: string;
  after: string;
  label: string;
}[];

export const beforeAfterPlaceholderCount = 2;

export const gear = {
  cameraBodies: [
    "2× Sony Alpha 1",
    "2× Sony FX3",
    "1× Sony FX30",
    "1× Sony A7 IV",
  ],
  lenses: [
    "Sony FE 12–24mm f/2.8",
    "2× Sony FE 16–35mm f/2.8",
    "Sony FE 24mm f/1.4",
    "Sony FE 35mm f/1.4",
    "Sony FE 50mm f/1.2",
    "Sony FE 90mm f/2.8 Macro",
    "Sony FE 50–125mm f/2",
    "Tamron 35–150mm f/2–2.8",
    "Tamron 70–180mm f/2.8",
  ],
  audio: [
    "Zoom F8 Field Recorder",
    "DJI Mic Kit",
    "3× Lapel Recorders",
    "Shotgun Microphone",
  ],
  lighting: [
    "3× Nanlite Forza 60x",
    "2× Nanlite Forza 500W",
    "2× Aputure F22c",
    "3× Godox V1",
    "2× Godox AD200",
    "2× Godox AD300",
    "1× Godox AD400",
    "1× Godox AD600",
    "Various diffusers & modifiers",
  ],
  support: [
    "DJI RS 3 Pro Gimbal",
    "DJI RS Mini Gimbal",
    "DJI Mavic 3 Pro",
    "DJI Air 2S",
  ],
};

export const gearCategories = [
  {
    id: "cameraBodies",
    title: "Camera Bodies",
    icon: "camera" as const,
    items: gear.cameraBodies,
  },
  {
    id: "lenses",
    title: "Lenses",
    icon: "aperture" as const,
    items: gear.lenses,
  },
  {
    id: "audio",
    title: "Audio",
    icon: "mic" as const,
    items: gear.audio,
  },
  {
    id: "lighting",
    title: "Lighting",
    icon: "light" as const,
    items: gear.lighting,
  },
  {
    id: "support",
    title: "Support & Aerial",
    icon: "drone" as const,
    items: gear.support,
  },
];

export const about = {
  headline: "Built for the moments that can't be recreated",
  paragraphs: [
    "I've managed teams of up to eight and delivered hundreds of weddings — across cultures, traditions, and the most demanding schedules. From intimate ceremonies to large-scale celebrations, I know how to move fast without sacrificing quality.",
    "Whether you need a lead shooter, a full production crew, or reliable coverage you can hand off entirely — K C STUDIOS brings cinema-grade gear, calm leadership under pressure, and a commitment to capturing every moment that matters.",
  ],
  highlights: [
    "Multicultural wedding experience",
    "Team leadership & coordination",
    "Fast-paced, high-pressure environments",
    "Photo + video + audio + aerial",
  ],
};

export const additionalServices = [
  {
    title: "Post-Production Editing",
    description:
      "Professional color grading, cutting, and delivery for photo and video. Polished results, ready to share.",
    price: "From $200 / event",
    icon: "edit" as const,
  },
  {
    title: "2nd Shooter & Coverage",
    description:
      "Need backup coverage or someone to shoot on your behalf? I integrate seamlessly with your team or lead independently.",
    price: "Available on request",
    icon: "users" as const,
  },
];

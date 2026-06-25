export const site = {
  name: "KCStudios",
  tagline: "Second shooter and freelance photo & video for your next production.",
  description:
    "Hire KCStudios as a second shooter or freelance photographer and videographer. Professional Sony cinema gear, seamless team integration, and reliable coverage for weddings, events, and productions.",
  email: "hello@kcstudios.com",
  bookingUrl: "",
  social: {
    instagram: "https://instagram.com/kcstudios.us",
    vimeo: "https://vimeo.com/khotofilms",
    youtube: "",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Gear", href: "#gear" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "2nd Shooter",
    description:
      "Reliable photo or video backup that slots into your workflow — same gear standards, clear communication, and footage delivered ready for your edit.",
    icon: "extras" as const,
  },
  {
    title: "Freelance Photography",
    description:
      "Lead or support stills coverage with professional Sony bodies and a full lens lineup — from wide establishing shots to intimate portraits.",
    icon: "camera" as const,
  },
  {
    title: "Freelance Videography",
    description:
      "Cinematic event films, B-roll, and highlight reels on cinema-grade Sony FX bodies with pro audio and stabilization.",
    icon: "video" as const,
  },
  {
    title: "Production Support",
    description:
      "Bring the full kit — cameras, lenses, audio, and lighting — so your production has the gear and crew backup it needs on set.",
    icon: "production" as const,
  },
];

export const portfolio = {
  featuredVideo: {
    url: "https://vimeo.com/showcase/9929569",
    title: "KC Studios Cinematic Collection",
    caption: "A curated selection of cinematic wedding and event films",
  },
  galleryPlaceholderCount: 0,
  gallery: [
    {
      src: "/gallery/5A317BC0-3BD4-4FB3-A3C9-9ADB394FF924.jpg",
      alt: "Couple in formal attire twirling under a crystal chandelier in a grand ballroom",
      width: 1280,
      height: 1600,
    },
    {
      src: "/gallery/DSC00077-Edit.jpg",
      alt: "Bride and groom walking through the marble halls of the New York Public Library",
      width: 1067,
      height: 1600,
    },
    {
      src: "/gallery/DSC00527-Edit.jpg",
      alt: "Couple in a red gown and tuxedo walking toward the camera with the U.S. Capitol dome behind them",
      width: 1067,
      height: 1600,
    },
    {
      src: "/gallery/DSC00769.jpg",
      alt: "Bride seated in a vintage luxury car as the groom holds the door on a cobblestone city street",
      width: 1600,
      height: 1067,
    },
    {
      src: "/gallery/DSC08589.jpg",
      alt: "Couple in traditional attire sharing a golden-hour moment outdoors",
      width: 1067,
      height: 1600,
    },
    {
      src: "/gallery/R4_00693.jpg",
      alt: "Bride and groom posing in front of ornate bronze doors at a grand stone building",
      width: 998,
      height: 1600,
    },
  ],
};

export const beforeAfter = [
  {
    before: "/before-after/r4-00371-before.jpg",
    after: "/before-after/r4-00371-after.jpg",
    label: "Color grade & retouch",
  },
  {
    before: "/before-after/dee-before.jpg",
    after: "/before-after/dee-after.jpg",
    label: "Portrait retouch",
  },
];

export const beforeAfterPlaceholderCount = 0;

export const gear = {
  cameraBodies: [
    "Sony Alpha 1",
    "Sony A7RV",
    "Sony FX3",
    "Sony A7SIII",
    "Sony FX30",
    "Sony A7 IV",
  ],
  lenses: [
    "Sony FE 12–24mm f/2.8",
    "Sony FE 16–35mm f/2.8",
    "Tamron 17–28mm f/2.8",
    "Sony FE 28–70mm f/2.0",
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
    "Lapel Recorders",
    "Shotgun Microphone",
    "Timecode Support",
  ],
  lighting: [
    "Nanlite Forza 60x",
    "Nanlite Forza 500W",
    "Aputure F22c",
    "Godox V1",
    "Godox AD200",
    "Godox AD300",
    "Godox AD400",
    "Godox AD600",
    "Various diffusers & modifiers",
  ],
  dj: [
    "QSC Speakers",
    "Bose Subs",
    "Light Bars",
    "Sparklers",
    "Dancefloor Lights",
    "Uplights",
    "Wireless Mics",
    "Photo Booth",
    "Video Booth (NEW Trend!)",
  ],
  videoExtras: [
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
    id: "dj",
    title: "DJ",
    icon: "dj" as const,
    items: gear.dj,
  },
  {
    id: "videoExtras",
    title: "Video Extras",
    icon: "video" as const,
    items: gear.videoExtras,
  },
];

export const about = {
  headline: "A reliable addition to your crew",
  paragraphs: [
    "Studios and lead shooters hire KCStudios when they need a second shooter or freelancer who shows up prepared, communicates clearly, and delivers footage that fits their workflow.",
    "From multicultural weddings to fast-paced event coverage, we bring cinema-grade Sony gear, calm professionalism on set, and the flexibility to support your vision — not compete with it.",
  ],
  highlights: [
    "2nd shooter photo & video",
    "Freelance coverage on your timeline",
    "Full pro gear kit available",
    "Seamless team integration",
  ],
};

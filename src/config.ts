import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://cgriff32.github.io/",
  author: "Griff",
  profile: "https://www.linkedin.com/in/chrisgriffiths32",
  desc: "Senior Systems Architect & Technical Consultant. Bridging the gap between the metal and the cloud.",
  title: "Griff.Engineer",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/cgriff32/Cgriff32.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

export const LOCALE = {
  main: "en-US", // IANA locale index for main language
  column: "en-US", // IANA locale index for secondary language
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/cgriff32",
    linkTitle: `Griff on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chrisgriffiths32",
    linkTitle: `Griff on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:cgriff32@gmail.com",
    linkTitle: `Send an email to Griff`,
    active: true,
  },
];

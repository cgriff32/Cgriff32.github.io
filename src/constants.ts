import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => any;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/cgriff32",
    linkTitle: `Griff on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chrisgriffiths32",
    linkTitle: `Griff on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:cgriff32@gmail.com",
    linkTitle: `Send an email to Griff`,
    icon: IconMail,
  },
] as const;

// Leave as empty array to disable post sharing links for now and avoid build errors
export const SHARE_LINKS: Social[] = [] as const;

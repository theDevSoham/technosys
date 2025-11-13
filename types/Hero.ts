export type HeroSection = {
  id: number;
  hero_tag: string;
  hero_header: string;
  hero_subheader: string;
  bg_img: string;
  cta?: string;
  cta_link?: string;
};

export type HeroSections = HeroSection[];

export interface HeroProps {
  content?: HeroContent;
}

export interface HeroContent {
  subtitle: string;
  title: string;
  title2: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface ServiceGuarantee {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceGuaranteesProps {
  services?: ServiceGuarantee[];
  variant?: 'default' | 'compact';
}

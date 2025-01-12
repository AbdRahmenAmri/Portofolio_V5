export type T_SOCIAL_MEDIA_LINK = {
  name: string;
  displayName: string;
  subText: string;
  url: string;
  color: string;
  gradient: string;
  isPrimary?: boolean;
};

export type T_DOMAIN = {
  url: string;
  ownerName: string;
};

export type T_ABOUT_ME = {
  fullName: string;
  avatar: string;
  description: string;
  resumeLink: string;
  roles: string[];
  technologies: string[];
  technologiesDescription: string;
};

export type T_PROJECT = {
  description: string;
  features: string[];
  repo?: string;
  img: string;
  link?: string;
  technologies: string[];
  title: string;
  id?: string;
};

export type T_CERTIFICATE = {
  img: string;
};

export type T_TECHNOLOGIE = {
  icon: string;
  language: string;
};

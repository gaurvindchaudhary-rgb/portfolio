export interface Project {
  id: string;
  title: string;
  category: "Web" | "Brand" | "Ads";
  description: string;
  tags: string[];
  image: string;
  index: string;
  url?: string;
  features?: string[];
}

export interface SkillTile {
  name: string;
  tag: string;
  className: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

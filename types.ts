export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  day: string;
  category: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

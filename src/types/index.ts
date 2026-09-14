export interface SelectedWorkItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  imageUrl: string;
  tag: string;
  note: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName?: string;
}

export interface BrandItem {
  id: string;
  name: string;
  isAccent?: boolean;
}

export interface StatItem {
  number: string;
  label: string;
  subtext: string;
}

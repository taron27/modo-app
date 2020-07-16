export interface DietInfo {
  title: string;
  name: string;
  image: string;
  description: string;
  options: Option[];
}

interface Option {
  name: string;
  value: string;
}

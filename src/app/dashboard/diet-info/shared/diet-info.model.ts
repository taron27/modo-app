export interface DietInfo {
  title: string;
  name: string;
  image: string;
  infoDescription: string;
  isShowInfo: boolean;
  options: Option[];
}

interface Option {
  name: string;
  value: string;
}

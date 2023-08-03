export interface Card {
  src: string;
  title: string;
  state: string;
  city: string;
  price: string;
  size: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
}

export interface Agent {
  id: number;
  src: string;
  title: string;
  description: string;
  tel: string;
  email: string;
}

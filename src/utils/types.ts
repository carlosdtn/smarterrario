export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  photo: string;
  location: string;
};

export interface Recomendation {
  title: string;
  description: string;
}

export interface Animal {
  id: number;
  animalType: AnimalType;
  title: string;
  description: string;
  photo: string;
  apiKey: string;
}

export enum AnimalType {
  Reptile = "Reptil",
  Rondent = "Roedor",
  Arachnid = "Arácnido",
}

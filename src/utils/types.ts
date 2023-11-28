export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  photo: string;
  location: string;
};

export type UserDoc = Pick<User, "name" | "email" | "photo" | "location">;

export interface Recomendation {
  title: string;
  description: string;
}

export interface Animal {
  id: string;
  animalType: AnimalType;
  title: string;
  description: string;
  photo: string;
  apiKey: string;
  channel: string;
}

export enum AnimalType {
  Reptile = "Reptil",
  Rondent = "Roedor",
  Arachnid = "Arácnido",
}

export interface UserFB {
  uid: string;
}

export interface ThingSpeakResponse {
  channel: Channel;
  feeds: Feed[];
  error?: string;
}

export interface Channel {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  created_at: Date;
  updated_at: Date;
  last_entry_id: number;
}

export interface Feed {
  created_at: Date;
  entry_id: number;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
}

export interface Sensor {
  title: string;
  value: string;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  data: number[];
}

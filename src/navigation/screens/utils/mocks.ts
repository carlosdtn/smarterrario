import { AnimalType } from "../../../utils/types";
import { Animal, Recomendation, User } from "../../../utils/types";

export const USER_MOCK: User = {
  id: 1,
  name: "Carlos Daniel",
  email: "carlos.tarmeno@unmsm.edu.pe",
  password: "123456",
  photo: "https://avatars.githubusercontent.com/u/54995804?v=4",
  location: "Lima, Perú",
};

export const ANIMALS_MOCK: Animal[] = [
  {
    id: 1,
    animalType: AnimalType.Rondent,
    title: "Henry",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Hamster_im_Gras.jpg/640px-Hamster_im_Gras.jpg",
    apiKey: "b1b15e88fa797225412429c1c50c122a1",
  },
  {
    id: 2,
    animalType: AnimalType.Reptile,
    title: "Calypso",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    photo:
      "https://www.fauna-flora.org/wp-content/uploads/2023/06/new-iguana-species-found-hiding-in-plain-sight-1024x614.png",
    apiKey: "b1b15e88fa797225412429c1c50c122a1",
  },
  {
    id: 3,
    animalType: AnimalType.Arachnid,
    title: "Spidey",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    photo:
      "https://www.zooplus.es/magazine/wp-content/uploads/2023/05/Tarantula-Goliat-Theraphosa-blondi.jpeg",
    apiKey: "b1b15e88fa797225412429c1c50c122a1",
  },
  {
    id: 4,
    animalType: AnimalType.Rondent,
    title: "Remy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    photo:
      "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2014/01/14/13896967491188.jpg",
    apiKey: "b1b15e88fa797225412429c1c50c122a1",
  },
  {
    id: 5,
    animalType: AnimalType.Rondent,
    title: "Coco",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    photo:
      "https://roedoresdomesticos.com/wp-content/uploads/2017/06/erizo-featured-roedoresdomesticos.jpg",
    apiKey: "b1b15e88fa797225412429c1c50c122a1",
  },
  {
    id: 6,
    animalType: AnimalType.Reptile,
    title: "Pogo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    photo: "https://www.zoopinto.es/wp-content/uploads/2021/04/Pogona.jpg",
    apiKey: "b1b15e88fa797225412429c1c50c122a1",
  },
];

export const RECOMENDATIONS_MOCK: Recomendation[] = [
  {
    title: "Roedores felices",
    description: "Proporciona juguetes y heno fresco para roedores contentos.",
  },
  {
    title: "Clima adecuado",
    description:
      "Mantén la temperatura y humedad correctas para reptiles saludables.",
  },
  {
    title: "Terrario seguro",
    description:
      "Asegúrate de que el terrario tenga escondites seguros para reptiles.",
  },
  {
    title: "Arañas bien alimentadas",
    description:
      "Suministra insectos nutritivos para mantener saludables a las arañas.",
  },
  {
    title: "Ambiente relajado",
    description:
      "Crea un ambiente tranquilo para el bienestar de las mascotas.",
  },
];

export const categories = [
  AnimalType.Rondent,
  AnimalType.Reptile,
  AnimalType.Arachnid,
];

export const CHARTDATA_MOCK = {
  labels: ["23/11", "24/11", "25/11", "26/11", "27/11", "28/11"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

export const SENSORDATA_MOCK = [
  {
    title: "Temperatura (°C)",
    value: 25,
  },
  {
    title: "Humedad ",
    value: 60,
  },
];

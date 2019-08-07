import lakeAtitlan from "../../photos/lake-atitlan.jfif";
import mamTorCastleton from "../../photos/mam-tor-castleton-uk.jfif";
import panajachelGuatemala from "../../photos/panajachel-guatemala.jfif";
import yosemiteValley from "../../photos/yosemite-valley.jfif";

export const localPhotos = [
  {
    id: "76978b42-b5b2-11e9-8e2d-6fe1b79f4830",
    name: "Mam Tor, Castleton, UK",
    price: 10.99,
    date: new Date(),
    url: mamTorCastleton,
    categoryId: 1,
    category: { id: 1, name: "Landscape", description: "Landscape category" },
    photographerId: 100,
    photographer: {
      id: 100,
      firstName: "Tom",
      lastName: "Johnson",
      email: "tom.johnson@gmail.com",
      phone: "313-330-1234"
    }
  },
  {
    id: "76978b42-b5b2-11e9-8e2d-6fe1b79f4831",
    name: "Lake Atitlan",
    price: 99.99,
    date: new Date(),
    url: lakeAtitlan,
    categoryId: 1,
    category: { id: 1, name: "Landscape", description: "Landscape category" },
    photographerId: 100,
    photographer: {
      id: 100,
      firstName: "Tom",
      lastName: "Johnson",
      email: "tom.johnson@gmail.com",
      phone: "313-330-1234"
    }
  },
  {
    id: "76978b42-b5b2-11e9-8e2d-6fe1b79f4832",
    name: "Yosemite Valley",
    price: 20.99,
    date: new Date(),
    url: yosemiteValley,
    categoryId: 3,
    category: { id: 3, name: "Portrait", description: "Portrait category" },
    photographerId: 102,
    photographer: {
      id: 102,
      firstName: "Amy",
      lastName: "William",
      email: "amy.william@real.com",
      phone: "800-800-1234"
    }
  },
  {
    id: "76978b42-b5b2-11e9-8e2d-6fe1b79f4833",
    name: "Panajachel Guatemala",
    price: 29.99,
    date: new Date(),
    url: panajachelGuatemala,
    categoryId: 3,
    category: { id: 3, name: "Portrait", description: "Portrait category" },
    photographerId: 101,
    photographer: {
      id: 101,
      firstName: "Jack",
      lastName: "Doe",
      email: "jack.doe@hotmail.com",
      phone: "666-888-5188"
    }
  }
];

export const localCategories = [
  { id: 1, name: "Landscape", description: "Landscape category" },
  { id: 2, name: "Animal", description: "Animal category" },
  { id: 3, name: "Portrait", description: "Portrait category" },
  { id: 4, name: "Wedding", description: "Wedding category" }
];

export const localPhotographers = [
  {
    id: 100,
    firstName: "Tom",
    lastName: "Johnson",
    email: "tom.johnson@gmail.com",
    phone: "313-330-1234"
  },
  {
    id: 101,
    firstName: "Jack",
    lastName: "Doe",
    email: "jack.doe@hotmail.com",
    phone: "666-888-5188"
  },
  {
    id: 102,
    firstName: "Amy",
    lastName: "William",
    email: "amy.william@real.com",
    phone: "800-800-1234"
  }
];
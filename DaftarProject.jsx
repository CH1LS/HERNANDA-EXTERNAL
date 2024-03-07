import Project from "./Project";

const DAFTAR_PROJECT = [
    new Project({
        id:1,
        name: "beach ",
        description: "Kelingking Beach, Nusa Penida",
        imageUrl: "/assets/pantai1.jpeg",
        budget: 10000,
        isActive: true
    }),
    new Project({
        id:2,
        name: "raja ampat",
        description: "raja ampat,papua barat",
        imageUrl: "../assets/pantai2.webp",
        budget: 10000,
        isActive: true
    }),
    new Project({
        id:3,
        name: "Pantai Ngurtafur",
        description: "Pantai Ngurtafur, Maluku",
        imageUrl: "../assets/pantai3.webp",
        budget: 10000,
        isActive: true
    }),
    new Project({
        id:4,
        name: "Kepulauan Derawan,",
        description: "Kepulauan Derawan, Kalimantan Timur",
        imageUrl: "../assets/pantai4.webp",
        budget: 10000,
        isActive: true
    }),
    new Project({
        id:5,
        name: "Taman Laut Bunaken,",
        description: "Taman Laut Bunaken, Sulawesi Utara",
        imageUrl: "../assets/pantai5.webp",
        budget: 10000,
        isActive: true
    }),

]

export default DAFTAR_PROJECT
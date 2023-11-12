import { defineStore } from "pinia";
export const useStore = defineStore("store", {
  state: () => ({
    groups: [
      "Milks & Diaries",
      "Coffees & Teas",
      "Pet Foods",
      "Meats",
      "Vegetable",
      "Fruit",
    ],
    promotions: [
      {
        id: 1,
        title: "Everyday Fresh & Clean with Our Products",
        color: "",
        image: "../assets/images/cat-11 1.png",
      },
      {
        id: 2,
        title: "Make your Breakfast Healthy and Easy",
        color: "#....",
        image: "...path to your image...",
      },
      {
        id: 3,
        title: "The best Organic Products Online",
        color: "#....",
        image: "...path to your image...",
      },
    ],
    categories: [
      {
        id: 1,
        group: "Milks & Diaries",
        name: "Coke & Milk",
        color: "#F2FCE6",
        image: new URL("../assets/images/cat-13 1.png", import.meta.url),
      },
      {
        id: 2,
        group: "Fruits",
        name: "Peach",
        color: "#FFFCEB",
        image: new URL("../assets/images/cat-13 1.png", import.meta.url),
      },
      {
        id: 3,
        group: "Fruits",
        name: "Organic Kiwi",
        color: "#....",
        image: "...path to your image...",
      },
      {
        id: 4,
        group: "Fruits",
        name: "Red Apple",
        color: "#....",
        image: "...path to your image...",
      },
      {
        id: 5,
        group: "Coffees & Teas",
        name: "Snack",
        color: "#....",
        image: "...path to your image...",
      },
      {
        id: 6,
        group: "Coffees & Teas",
        name: "Chocolate",
        color: "#",
        image: "."
      },
      {
        id: 7,
        group: "Coffees & Teas",
        name: "Chocolate",
        color: "#",
        image: "."
      },
      {
        id: 8,
        group: "Coffees & Teas",
        name: "Chocolate",
        color: "#",
        image: "."
      },
      {
        id: 9,
        group: "Coffees & Teas",
        name: "Chocolate",
        color: "#",
        image: "."
      },
      {
        id: 10,
        group: "Coffees & Teas",
        name: "Chocolate",
        color: "#",
        image: "."
      },
    ],
    products: [
      {
        id: 1,
        tag: "-17%",
        image: "...path to your image...",
        category: 3,
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate: 4,
        description: "500 gram",
        sellPrice: "3",
        discountPercentage: 17,
        discountPrice: 0,
      },
    ],
  }),
  getter: {},
  action: {},
});

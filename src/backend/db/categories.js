import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Basics",
    categoryImage:
      "https://images.unsplash.com/photo-1577375729078-820d5283031c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    alt: "Basics Img",
    value: "Basics",
  },
  {
    _id: uuid(),
    categoryName: "Technical Information",
    categoryImage:
      "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    alt: "Technical Information Img",
    value: "Info",
  },
  {
    _id: uuid(),
    categoryName: "Overclocking",
    categoryImage:
      "https://pbs.twimg.com/profile_images/1353085447950524417/fyaTk-sp_400x400.png",
    alt: "Overclocking Img",
    value: "overclock",
  },
  {
    _id: uuid(),
    categoryName: "Expert Advice",
    categoryImage:
      "https://i.guim.co.uk/img/media/6909bc33c38ea797d8d52cd681ff31bd28dd95ba/0_45_5000_3000/master/5000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5919d1eddd76d37bf85e89b459af6b63",
    alt: "Expert Advice Img",
    value: "advice",
  },
];

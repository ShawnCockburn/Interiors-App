import Category from '../models/categoryModel';
import Promotion from '../models/promotionModel';
import Range from '../models/rangeModel';
import Product from '../models/productModel';


export const CATEGORIES = [
  new Category('1', 'Beds', 'https://picsum.photos/200'),
  new Category('2', 'Chairs', 'https://picsum.photos/200'),
  new Category('3', 'Desks', 'https://picsum.photos/200'),
  new Category('4', 'Lamps', 'https://picsum.photos/200')
];
export const PROMOTIONS = [
  new Promotion('1', 'Free Beds', 'https://picsum.photos/200/300'),
  new Promotion('2', 'Reduced Chairs', 'https://picsum.photos/200/300'),
  new Promotion('3', 'Clearance Desks', 'https://picsum.photos/200/300'),
  new Promotion('4', 'Lamp Deals', 'https://picsum.photos/200/300')
];

export const RANGES = [
  new Range('1', 'Free Beds', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 'https://picsum.photos/200/200', ["1", "2"]),
  new Range('2', 'Reduced Chairs', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 'https://picsum.photos/200/200', ["1", "2"]),
  new Range('3', 'Clearance Desks', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 'https://picsum.photos/200/200', ["1", "2"]),
  new Range('4', 'Lamp Deals', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 'https://picsum.photos/200/200', ["1", "2"]),
];

export const PRODUCTS = [
  new Product(
    "1",
    "18621",
    "The Belfry Collection Mirrored Media Unit",
    "This is The Belfry Collection Mirrored Media Unit, handcrafted to utmost perfection the Belfry Collection brings world class into any interior. This stunning mirrored piece features champagne detailing adding a timeless luxury to your home. The Belfry Collection Mirrored Media Unit is practical yet ultimately elegant, it would make a perfect storage addition to any space. You can choose to accessorise this piece with home furnishings or leave it to stand alone, whichever option you choose this unit will always look elegant and classy.",
    {
      large: ["https://www.hill-interiors.com/images/giant/18621.jpg", "https://www.hill-interiors.com/images/giant/18621-a.jpg", "https://www.hill-interiors.com/images/giant/18621-b.jpg"],
      medium: ["https://www.hill-interiors.com/images/large/18621.jpg", "https://www.hill-interiors.com/images/large/18621-a.jpg", "https://www.hill-interiors.com/images/large/18621-b.jpg"],
      small: ["https://www.hill-interiors.com/images/small/18621sml.jpg", "https://www.hill-interiors.com/images/small/18621-asml.jpg", "https://www.hill-interiors.com/images/small/18621-bsml.jpg"]
    },
    26,
    "73cm",
    "144cm",
    "45cm",
    "45kg",
    "Gold",
    "Glass",
    500),
  new Product(
    "2",
    "18623",
    "The Belfry Collection Mirrored Sideboard",
    "This is the Belfry Collection Mirrored Sideboard, handcrafted to utmost perfection the Belfry Collection brings world class into any interior. This stunning mirrored range features champagne detailing adding a timeless luxury to any space. The Belfry Collection Mirrored Sideboard would make the perfect addition to a living room, bedroom, hallway or any room you wish. With it's champagne detailing and mirrored features, this range is sure to catch the attention of anyone who enters and makes a stunning focal point.",
    {
      large: ["https://www.hill-interiors.com/images/giant/18623.jpg", "https://www.hill-interiors.com/images/giant/18623-a.jpg", "https://www.hill-interiors.com/images/giant/18623-b.jpg"],
      medium: ["https://www.hill-interiors.com/images/large/18623.jpg", "https://www.hill-interiors.com/images/large/18623-a.jpg", "https://www.hill-interiors.com/images/large/18623-b.jpg"],
      small: ["https://www.hill-interiors.com/images/small/18623sml.jpg", "https://www.hill-interiors.com/images/small/18623-asml.jpg", "https://www.hill-interiors.com/images/small/18623-bsml.jpg"]
    },
    26,
    "73cm",
    "144cm",
    "45cm",
    "45kg",
    "Gold",
    "Glass",
    459)
];
import Category from '../models/categoryModel';
import Promotion from '../models/promotionModel';
import Prodcuct from '../models/productModel';

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

export const PRODUCTS = [
  new Prodcuct('1', 'Free Beds', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 'https://picsum.photos/200/200'),
  new Prodcuct('2', 'Reduced Chairs', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 'https://picsum.photos/200/200'),
  new Prodcuct('3', 'Clearance Desks', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 'https://picsum.photos/200/200'),
  new Prodcuct('4', 'Lamp Deals', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 'https://picsum.photos/200/200'),
];
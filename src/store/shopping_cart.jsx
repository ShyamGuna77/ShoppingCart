import { createContext } from "react";

export const CartContext = createContext({
  items: [], // Default value as an empty array
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

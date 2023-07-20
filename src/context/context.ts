import { createContext } from "react";
import { AddedProductModel } from "../model/AddedProductModel";

interface contextProps {
  addedProducts: AddedProductModel[];
  setAddedProducts: React.Dispatch<React.SetStateAction<AddedProductModel[]>>;
}

export const ProductContext = createContext<contextProps>({
    addedProducts: [],
    setAddedProducts: () => {},
});

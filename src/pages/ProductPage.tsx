import React, { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductModel } from "../model/ProductModel";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/context";

export const ProductPage = ({ products }: { products: ProductModel[] }) => {
  const { addedProducts, setAddedProducts } = useContext(ProductContext);
  const { productId } = useParams();

  const product = products.find((product) => {
    return product.id?.toString() === productId;
  });

  if (product === undefined) {
    return null;
  }

  const handleClick = () => {
    const addedProduct = addedProducts.find((prod) => prod.id === product?.id);

    if (addedProduct) {
      const newProducts = addedProducts.map((addedProd) => {
        if (addedProd.id === product?.id) {
          return {
            id: addedProd.id,
            count: addedProd.count + 1,
          };
        } else {
          return addedProd;
        }
      });
      setAddedProducts(newProducts);
    } else {
      setAddedProducts(
        addedProducts.concat({
          id: product?.id,
          count: 1,
        })
      );
    }
  };

  return (
    <ProductCard
      id={product.id}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      onButtonClick={handleClick}
    />
  );
};

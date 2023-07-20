import React, { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductModel } from "../model/ProductModel";
import { ProductContext } from "../context/context";
import { AddedProductModel } from "../model/AddedProductModel";

export const CartPage = ({ products }: { products: ProductModel[] }) => {
  const { addedProducts, setAddedProducts } = useContext(ProductContext);

  return (
    <>
      {addedProducts.map((addedProduct: AddedProductModel) => {
        const product = products.find(
          (product) => product.id === addedProduct.id
        );

        if (!product) {
          return null;
        }

        const handleClick = () => {
          if (addedProduct.count > 1) {
            const newProducts = addedProducts.map((addedProd) => {
              if (addedProd.id === product?.id) {
                return {
                  id: addedProd.id,
                  count: addedProd.count - 1,
                };
              } else {
                return addedProd;
              }
            });
            setAddedProducts(newProducts);
          } else {
            setAddedProducts(
              addedProducts.filter((prod) => prod.id !== product.id)
            );
          }
        };

        return (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            buttonText="Remove from Cart"
            onButtonClick={handleClick}
            count={addedProduct.count}
          />
        );
      })}
    </>
  );
};

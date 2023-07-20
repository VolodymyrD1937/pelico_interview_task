import React from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductModel } from "../model/ProductModel";
import { useNavigate } from "react-router-dom";

export const ProductsPage = ({ products }: { products: ProductModel[] }) => {
  const navigate = useNavigate();

  return (
    <>
      {products.map((product: ProductModel) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          onCardClick={() => {
            navigate(`/products/${product.id}`);
          }}
        />
      ))}
    </>
  );
};

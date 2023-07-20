import React from "react";
import { ProductModel } from "../model/ProductModel";

interface productCardProps extends ProductModel {
  buttonText?: string;
  count?: number;
  onCardClick?: () => void;
  onButtonClick?: () => void;
}

export const ProductCard = (props: productCardProps) => {
  const {
    title,
    description,
    price,
    image,
    count,
    buttonText = "Add to Cart",
    onCardClick,
    onButtonClick,
  } = props;

  return (
    <div onClick={onCardClick}>
      <img
        alt="product"
        src={image}
        style={{
          width: 100,
        }}
      />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      {onButtonClick && <button onClick={onButtonClick}>{buttonText}</button>}
      <h2>{count}</h2>
    </div>
  );
};

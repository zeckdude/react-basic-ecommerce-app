
import { ReactNode } from "react";
import "./index.css";
import { ItemsContainer } from "./ItemsContainer";
import { Product } from "../types";
import { ProductsList } from "./ProductsList";

type ProductsListContainerProps = {
  title: string
  topContent?: ReactNode
  products: Product[]
  onClickProductButton: (product: Product) => void
  buttonText?: string
}

export function ProductsListContainer({ products, onClickProductButton, buttonText, topContent, title }: ProductsListContainerProps) {
  return (
    <ItemsContainer title={title} numItems={products.length}>
      {topContent}
      <ProductsList products={products} onClickButton={onClickProductButton} buttonText={buttonText} />
    </ItemsContainer>
  );
}
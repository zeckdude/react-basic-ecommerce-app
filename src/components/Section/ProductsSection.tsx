import { Product } from "../../types";
import { ProductsListContainer } from "../ProductsListContainer";

type ProductsSectionProps = {
  products: Product[]
  onClickProductButton: (product: Product) => void
  buttonText?: string
}

export function ProductsSection(props: ProductsSectionProps) {
  return (
    <ProductsListContainer title="Products" {...props}
    />
  )
}
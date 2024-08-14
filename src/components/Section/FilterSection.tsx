import { ChangeEvent } from "react";
import { Product } from "../../types";
import { ProductsListContainer } from "../ProductsListContainer";

type FilterSectionProps = {
  products: Product[]
  onClickProductButton: (product: Product) => void
  buttonText?: string
  onChangeFilterTerm: (term: string) => void
}

export function FilterSection({ products, onChangeFilterTerm, ...props }: FilterSectionProps) {
  return (
    <ProductsListContainer products={products} title="Filter" topContent={(
      <div className="filter-header">
        <p>Filter by name</p>
        <input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeFilterTerm(event?.target.value)} />
        {products.length === 0 && <p>Enter search term to see filtered products</p>}
      </div>
    )}
      {...props}
    />
  )
}
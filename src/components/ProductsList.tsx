import "./index.css";
import { ItemsList } from "./ItemsList";
import { Item } from "./Item";
import { Product } from "../types";
import Decimal from 'decimal.js';


type ProductsListProps = {
  products: Product[]
  onClickButton: (product: Product) => void
  buttonText?: string
}

export function ProductsList({ products, onClickButton, buttonText = 'Add to Cart' }: ProductsListProps) {
  return (
    <ItemsList>
      {products.map(product => (
        <Item key={product.id} title={product.product_name} body={`$${new Decimal(product.price).toNumber().toFixed(2)}`}>
          <div className="product-extras-container">
            <button onClick={() => onClickButton(product)}>{buttonText}</button>
          </div>
        </Item>
      ))}
    </ItemsList>
  );
}

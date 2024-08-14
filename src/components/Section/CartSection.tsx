import { CartItem, Product } from "../../types";
import { ItemsContainer } from "../ItemsContainer";
import Decimal from 'decimal.js';
import { ItemsList } from "../ItemsList";
import { Item } from "../Item";
import { useMemo } from "react";

type CartSectionProps = {
  cart: CartItem[]
  onClickDecreaseQuantity: (product: Product) => void
  onClickIncreaseQuantity: (product: Product) => void
}

export function CartSection({ cart, onClickDecreaseQuantity, onClickIncreaseQuantity }: CartSectionProps) {
  const getCartTotal = useMemo(() => {
    const total = cart.reduce((acc, cartItem) => {
      return acc.plus(new Decimal(cartItem.quantity).times(cartItem.details.price));
    }, new Decimal(0));

    return total.toDecimalPlaces(2).toNumber().toFixed(2);
  }, [cart]);

  const getTitle = () => {
    return cart.length === 0 ? 'Cart' : `Cart (Total: $${getCartTotal})`
  }

  return (
    <ItemsContainer title={getTitle()}>
      {cart.length === 0 ? <p>The cart is empty</p> : <div>
        <ItemsList>
          {cart.map(cartItem => (
            <Item key={cartItem.id} title={cartItem.details.product_name} body={(
              <p>{`$${new Decimal(cartItem.details.price).toNumber().toFixed(2)}`}</p>
            )}>
              <div className="product-extras-container">
                <p>Quantity:</p>
                <div className="cart-item-quantity-container">
                  <button onClick={() => onClickDecreaseQuantity(cartItem.details)}>{cartItem.quantity === 1 ? 'x' : '-'}</button>
                  <p className="cart-item-quantity">{cartItem.quantity}</p>

                  <button onClick={() => onClickIncreaseQuantity(cartItem.details)}>+</button>
                </div>
              </div>
            </Item>
          ))}
        </ItemsList>
      </div>}
    </ItemsContainer>
  )
}
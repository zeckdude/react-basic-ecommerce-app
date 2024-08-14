
import { useEffect, useState } from "react";
import "./index.css";
import { Product, QUANTITY_DIRECTION } from "../types";
import { FilterSection } from "./Section/FilterSection";
import { ProductsSection } from "./Section/ProductsSection";
import { CartSection } from "./Section/CartSection";
import { useStore } from "../store";

const PRODUCTS_ENDPOINT = 'https://random-data-api.com/api/commerce/random_commerce?size=10'

function StoreContainer() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const cart = useStore((state) => state.cart);
  const setCart = useStore((state) => state.setCart);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(PRODUCTS_ENDPOINT);
      const fetchedProducts = await response.json();
      setProducts(fetchedProducts);
    }

    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  const addOrEditProductInCart = (product: Product, quantity?: number) => {
    const cartItemExists = cart.find(item => item.id === product.id)
    let updatedCart = cart;

    if (cartItemExists) {
      // Remove from cart if quantity is 0
      if (quantity === 0) {
        updatedCart = cart.filter(item => item.id !== product.id)
      } else {
        // Update existing cart item with specified quantity or incremented value
        updatedCart = cart.map(item =>
          item.id === product.id ? { ...item, quantity: quantity || Number(item.quantity) + 1 } : item
        );
      }
    } else {
      // Create a new cart item
      updatedCart = [...cart, {
        id: product.id,
        quantity: 1,
        details: product,
      }]
    }
    setCart(updatedCart)
  }

  const filterByTerm = (term: string) => {
    const list = products.filter(function(product) {
      return product.product_name.toLowerCase().includes(term.toLowerCase());
    });

    setFilteredProducts(term === '' ? [] : list);
  }

  const onUpdateCartItemQuantity = (product: Product, quantityDirection: QUANTITY_DIRECTION) => {
    const cartItem = cart.find(item => item.id === product.id)

    if (cartItem) {
      addOrEditProductInCart(product, quantityDirection === QUANTITY_DIRECTION.DECREASE ? cartItem.quantity - 1 : cartItem.quantity + 1)
    }
  }

  return (
    <div className="store-container">
      <FilterSection products={filteredProducts} onClickProductButton={addOrEditProductInCart} onChangeFilterTerm={filterByTerm} />

      <ProductsSection products={products} onClickProductButton={addOrEditProductInCart} />

      <CartSection cart={cart} onClickDecreaseQuantity={(product) => onUpdateCartItemQuantity(product, QUANTITY_DIRECTION.DECREASE)} onClickIncreaseQuantity={(product) => onUpdateCartItemQuantity(product, QUANTITY_DIRECTION.INCREASE)} />
    </div>
  );
}

export default StoreContainer;

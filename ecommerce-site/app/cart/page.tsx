import { products } from "../product-data";
import CartList from "../CartList";

export default function CartPage() {
  return (
    <div>
      <p>Shopping Cart</p>
      <CartList products={products} />
    </div>
  )
}
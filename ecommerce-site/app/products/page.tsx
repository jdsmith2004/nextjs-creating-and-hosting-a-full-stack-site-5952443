import { products } from "../product-data";
import ProductsList from "../ProductsList";

export default function ProductPage() {
  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
}
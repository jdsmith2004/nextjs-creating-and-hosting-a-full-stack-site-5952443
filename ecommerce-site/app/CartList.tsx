'use client';
import { Product } from "./product-data";
import { useState } from "react";
import Link from "next/link";

export default function CartList({ products }: { products: Product[] }) {
  const [cartIds] = useState(["123", "345"]);
  console.log("Cart Ids: " + [cartIds]);
  console.log('products:' + products);
  const cartProducts = cartIds.map((id) => products.find((p) => p.id === id)!);
  console.log(cartProducts);
  return (
    <div>
      {cartProducts.map((product) => (
        <Link key={product.id} href={"/products/" + product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
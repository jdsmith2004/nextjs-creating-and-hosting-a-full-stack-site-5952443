import { Product } from "./product-data"; // Import the Product interface from product-data.ts
import Link from "next/link";
import Image from "next/image";


export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <Image src={'/' + product.imageUrl} alt={product.name} height={150} width={150} />
        </Link>
      ))}
    </div>
  );
}
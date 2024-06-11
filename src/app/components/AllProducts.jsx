import React from "react";
import { client, urlFor } from "../../../sanity/lib/client";
import Link from "next/link";

const Products = async () => {
  // Sanity query to fetch all products
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  // Debugging logs
  // console.log('Fetched products:', products);

  // Check if products are fetched correctly
  if (!products || products.length === 0) {
    return (
      <div>
        <h1 className="text-4xl font-semibold mb-5">All Products</h1>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-5">All Products</h1>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="card mb-6 card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure className="overflow-hidden">
              <img
                src={urlFor(product.images[0]).url()}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/products/${product._id}`} className="btn btn-primary">
                  Get Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

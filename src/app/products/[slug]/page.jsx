import React from "react";
import { client } from "../../../../sanity/lib/client"; // Adjust path if needed
import SingleProduct from "@/app/components/SingleProduct"; // Adjust path if needed

const ProductPage = async ({ params }) => {
  const {slug} = params;
  console.log(slug);

  const query = `*[_type == "product" && _id == $slug][0]`;
  
  const product = await client.fetch(query, {slug});
  console.log(product);

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>The requested product could not be located.</p>
      </div>
    );
  }

  return (
    <div>
      <SingleProduct product={product} /> 
    </div>
  );
};

export default ProductPage;

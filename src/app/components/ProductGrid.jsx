import React from "react";
import Card from "./Card";
import Link from "next/link";


const ProductGrid = ({ products }) => {
  const sortedProducts = Object.values(products)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <>
    <div className="hidden md:block mt-20">
      <h1 className="text-[3rem] font-semibold">Best Finds This Month</h1>
      <div className="grid md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sortedProducts.map((product, index) => (
          <Card
            key={index}
            name={product.name}
            desc={product.description}
            link={product.link}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn btn-secondary">
          <Link href="/">Show More</Link>
        </button>
      </div>
    </div>

    <div className="flex flex-col md:hidden w-screen m-10">
        <div className="carousel carousel-center rounded-box">
          {sortedProducts.map((product, index) => (
            <div key={index} className="carousel-item">
              <Card
                name={product.name}
                desc={product.description}
                link={product.link}
              />
            </div>
          ))}
        </div>
        <button className="justify-center border-gray-100 w-full border-b pb-5 mt-10">
            <Link href="/" className="btn btn-secondary">Show More</Link>
        </button>
      </div>
    </>
  );
};

export default ProductGrid;

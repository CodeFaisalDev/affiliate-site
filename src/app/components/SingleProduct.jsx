import React from "react";
import { urlFor } from "../../../sanity/lib/client";

const SingleProduct = ({ product }) => {
  // Destructure product data from props (assuming the prop is named "product")
  const { name, description, images, link, ...otherProductData } = product;

  return (
    <div className="product-page">
      <h1>{name}</h1>
      <img src={urlFor(images[0]).url()} alt={name} className="product-image" />
      <p className="product-description">{description}</p>

      {/* Display additional product information (optional) */}
      {link && (
        <div className="product-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Product Details
          </a>
        </div>
      )}
      {Object.keys(otherProductData).length > 0 && (
        <ul className="product-details">
          {Object.entries(otherProductData).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      )}

      {/* Button with link to external URL */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="product-action-button">Visit Website</button>
      </a>
    </div>
  );
};

export default SingleProduct;

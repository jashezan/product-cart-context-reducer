import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductRating from "../components/ProductRating";
import Pricing from "../components/Pricing";
import AddToCart from "../components/AddToCart";

import LoadingSpinner from "../components/LoadingSpinner";

const defaultProduct = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) => {
        if (data) {
          setProduct(data);
          setActiveImg(data.thumbnail);
        }
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  if (!product) {
    return <LoadingSpinner/>
  }

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = product;

  return (
    <div className="w-full px-4 py-8">
      <div className="w-5/6 mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <img
            src={activeImg}
            alt={title}
            className="w-full h-96 rounded-lg mb-4"
          />
          <div className="flex justify-between">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                className="w-1/6 rounded-lg border shadow"
                onClick={() => setActiveImg(image)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-16">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-500 mb-4">{description}</p>
          <div className="mb-4">
            <Pricing discountPercentage={discountPercentage} price={price} />
          </div>
          <div className="mb-4">
            <span className="text-sm text-gray-700">Rating:</span>
            <ProductRating rating={rating} />
          </div>
          <div className="mb-4">
            <span className="text-sm text-gray-500">Brand:</span>
            <span className="ml-1">{brand}</span>
          </div>
          <div className="mb-4">
            <span className="text-sm text-gray-500">Category:</span>
            <span className="ml-1">{category}</span>
          </div>
          <div className="mb-4">
            <span className="text-sm text-gray-500">Stock:</span>
            <span className="ml-1">{stock}</span>
          </div>
          <div className="float-right">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

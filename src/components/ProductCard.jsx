import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";
import AddToCart from "./AddToCart";
import Pricing from "./Pricing";

const defaultProduct = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4,
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

const ProductCard = ({ product = defaultProduct }) => {
  return (
    <div className="w-full max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-2xl hover:scale-105 transition-transform">
      {/* <Link to={`/product/${product.id}`}>
        <img
          className="pb-4 w-full h-64 bg-cover rounded-t-lg"
          src={product.thumbnail}
          alt={product.title}
        />
      </Link> */}
      <div className="px-5 pb-5">
        <Link to={`/product/${product.id}`}>
          <h4 className="text-xl font-semibold tracking-tight text-gray-900 capitalize">
            {product.title}
          </h4>
          <h4 className="text-gray-700">{product.description}</h4>
        </Link>
        <ProductRating rating={product.rating} />
        <div className="flex items-center justify-between">
          <Pricing
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

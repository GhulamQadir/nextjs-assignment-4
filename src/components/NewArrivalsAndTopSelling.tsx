"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface TProduct {
  name: string;
  image: string;
  ratings: number;
  price: number;
  oldPrice?: number;
  discount?: number;
}
interface TProps {
  data: TProduct[];
  categoryName: string;
}
function NewArrivalsAndTopSelling({ data, categoryName }: TProps) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [prodPerPage, setProdPerPage] = useState(data.slice(0, 5));

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= 768) {
      setProdPerPage(data.slice(0, 0 + 2));
    } else {
      setProdPerPage(data.slice(0, 0 + 4));
    }
  }, [screenWidth]);

  const viewAllProducts = () => {
    setProdPerPage(data.slice(0));
  };

  return (
    <div className="mt-12 mb-10 md:mx-7 lg:mx-14 mx-0">
      <p className="text-center text-5xl font-bold mb-6">{categoryName}</p>
      <div className="flex flex-wrap justify-center md:gap-x-5 gap-x-2">
        {prodPerPage.map((item, index) => {
          const { name, image, price, ratings, oldPrice, discount } = item;
          return (
            <div key={index} className="w-[47%] md:w-[23%] lg:w-[20%] mb-6">
              <ProductCard
                name={name}
                image={image}
                price={price}
                rating={ratings}
                oldPrice={oldPrice}
                discount={discount}
              />
            </div>
          );
        })}
      </div>

      {data.length > prodPerPage.length && (
        <div className="text-center mt-2 mb-5">
          <button
            className="w-[218px] h-[52px] border-[1px] rounded-[62px] border-[#0000001A] hover:bg-gray-100"
            onClick={viewAllProducts}
          >
            View all
          </button>
        </div>
      )}
      <hr />
    </div>
  );
}
export default NewArrivalsAndTopSelling;

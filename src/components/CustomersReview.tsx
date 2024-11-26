"use client";
import { useEffect, useState } from "react";
import { reviewsData } from "@/data/data";
import ReactStars from "react-stars";
import { TiTick } from "react-icons/ti";

function CustomersReview() {
  const [reviews, setReviewsOnScreen] = useState(reviewsData.slice(0, 5));
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    if (screenWidth <= 500) {
      setReviewsOnScreen(reviewsData.slice(0, 1));
    } else {
      setReviewsOnScreen(reviewsData.slice(0));
    }
  }, [screenWidth]);

  return (
    <div className="mb-4 w-[95%] md:w-[90%] m-auto px-4">
      <div>
        <p className="md:text-5xl text-3xl font-bold uppercase pt-16 pb-10 mx-20 text-center">
          Our happy customers
        </p>
      </div>
      <div className="flex flex-wrap gap-x-4 justify-center">
        {reviews.map((item, index) => {
          const { name, rating, review } = item;
          return (
            <div
              key={index}
              className="h-[240px] w-[400px] border-[1px] border-[#0000001A] px-5 py-5 rounded-[20px] my-3"
            >
              <ReactStars
                size={25}
                color2={"#ffd700"}
                value={rating}
                count={rating}
              />
              <p className="text-xl font-bold">
                {name}.{" "}
                <span className="bg-[#01AB31] px-[1.5px] py-[1.5px] inline-block rounded-full">
                  <TiTick color="white" size={16} />
                </span>
              </p>
              <p className="text-[#00000099] mt-2">{review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CustomersReview;

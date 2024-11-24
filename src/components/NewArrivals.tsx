"use client";
import { useState, useEffect } from "react";
function NewArrivals() {
  const data = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentProdIndex, setCurrentProdIndex] = useState(0);
  const [prodPerPage, setProdPerPage] = useState(data.slice(0, 5));
  const [lastProdIndex, setLastProdIndex] = useState(0);

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
    const lastProd = prodPerPage.pop();
    if (lastProd) {
      const lastProdIndex = data.indexOf(lastProd);
      setLastProdIndex(lastProdIndex);
      console.log("index=>>", lastProdIndex);
    }
    if (screenWidth <= 768) {
      setProdPerPage(data.slice(currentProdIndex, currentProdIndex + 2));
    } else {
      setProdPerPage(data.slice(currentProdIndex, currentProdIndex + 4));
    }
  }, [screenWidth]);

  const viewAllProducts = () => {
    setProdPerPage(data.slice(0));
  };

  return (
    <div className="text-center m-10">
      <p className="text-6xl font-bold">New Arrivals</p>
      {prodPerPage.map((item, index) => {
        return (
          <div key={index}>
            <p className="text-2xl font-bold">{item}</p>
          </div>
        );
      })}
      <button onClick={viewAllProducts}>View all</button>
    </div>
  );
}
export default NewArrivals;

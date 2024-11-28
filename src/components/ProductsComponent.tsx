"use client";
import { newArrivalsData, topSellingData } from "@/data/data";
import NewArrivalsAndTopSelling from "./NewArrivalsAndTopSelling";

function ProductsComponent() {
  return (
    <div>
      <NewArrivalsAndTopSelling
        data={newArrivalsData}
        categoryName="New Arrivals"
      />
      <NewArrivalsAndTopSelling
        data={topSellingData}
        categoryName="Top Selling"
      />
    </div>
  );
}
export default ProductsComponent;

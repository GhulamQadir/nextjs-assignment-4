"use client";
import Banner from "@/components/Banner";
import BrowseDress from "@/components/BrowseDress";
import CompaniesBar from "@/components/CompaniesBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

import dynamic from "next/dynamic";

const ProductsComponentWithNoSSR = dynamic(
  () => import("../components/ProductsComponent"),
  { ssr: false }
);
const CustomersReviewComponentWithNoSSR = dynamic(
  () => import("../components/CustomersReview"),
  { ssr: false }
);
export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <CompaniesBar />
      <ProductsComponentWithNoSSR />
      <BrowseDress />
      <CustomersReviewComponentWithNoSSR />
      <Footer />
    </div>
  );
}

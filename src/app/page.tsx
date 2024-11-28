import Banner from "@/components/Banner";
import BrowseDress from "@/components/BrowseDress";
import CompaniesBar from "@/components/CompaniesBar";
import CustomersReview from "@/components/CustomersReview";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductsComponent from "@/components/ProductsComponent";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <CompaniesBar />
      <ProductsComponent />
      <BrowseDress />
      <CustomersReview />
      <Footer />
    </div>
  );
}

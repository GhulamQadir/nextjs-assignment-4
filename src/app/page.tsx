import Banner from "@/components/Banner";
import CompaniesBar from "@/components/CompaniesBar";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <CompaniesBar />
    </div>
  );
}

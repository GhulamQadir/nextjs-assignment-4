import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import SearchIcon from "@/assets/search.png";
import ArrowDown from "@/assets/arrow-down.png";
import CartImg from "@/assets/cart.png";
import UserImg from "@/assets/user.png";
import NavIcon from "@/assets/nav_icon.png";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <div className="bg-white md:h-[48px] z-10 sticky custom-small:top-[35px] md:top-[38px] top-[50px] lg:px-[8%] md:px-0 px-2 flex md:justify-around justify-between items-center m-auto py-3 md:py-10 gap-x-8 ">
      <div className="flex items-center">
        <button className="md:hidden ml-1 mr-3">
          <Image alt="nav icon" src={NavIcon} />
        </button>
        <Image
          alt="logo"
          className="md:h-[22px] h-[18px] md:w-[160px] w-[124px]"
          src={Logo}
        />
      </div>
      <div className="md:h-[22px] md:w-[321px] hidden md:flex justify-between gap-x-2">
        <Link href={"#"} className="flex items-center">
          Shop{" "}
          <Image src={ArrowDown} className="h-4 w-4 ml-2" alt="arrow down" />
        </Link>
        <Link href={"#"}>On Sale</Link>
        <Link href={"#"}>New Arrivals</Link>
        <Link href={"#"}>Brands</Link>
      </div>
      <div className="md:h-12 hidden lg:w-[577px] bg-[#F0F0F0] rounded-[62px] px-4 py-3 md:flex items-center">
        <Image src={SearchIcon} alt="search icon" className="h-6 w-6" />
        <input
          type="text"
          className="bg-transparent ml-3 text-base"
          placeholder="Search for products..."
        />
      </div>
      <div className="flex justify-end gap-x-3 lg:gap-x-4">
        <button className="md:hidden">
          <IoSearch fontSize={26} />
        </button>
        <button>
          <Image src={CartImg} alt="cart" className="h-6 w-6" />
        </button>
        <button>
          <Image src={UserImg} alt="user" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
export default Navbar;

import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import Logo from "@/assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ApplePay from "@/assets/apple Pay.png";
import Mastercard from "@/assets/Mastercard.png";
import VisaCard from "@/assets/Visa.png";
import GPay from "@/assets/G Pay.png";

function Footer() {
  return (
    <div className="mt-16 flex flex-col items-center relative">
      <div className="lg:w-[90%] w-[95%] bg-black lg:px-10 py-2 flex flex-wrap md:justify-between justify-center absolute top-[-1%] md:text-start text-center rounded-[20px] mb-10">
        <div className="md:w-[50%] py-5 px-3">
          <p className="md:text-[35px] text-[25px] text-white font-bold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
        </div>
        <div className="md:w-[50%] lg:py-5 py-2 px-3 flex flex-col items-end">
          <div className="md:h-12 h-10 md:w-[349px] w-[311px] mb-3 bg-white rounded-[62px] px-4 py-3 flex items-center gap-x-3">
            <TfiEmail size={18} />
            <input type="text" placeholder="Enter your email address" />
          </div>
          <div className="md:h-12 h-10 md:w-[349px] w-[311px] bg-white rounded-[62px] px-4 py-3 text-center">
            <button className="text-sm font-bold">
              Subscribe to newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F0F0] mt-20 lg:pt-28 md:pt-40 pt-48 w-full lg:px-[75px] md:px-5 px-3 pb-10">
        <div className="flex flex-wrap justify-between gap-x-10">
          <div className="lg:w-[20%] md:w-[35%] w-[50%] mb-5">
            <Image src={Logo} alt="shop.co" />
            <p className="mt-5 text-sm text-[#00000099] leading-[22px]">
              We have clothes that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="flex gap-x-5 mt-4">
              <div className="bg-white px-[6px] py-[6px] rounded-full">
                <FaTwitter size={14} />
              </div>
              <div className="bg-black px-[6px] py-[6px] rounded-full">
                <FaFacebookF size={13} color="white" />
              </div>
              <div className="bg-white px-[6px] py-[6px] rounded-full">
                <FaInstagram size={14} />
              </div>
              <div className="bg-white px-[6px] py-[6px] rounded-full">
                <FaGithub size={14} />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <p className="font-medium uppercase">Company</p>
            <ul className="text-[#00000099] mt-2 leading-relaxed">
              <li>About</li>
              <li>Features</li>
              <li>Work</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="font-medium uppercase">Help</p>
            <ul className="text-[#00000099] mt-2 leading-relaxed">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="mb-5">
            <p className="font-medium uppercase">FAQ</p>
            <ul className="text-[#00000099] mt-2 leading-relaxed">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <p className="font-medium uppercase">resources</p>
            <ul className="text-[#00000099] mt-2 leading-relaxed">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between border-t-[1px] border-[#0000001A] pt-5 mt-5">
          <div className="mb-4">
            <p className="text-[#00000099] text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
          </div>
          <div className="flex gap-x-4">
            <Image
              src={VisaCard}
              alt="visa card"
              className="w-11 h-6 bg-white px-[6px] py-[6px] rounded-lg"
            />
            <Image
              src={Mastercard}
              alt="mastercard"
              className="w-11 h-6 bg-white px-[6px] py-[6px] rounded-lg"
            />
            <Image
              src={ApplePay}
              alt="apple pay"
              className="w-11 h-6 bg-white px-[6px] py-[6px] rounded-lg"
            />
            <Image
              src={GPay}
              alt="g pay"
              className="w-11 h-6 bg-white px-[6px] py-[6px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

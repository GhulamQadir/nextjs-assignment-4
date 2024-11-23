import BannerImg from "@/assets/banner_img.png";
import StartImg from "@/assets/start_img.png";
import Image from "next/image";
function Banner() {
  return (
    <div className="md:h-[700px] w-full bg-[#F2F0F1] pt-5 pl-10 pr-6 flex flex-wrap">
      <div className="md:w-[50%] lg:w-[45%] pt-12 md:text-start text-center">
        <div className="md:pl-10 md:mt-5">
          <p className="font-inter font-extrabold lg:text-[64px] md:text-[55px] text-[40px] md:leading-[64px] leading-[50px]">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </p>
          <p className="text-base font-normal mt-4 text-[#00000099]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="px-[54px] py-4 rounded-[62px] bg-black text-white mt-7">
            Shop Now
          </button>
        </div>
        <div className="flex flex-wrap justify-around mt-12 mb-5">
          <div className="extra-small:border-collapse custom-small:border-r-2 pr-5 mb-2">
            <p className="text-[35px] md:text-[40px] font-bold leading-tight">
              200+
            </p>
            <p className="text-base text-[#00000099]">International Brands</p>
          </div>
          <div className="extra-small:border-r-2 custom-small:border-r-2 sm:border-r-2 pr-5 mb-2">
            <p className="text-[35px] md:text-[40px] font-bold leading-tight">
              2,000+
            </p>
            <p className="text-base text-[#00000099]">High-Quality Products</p>
          </div>
          <div className="mb-2">
            <p className="text-[35px] md:text-[40px] font-bold leading-tight extra-small:pl-5">
              30,000+
            </p>
            <p className="text-base text-[#00000099]">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] lg:w-[55%] relative">
        <div className="absolute lg:top-[44%] lg:left-16 md:top-[35%] md:left-6 left-7 top-[35%]">
          <Image
            src={StartImg}
            alt="star img"
            className="h-10 w-10 md:w-12 md:h-12 lg:h-14 lg:w-14"
          />
        </div>
        <div className="absolute md:top-16 md:right-14 lg:top-20 lg:right-24 right-20 top-16">
          <Image
            src={StartImg}
            alt="star img"
            className="md:w-16 md:h-16 h-12 w-12"
          />
        </div>
        <div className=" p-0 float-left text-start w-full">
          <Image
            alt="bannerImg"
            className="md:h-[680px] sm:h-[550px] h-[410px] w-[100%] md:w-[150%]"
            src={BannerImg}
          />
        </div>
      </div>
    </div>
  );
}
export default Banner;

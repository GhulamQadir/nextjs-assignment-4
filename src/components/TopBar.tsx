import Image from "next/image";
import CrossIcon from "@/assets/cross-icon.png";

function TopBar() {
  return (
    <div className="md:h-[38px] z-10 w-full bg-black content-center sticky top-0 font-inter p-1">
      <div className="inline-block w-[80%] md:h-7 text-center">
        <p className="inline-block text-white text-sm">
          Sign up and get 20% off to your first order.
          <span className="underline underline-offset-[3px] font-medium">
            Sign Up Now
          </span>
        </p>
      </div>
      <div className="inline-block align-middle">
        <Image
          src={CrossIcon}
          alt="cross icon"
          className="mb-2 md:mb-0 h-[20.13px] w-[20.13px] md:ml-28 ml-10"
        />
      </div>
    </div>
  );
}
export default TopBar;

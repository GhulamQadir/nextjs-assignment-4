import VersaceLogo from "@/assets/versace-logo.png";
import GucciLogo from "@/assets/gucci-logo-1 1.png";
import ZaraLogo from "@/assets/zara-logo-1 1.png";
import PradaLogo from "@/assets/prada-logo-1 1.png";
import CalvinLogo from "@/assets/calvin.png";
import Image from "next/image";

function CompaniesBar() {
  return (
    <div className="lg:-h-[122px] w-full flex flex-wrap justify-around items-center bg-black px-2 py-6 gap-x-4">
      <div>
        <Image
          src={VersaceLogo}
          alt="versace"
          className="mb-4 sm:mb-0 h-8 w-28 md:w-auto md:h-auto"
        />
      </div>
      <div>
        <Image
          src={ZaraLogo}
          alt="zara"
          className="mb-4 sm:mb-0 h-8 w-28 md:w-auto md:h-auto"
        />
      </div>
      <div>
        <Image
          src={GucciLogo}
          alt="gucci"
          className="mb-4 sm:mb-0 h-8 w-28 md:w-auto md:h-auto"
        />
      </div>
      <div>
        <Image
          src={PradaLogo}
          alt="prada"
          className="h-8 w-28 md:w-auto md:h-auto"
        />
      </div>
      <div>
        <Image
          src={CalvinLogo}
          alt="calvin"
          className="h-8 w-28 md:w-auto md:h-auto"
        />
      </div>
    </div>
  );
}
export default CompaniesBar;

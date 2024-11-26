import { browseDressData } from "@/data/data";
import Image from "next/image";

function BrowseDress() {
  return (
    <div className="text-center flex justify-center">
      <div className="w-[95%] lg:w-[90%] bg-[#F0F0F0] px-5 md:px-10 py-10 mx-5 md:mx-16 rounded-xl content-center">
        <p className="font-bold text-3xl md:text-5xl text-center mb-6 uppercase">
          Browse By dress style
        </p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
          {browseDressData.map((item, index) => {
            const { image, categName, width } = item;
            return (
              <div key={index} className={`relative`}>
                <div className="absolute top-3 left-5">
                  <p className="text-2xl font-bold">{categName}</p>
                </div>
                <Image
                  className={`rounded-xl w-[500px] h-44`}
                  priority
                  src={image}
                  alt={categName}
                  height={200}
                  width={200}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default BrowseDress;

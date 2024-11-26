import Image from "next/image";
import ReactStars from "react-stars";

function ProductCard({
  name,
  image,
  price,
  rating,
  oldPrice,
  discount,
}: {
  name: string;
  image: string;
  price: number;
  rating: number;
  oldPrice?: number;
  discount?: number;
}) {
  return (
    <div className="h-[330px] lg:h-[370px]">
      <Image
        src={image}
        alt="prod img"
        className="w-full h-[200px] lg:h-[250px] rounded-xl"
        width={300}
        height={400}
      />
      <div className="md:py-2 py-1">
        <p className="text-lg font-bold mt-4">{name}</p>
        <div className="flex items-center">
          <ReactStars
            size={20}
            color2={"#ffd700"}
            count={rating}
            value={rating}
          />
          <span className="ml-2 text-sm">
            {rating}/<span className="text-gray-500">5</span>
          </span>
        </div>
        <div className="flex gap-x-3 items-center h-7">
          <p className="leading-4 text-[24px] font-bold">${price}</p>
          {oldPrice && (
            <p className="leading-4 text-xl font-bold text-[#00000066] line-through decoration-[#00000066]">
              ${oldPrice}
            </p>
          )}
          {discount && (
            <div className="bg-[#FF33331A] md:px-[14px] px-[11px] py-1 rounded-[62px]">
              <p className="text-[#FF3333] text-xs">-{discount}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

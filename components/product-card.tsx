import Image from "next/image";
import clsx from "clsx";

interface Props {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  gender: "Men" | "Women";
}

const ProductCard = ({ id, name, price, imageURL, gender }: Props) => {
  return (
    <article
      className={clsx(
        "flex flex-col gap-y-4 shadow-product-card h-96 w-96 p-6 rounded-lg",
        gender === "Men" ? "bg-blue-300" : "bg-pink-300"
      )}
    >
      <div className="relative flex-1 rounded-md">
        <Image
          src={imageURL}
          alt="name"
          fill
          priority
          className="aspect-square rounded-md"
        />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-lg uppercase">{name}</h2>
          <p className="text-md text-gray-600 font-semibold">₹{price}</p>
        </div>

        <div>
          <button className="bg-white text-black font-bold border-black border-2 uppercase text-lg px-4 py-1 rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

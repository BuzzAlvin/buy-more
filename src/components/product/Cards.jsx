import Button from "../ui/Button";
import { FavoriteBorder, Star } from "@mui/icons-material";
import { useCart } from "../../context/CartContext";

export default function Cards({
  title,
  price,
  category,
  image,
  rating,
  stock,
  item,
}) {
  const { addToCart } = useCart();

  return (
    <div className="relative flex flex-col border border-gray-400 rounded-xl cursor-pointer h-full">
      <button className="absolute top-2 right-3 flex items-center justify-center bg-white rounded-full sm:w-10 sm:h-10 w-6 h-6 shadow-lg hover:scale-105 transition cursor-pointer">
        <FavoriteBorder fontSize="inherit" sx={{ color: "#059669" }} />
      </button>
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="rounded-t-xl w-full h-full object-cover "
        />
      </div>

      {/* aspect-3/4 sm:aspect-4/5 lg:aspect-square */}
      <div className="text-gray-900 px-3 py-2 space-y-1 grow">
        <h4 className="font-medium text-sm sm:text-base lg:text-lg leading-tight line-clamp-2">
          {title}
        </h4>
        <div className="flex justify-between gap-3">
          <div className="text-emerald-600 font-semibold text-sm sm:text-base lg:text-xl">
            ${price}
          </div>
          <div className="flex items-center text-sm sm:text-base lg:text-lg px-1 text-orange-400 bg-gray-200 rounded-sm">
            <Star fontSize="inherit" />
            <span className="text-gray-500 text-xs sm:text-md">{rating}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-24 sm:w-36 lg:w-40 my-0">
          <Button variant="signIn" onClick={() => addToCart(item)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

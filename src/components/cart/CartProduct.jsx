import { Add, Remove, DeleteOutline } from "@mui/icons-material";
import { useCart } from "../../context/CartContext";

export default function CartProduct({ title, price, image, item, size }) {
  const { decreaseQuantity, increaseQuantity, deleteFromCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-lg sm:px-4 sm:py-3 px-5 py-5 mb-2">
      <div className="flex flex-col sm:flex-row items-center gap-4 mx-5">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 sm:w-32 sm:h-32 object-cover hover:scale-105 transition"
        />
        <div className="">
          <p className="font-semibold mb-1 ms-auto ">{title}</p>

          <div>
            <p className="text-sm text-slate-500 mt-3">Size: {size}</p>
            <p className="text-sm text-slate-500 mt-3">Color:</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="flex items-center justify-center border border-gray-300 h-5 w-5 sm:h-7 sm:w-7 outline-none rounded-lg text-gray-900 text-md shadow-lg hover:bg-gray-200 cursor-pointer"
          >
            <Remove fontSize="inherit" />
          </button>
          <span className="text-sm sm:text-md">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="flex items-center justify-center border border-gray-300 h-5 w-5 sm:h-7 sm:w-7 outline-none rounded-lg text-gray-900 text-md shadow-lg hover:bg-gray-200 cursor-pointer"
          >
            <Add fontSize="inherit" />
          </button>
        </div>

        <span className="font-semibold text-md sm:text-base lg:text-xl">
          ${price}
        </span>

        <button
          className="text-xl sm:text-2xl lg:text-3xl text-emerald-600 cursor-pointer"
          onClick={() => deleteFromCart(item.id)}
        >
          <DeleteOutline fontSize="inherit" />
        </button>
      </div>
    </div>
  );
}

import { ShoppingCart } from "@mui/icons-material";
import Button from "../ui/Button";

export default function EmptyCart() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center py-12">
        <div className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px]  text-gray-500">
          <ShoppingCart fontSize="inherit" />
        </div>
        <h3 className="mt-4 text-sm sm:text-md lg:text-lg font-medium text-gray-900">
          Your cart is empty
        </h3>
        <p className="mt-2 text-sm sm:text-md lg:text-lg text-gray-500">
          Start shopping to add items to your cart.
        </p>
        <div className="flex justify-center items-center w-40 sm:w-48 lg:w-58 cursor-pointer">
          <Button to="/store">Continue Shopping</Button>
        </div>
      </div>
    </section>
  );
}

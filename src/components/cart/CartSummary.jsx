import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";

export default function CartSummary() {
  const { totalPrice, totalItems, shippingFee } = useCart();
  return (
    <>
      <div className="border border-gray-300 rounded-lg md:py-4 sm:px-4 px-2 py-3 max-h-96">
        <h4 className="font-bold text-xl text-start">Order Summary</h4>
        <div className="flex justify-between items-center mt-5">
          <p className="lg:text-md sm:text-sm text-xs">Total items:</p>
          <p className="lg:text-lg sm:text-md text-sm font-bold">
            {totalItems}
          </p>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className="lg:text-md sm:text-sm text-xs">Shipping Cost:</p>
          <p className="lg:text-lg sm:text-md text-sm font-bold">
            {shippingFee === 0 ? "Free" : `$${shippingFee}`}
          </p>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className="lg:text-md sm:text-sm text-xs">Subtotal:</p>
          <p className="lg:text-lg sm:text-md text-sm font-bold">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center my-4 px-4">
          <span className="flex-1 h-px bg-gray-500"></span>
        </div>
        <div>
          <Button variant="signIn">Checkout</Button>
        </div>
      </div>
    </>
  );
}

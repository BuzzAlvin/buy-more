import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import CartProduct from "../components/cart/CartProduct";
import CartSummary from "../components/cart/CartSummary";
import Footer from "../components/layout/Footer";
import EmptyCart from "../components/cart/EmptyCart";

export default function Cart() {
  const { cartCount } = useCart();

  const isEmpty = cartCount.length === 0;

  return (
    <main className="mt-14.5 md:mt-16 lg:mt-23 flex flex-col grow min-h-screen">
      <div className="px-1 sm:px-5 md:10 lg:px-20">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-gray-900 lg:text-3xl md:text-2xl sm:text-xl text-lg  lg:my-8 sm:my-4 my-3">
            Shopping Cart
          </h1>
          {!isEmpty && <Link className="underline hover:text-emerald-700 sm:text-md text-xs" to="/store">Continue Shopping</Link>}
        </div>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="grid md:grid-cols-10 gap-3 items-start justify-center">
            <div className="md:col-span-7 flex-col gap-4">
              {cartCount.map((item) => (
                <CartProduct
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  item={item}
                  size={item.size}
                />
              ))}
            </div>
            <div className="col-span-3 md:sticky md:top-24">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

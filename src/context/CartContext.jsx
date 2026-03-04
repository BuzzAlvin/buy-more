import { useState, useContext, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState([]);
  const [favorite, setFavorite] = useState(false);

  function addToCart(product) {
    setCartCount((items) => {
      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...items,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function increaseQuantity(id) {
    setCartCount((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCartCount((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  const totalPrice = cartCount.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalItems = cartCount.reduce((sum, item) => sum + item.quantity, 0);

  const shippingFee = totalPrice <= 100 ? 0 : 10;

  function deleteFromCart(id) {
    setCartCount((items) => items.filter((item) => item.id !== id));
  }

/*   function favorite() {
    setFavorite(prev => !prev)
  } */

  return (
    <CartContext.Provider
      value={{
        cartCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
        shippingFee,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

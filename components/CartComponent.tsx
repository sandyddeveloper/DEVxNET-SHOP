import { useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    image:
      "https://img.freepik.com/premium-photo/wireless-headphones-hd-8k-wallpaper-stock-photographic-image_853645-35557.jpg",
    price: 150,
    quantity: 1,
  },
  {
    id: 2,
    name: "Smart Watch",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/11/CS/FW/VL/15119067/41crkwnji4l-500x500.jpg",
    price: 200,
    quantity: 2,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
        Your Shopping Cart
      </h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Cart Items */}
          <div className="col-span-1 md:col-span-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-700">
              Items in Your Cart
            </h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center mb-3 md:mb-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    className="px-2 py-1 md:px-3 md:py-1 bg-gray-200 rounded-lg text-gray-700 font-bold hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold text-gray-800 text-sm md:text-base">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="px-2 py-1 md:px-3 md:py-1 bg-gray-200 rounded-lg text-gray-700 font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded-lg text-sm md:text-base transition-colors duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="col-span-1 md:col-span-4 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-700">
              Order Summary
            </h2>
            <div className="mb-4">
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-800">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-gray-800">$10.00</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-base md:text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>${(calculateTotal() + 10).toFixed(2)}</span>
              </div>
            </div>
            <button className="bg-green-600 text-white w-full py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 text-sm md:text-base">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-12">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

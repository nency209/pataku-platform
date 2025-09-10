"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { removeFromCart, updateQuantity, clearCart } from "@/redux/cartslice";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [localQuantities, setLocalQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.slug] = item.quantity;
      return acc;
    }, {} as Record<string, number>)
  );

  if (cart.length === 0) return <p className="p-10">Your cart is empty.</p>;

  const handleUpdateCart = () => {
    Object.entries(localQuantities).forEach(([slug, qty]) => {
      dispatch(updateQuantity({ slug, quantity: qty }));
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>

      <table className="w-full border border-color">
        <thead>
          <tr className="border text-muted font-rubik">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.slug}-${item.selectedSize || ""}-${item.selectedColor || ""}`} className="border text-center">
              <td className="p-2 border">
                <img src={item.image} alt={item.name} className="w-28 mx-auto" />
              </td>
              <td className="p-2 border text-left">
                <p className="font-medium">{item.name}</p>
                {item.selectedSize && (
                  <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                )}
                {item.selectedColor && (
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    Color:{" "}
                    <span
                      className="w-4 h-4 inline-block border"
                      style={{ backgroundColor: item.selectedColor }}
                    />
                  </p>
                )}
              </td>
              <td className="p-2 border">${item.price.toFixed(2)}</td>
              <td className="p-2 border">
                <input
                  type="number"
                  min="1"
                  value={localQuantities[item.slug] || item.quantity}
                  onChange={(e) =>
                    setLocalQuantities({
                      ...localQuantities,
                      [item.slug]: parseInt(e.target.value) || 1,
                    })
                  }
                  className="w-16 border text-center"
                />
              </td>
              <td className="p-2 border">
                ${(item.price * (localQuantities[item.slug] || item.quantity)).toFixed(2)}
              </td>
              <td className="p-2 border">
                <Button variant="black" size="lg"
                  onClick={() =>
                    dispatch(
                      removeFromCart({
                        slug: item.slug,
                        size: item.selectedSize,
                        color: item.selectedColor,
                      })
                    )
                  }
                  className="text-red-500"
                >
                  ❌
               </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Actions */}
      <div className="flex gap-4 mt-4">
        <Button variant="black" size="lg" onClick={handleUpdateCart} >
          Update Cart
       </Button>
        <Link href="/" className="bg-black text-white px-4 py-2">
          Continue Shopping
        </Link>
        <Button variant="black" size="lg" onClick={() => dispatch(clearCart())} >
          Clear Cart
       </Button>
      </div>

      {/* Totals */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6  mt-10 ">
        <div >
          <h2 className="text-lg font-semibold mb-2">Get shipping estimates</h2>
          <select className="w-56 border px-2 py-1 mb-2 mx-2">
            <option>---</option>
            <option>USA</option>
            <option>India</option>
            <option>UK</option>
          </select>
          <input type="text" placeholder="Zip/Postal Code" className="w-52 border px-2 py-1 mb-2" />
          <Button variant="black" size="lg" >Calculate shipping</Button >
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Cart Totals</h2>
          <table className="w-full border">
            <tbody>
              <tr>
                <td className="p-2 border">Subtotal</td>
                <td className="p-2 border">${total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="p-2 border">Total</td>
                <td className="p-2 border">${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <Button variant="black" size="lg"
            onClick={() => router.push("/Checkout")}
            className="mt-4"
          >
            Proceed to Checkout
         </Button>
        </div>
      </div>
    </div>
  );
}

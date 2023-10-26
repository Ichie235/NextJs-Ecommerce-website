import { getCart } from "@/lib/db/cart";
import type { Metadata } from "next";
import CartEntry from "./CartEntry";

export const metadata: Metadata ={
    title: "Your Cart- Choice-Mega"
}

export default async function CartPage() {
    const cart = await getCart()
  return (
    <div>
      {' '}
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map(cartItem =>(
     <CartEntry  cartItem={cartItem} key={cartItem.id}/>
      ))}
    </div>
  );
}

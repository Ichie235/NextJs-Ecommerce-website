import { getCart } from '@/lib/db/cart';
import type { Metadata } from 'next';
import CartEntry from './CartEntry';
import { setProductQuantity } from './actions';
import { formatPrice } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Your Cart- Choice-Mega',
};

export default async function CartPage() {
  const cart = await getCart();
  return (
    <div>
      {' '}
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your cart is empty.</p>}
      <div className="flex flex-col item-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className=" btn btn-primary sm:w-[250px]">CHECK-OUT</button>
      </div>
    </div>
  );
}

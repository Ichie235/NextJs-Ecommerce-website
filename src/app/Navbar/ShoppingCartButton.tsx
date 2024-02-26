'use client';
import { ShoppingCart } from '@/lib/db/cart';
import { formatPrice } from '@/lib/format';
import Link from 'next/link';

interface ShoppingCartButtonprops {
  cart: ShoppingCart | null;
}
export default function ShoppingCartButton({ cart }: ShoppingCartButtonprops) {
  function closeDropdown() {
    const element = document.activeElement as HTMLElement;
    if (element) {
      element.blur();
    }
  }
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4a2 2 0 012-2h14a2 2 0 012 2V9a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm5 14a1 1 0 01-2 0 1 1 0 012 0zm8 0a1 1 0 01-2 0 1 1 0 012 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{cart?.size || 0} items</span>
          <span className="text-info">
            Subtotal : {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link
              href="/Cart"
              className="btn btn-primary btn-block"
              onClick={closeDropdown}
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

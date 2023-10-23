'use client';

import { useState, useTransition } from 'react';

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCartButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) {
  //this takes care of handling error and state properly because we are calling server action in client component
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-primary" onClick={() => {
        setSuccess(false)
        startTransition(async()=> {
          await incrementProductQuantity(productId)
          setSuccess(true)
        })
      }}>
        {' '}
        Add to Cart
      </button>
      {isPending && <span className='loading loading-spinner loading-md'></span>}
      {!isPending && success && <span className='text-warning'>Added to Cart</span>}
    </div>
  );
}

'use client';

// import { experimental_useFormStatus as useFormStatus } from 'react-dom';

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  //   const { pending } = useFormStatus();

  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-primary" onClick={() => {}}>
        {' '}
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h21.4 2M7 13h1014-8H5.4M7 13L5.4 5M7 131-2.293 2.29 "
          />
        </svg>
      </button>
    </div>
  );
}

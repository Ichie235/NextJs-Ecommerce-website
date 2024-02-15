'use client';

import { ComponentProps } from 'react';
// import {experimental_useFormStatus as useFormStatus } from 'react-dom';
import { useFormContext } from 'react-hook-form';



type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'button'>;

export default function FormSubmitButton({
  children,
  className,
  style,
  ...props
}: FormSubmitButtonProps) {
  const { formState: { isSubmitting } } = useFormContext();

  return (
    <button 
      {...props}
      className={`btn btn-primary ${className}`}
      style={style}
      type="submit"
      disabled={isSubmitting}
    >
     {isSubmitting && <span className='loading loading-spinner'></span>}
     {children}
    </button>
  );
}

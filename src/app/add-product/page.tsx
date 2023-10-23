import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import FormSubmitButton from '../../components/formSubmitButton';

export const metadata = {
  title: 'Add Product - Choice-Mega',
};

/*this is a server endpoint to make request from without having to set-up an api 
endpoint and converting the current work file to "user client" */
async function addProduct(formData: FormData) {
  'use server';
  const name = formData.get('name')?.toString();
  const description = formData.get('description')?.toString();
  const imageUrl = formData.get('imageUrl')?.toString();
  const price = Number(formData.get('price') || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error('Missing required input field');
  }
  await prisma.product.create({ data: { name, description, imageUrl, price } });
  redirect('/');
}
const AddProductPage = () => {
  return (
    <div className="">
      <h1 className="mb-3 font-bold text-lg "> Add Products</h1>
      <form action={addProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product-Name"
          className="input-bordered input mb-3 w-full"
          required
        />
        <textarea
          name="description"
          placeholder="description"
          id=""
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          type="url"
          name="imageUrl"
          placeholder="Product-ImageUrl"
          className="input-bordered input mb-3 w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Product-Price"
          className="input-bordered input mb-3 w-full"
          required
        />
        <FormSubmitButton className=" btn-block">Add Product </FormSubmitButton>
      </form>
    </div>
  );
};

export default AddProductPage;

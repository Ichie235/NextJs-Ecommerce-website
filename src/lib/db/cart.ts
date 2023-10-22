import { prisma } from "./prisma";
import { cookies } from "next/dist/client/components/headers";
import bcrypt from "bcryptjs"; // Import bcryptjs


export async function getCart(){
    const localCartId = cookies().get("localCartId")?.value
    
}
export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });

  const encryptedCartId = await bcrypt.hash(newCart.id.toString(), 10);

  cookies().set("localCartId", encryptedCartId);

}

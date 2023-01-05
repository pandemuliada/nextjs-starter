import Button from "@/components/ui/Button";
import dummyProducts from "@/data/dummy-products";
import Image from "next/image";
import { useState } from "react";

const CartContainer = () => {
  const [products, setProducts] = useState(dummyProducts);

  return (
    <div
      className="flex flex-col justify-between overflow-y-auto pb-8"
      style={{ height: "calc(100% - 50px)" }}
    >
      <div className="pt-8 px-8">
        {products.map((product) => (
          <div key={product.id} className="flex mb-5">
            <div className="flex-none w-20 h-20 rounded-lg relative overflow-hidden border">
              {product.thumbnail && (
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="w-full h-full object-cover block"
                />
              )}
            </div>
            <div className="pl-4 w-full">
              <p className="font-semibold">{product.title}</p>
              <p className="text-sm font-medium">${product.price}</p>
              <p className="text-sm">Qty : 1</p>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 right-0 w-[350px] px-8 pb-8 pt-4 bg-white border-t">
        <div className="flex justify-between">
          <p className="mb-3">Total</p>
          <strong>$5000</strong>
        </div>

        <Button block>Checkout</Button>
      </div>
    </div>
  );
};

export default CartContainer;

import Button from "@/components/ui/Button";
import dummyProducts from "@/data/dummy-products";
import { useState } from "react";

const CartContainer = () => {
  const [products, setProducts] = useState(dummyProducts);

  return (
    <div
      className="flex flex-col justify-between"
      style={{ height: "calc(100% - 50px)" }}
    >
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>

      <Button block>Checkout</Button>
    </div>
  );
};

export default CartContainer;

import Markdown from "@/components/Markdown";
import Button from "@/components/ui/Button";
import Layout from "layouts";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";

const ProductDetailPage = () => {
  const router = useRouter();
  const { product_id } = router.query;
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (product_id) {
      fetch(`https://dummyjson.com/products/${product_id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProduct(data);
        });
    }
  }, [product_id]);

  return (
    <Layout.Ecommerce>
      <section className="py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div className="">
            <div className="w-full h-full relative rounded-xl overflow-hidden">
              <img
                alt={product?.title}
                src={product?.thumbnail}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex mt-7 overflow-x-auto max-w-screen">
              {product.images?.map((image) => (
                <div
                  key={image}
                  className="w-20 h-20 relative mr-5 last:mr-0 rounded-xl overflow-hidden border"
                >
                  <Image src={image} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="pt-28 md:pt-10">
            <div className="flex">
              <span className="cursor-pointer capitalize p-2 px-4 border border-primary rounded-full inline-block text-sm mb-2">
                {product?.category}
              </span>
              <div className="mb-3 flex items-center ml-3 mt-2">
                <span className="text-primary mr-2 pb-1">
                  <IoStar />
                </span>
                <span>{product.rating}</span>
              </div>
            </div>
            <h1 className="text-5xl font-medium mb-3">{product?.title}</h1>
            <strong className="text-primary text-3xl block mb-2">
              ${product?.price}
            </strong>

            <div className="border-t py-6 mt-6">
              <h2 className="font-bold mb-3">About Product</h2>
              <Markdown content={product.description} />
            </div>

            <div className="border-t py-6">
              <h2 className="font-bold mb-3">Color</h2>
              {["Black", "White"].map((color) => (
                <button
                  key={color}
                  type="button"
                  className="border px-3 py-2 rounded-lg mr-3 last:mr-0"
                >
                  {color}
                </button>
              ))}
            </div>

            <div className="border-t flex py-6">
              <Button block className="mr-4 md:mr-8">
                Add to Cart
              </Button>
              <Button block outline>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout.Ecommerce>
  );
};

export default ProductDetailPage;

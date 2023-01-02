import Layout from "layouts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Eccomerce = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data.products);
      });
  }, []);

  return (
    <Layout.Landing>
      <section id="hero" className="bg-gray-300 min-h-[600px]">
        <div className="container mx-auto"></div>
      </section>
      <section className="py-12">
        <h2 className="text-primary text-4xl font-bold text-center mb-2">
          Our Products
        </h2>
        <p className="text-center mb-12">
          Beautiful curated products only for you
        </p>
        <div className="container mx-auto grid md:grid-cols-4 gap-x-8 gap-y-10">
          {products.map((product) => {
            return (
              <Link key={product.id} href={`/ecommerce/products/${product.id}`}>
                <div className="rounded-xl p-5 border border-transparent hover:border-primary transition-all">
                  <div className="h-[300px] relative mb-3">
                    {product.images[0] && (
                      <Image
                        src={product.images[0]}
                        fill
                        className="object-cover rounded-xl"
                      />
                    )}
                  </div>
                  <h4>{product.title}</h4>
                  <p className="text-primary">${product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout.Landing>
  );
};

export default Eccomerce;

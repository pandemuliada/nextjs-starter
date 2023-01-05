import Markdown from "@/components/Markdown";
import Layout from "@/layouts";
import Image from "next/image";
import { useEffect, useState } from "react";

const PortfolioPage = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.yellotek.com/api/recent-works?populate%5B0%5D=image&populate%5B1%5D=portofolio_categories&populate%5B2%5D=portofolio_categories.color&populate%5B3%5D=color&populate%5B4%5D=%2A&sort%5B0%5D=id&pagination%5Bpage%5D=1&pagination%5BpageSize%5D=25"
    )
      .then((res) => res.json())
      .then((res) => setWorks(res.data));
  }, []);

  return (
    <Layout.Landing>
      <section className="py-20">
        <div className="container mx-auto">
          <span className="text-2xl block mb-2">Portfolio</span>
          <h1 className="text-5xl font-medium leading-tight max-w-[600px]">
            At Yello, we bring your best ideas to life
          </h1>

          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {works.map((work) => (
              <div
                key={work.id}
                className="group rounded-xl relative"
                style={{
                  background: work?.attributes?.color?.data?.attributes?.code,
                }}
              >
                <Image
                  fill
                  src={work?.attributes?.image?.data?.attributes?.url}
                  alt={work?.attributes?.name}
                  className="w-full h-full object-contain p-10"
                />
                <div
                  className="relative h-full rounded-xl opacity-0 group-hover:opacity-100 transition-all flex items-start p-8"
                  style={{
                    background: work?.attributes?.color?.data?.attributes?.code,
                  }}
                >
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {work?.attributes?.name}
                    </h3>
                    <div className="text-white">
                      <Markdown content={work?.attributes?.short_description} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout.Landing>
  );
};

export default PortfolioPage;

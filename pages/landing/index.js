import Button from "@/components/ui/Button";
import Layout from "layouts";

const Homepage = () => {
  return (
    <Layout.Landing>
      <section id="hero" className="min-h-[600px] flex items-center py-8">
        <div className="container mx-auto grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl leading-normal font-bold mb-6">
              Yello gives small to midsize businesses access to world class
              software & design
            </h1>

            <Button size="lg">Consult with Our Experts</Button>
          </div>
          <div>
            <div className="w-full h-[500px]">
              <img
                src="/images/teamwork.svg"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout.Landing>
  );
};

export default Homepage;

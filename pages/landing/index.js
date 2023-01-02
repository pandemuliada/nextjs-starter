import ContactForm from "@/components/forms/ContactForm";
import Button from "@/components/ui/Button";
import Layout from "layouts";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

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

            <Button size="lg" href="/landing#contact">
              Consult with Our Experts
            </Button>
          </div>
          <div>
            <div className="relative w-full h-[450px] md:h-[600px]">
              <Image
                fill
                src="/images/teamwork.svg"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-20 bg-primary">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-5">
            Our Service
          </h2>
          <p className="text-center text-white mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "Web & Mobile Development",
              "Web3 Development",
              "Database, Server & API",
              "Branding & Design",
            ].map((service) => (
              <div key={service} className="bg-white shadow p-5 rounded-xl">
                <div className="md:hidden w-8 aspect-square bg-primary rounded-lg mb-2" />

                <h3 className="text-lg md:text-2xl font-medium leading-relaxed min-h-[80px]">
                  {service}
                </h3>
                <p className="text-gray-600">
                  We provide fast, reliable, and secure mobile and web
                  applications.
                </p>

                <div className="hidden md:flex mt-8">
                  <Button>
                    <span className="mr-2">Learn More</span>
                    <IoChevronForward size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden flex justify-center mt-8">
            <Button>Learn More</Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto">
          <h2 className="text-5xl font-medium max-w-[500px] mb-8">
            That’s enough about us, let’s talk about you.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="md:max-w-[450px] w-full">
              <ContactForm />
            </div>
            <div>
              <div className="hidden md:block relative w-full h-[300px] md:h-[500px]">
                <Image
                  fill
                  src="/images/lady-working.svg"
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout.Landing>
  );
};

export default Homepage;

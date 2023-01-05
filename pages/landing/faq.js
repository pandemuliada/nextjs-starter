import ContactForm from "@/components/forms/ContactForm";
import Markdown from "@/components/Markdown";
import Collapsible from "@/components/ui/Collapsible";
import Layout from "@/layouts";
import { useEffect, useState } from "react";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.yellotek.com/api/faqs?populate%5B0%5D=%2A&sort%5B0%5D=id&pagination%5Bpage%5D=1&pagination%5BpageSize%5D=25"
    )
      .then((res) => res.json())
      .then((res) => setFaqs(res.data));
  }, []);

  return (
    <Layout.Landing>
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-medium text-center text-primary">
            Yello help center
          </h1>
          <p className="text-center max-w-[600px] mx-auto mt-6">
            Our team of experts will guide you throughout the design and
            development process. From how to get started with a project to
            Yello-related inquiries, we'll get your questions answered.
          </p>

          <div className="max-w-[800px] mx-auto mt-12">
            <Collapsible>
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <Collapsible.Item
                    id={faq.attributes.title}
                    label={faq.attributes.title}
                    className="mb-5"
                  >
                    <div className="pt-5">
                      <Markdown content={faq.attributes.content} />
                    </div>
                  </Collapsible.Item>
                </div>
              ))}
            </Collapsible>
          </div>
        </div>
      </section>
    </Layout.Landing>
  );
};

export default FAQPage;

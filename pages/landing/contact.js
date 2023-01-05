import ContactForm from "@/components/forms/ContactForm";
import Layout from "@/layouts";

const ContactPage = () => {
  return (
    <Layout.Landing>
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-medium text-center text-primary">
            Say Hello
          </h1>
          <p className="text-center max-w-[600px] mx-auto mt-6">
            We are always happy to make new friends. For all enquiries in
            regards to our services, please use the form below.
          </p>

          <div className="max-w-[600px] mx-auto mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout.Landing>
  );
};

export default ContactPage;

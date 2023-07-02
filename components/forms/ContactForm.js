import { Input } from "@/components/ds/form";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/ds/Button";
import Modal from "@/components/ds/Modal";
import { useState } from "react";

const validationSchema = object({
  name: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  message: string().required("Required"),
});

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "Pande Muliada",
      email: "pandemuliada@gmail.com",
      message: "You're awesome!",
    },
  });

  const [success, setSuccess] = useState(false);

  const onCommitSubmit = (values) => {
    console.log(values);
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit(onCommitSubmit)}>
      <div className="mb-5">
        <label htmlFor="name" className="label mb-2">
          Full name*
        </label>
        <Input.Text
          placeholder="Your full name"
          name="name"
          id="name"
          error={errors.name}
          register={register}
        />
        <small className="error-text mt-1">{errors.name?.message}</small>
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="label mb-2">
          Email*
        </label>
        <Input.Text
          block
          placeholder="Your email"
          name="email"
          id="email"
          error={errors.email}
          register={register}
        />
        <small className="error-text mt-1">{errors.email?.message}</small>
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="label mb-2">
          Message*
        </label>
        <Input.Textarea
          placeholder="Your message"
          name="message"
          id="message"
          error={errors.message}
          register={register}
        />
        <small className="error-text mt-1">{errors.message?.message}</small>
      </div>

      <Button type="submit" size="lg">
        Send Message
      </Button>

      <Modal
        variant="centered"
        show={success}
        onClose={() => setSuccess(false)}
      >
        <div className="w-[300px]">
          <h6 className="text-2xl font-medium mb-3">Success</h6>
          <p className="text-gray-500 mb-5">
            Your message has been sent successfully
          </p>

          <Button block onClick={() => setSuccess(false)}>
            Okay
          </Button>
        </div>
      </Modal>
    </form>
  );
};

export default ContactForm;

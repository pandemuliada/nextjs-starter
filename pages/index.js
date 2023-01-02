import Head from "next/head";
import Image from "next/image";
import toast from "react-hot-toast";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import Toast from "@/components/ui/Toast";
import Drawer from "@/components/ui/Drawer";
import Button from "@/components/ui/Button";
import {
  Checkbox,
  CustomSelect,
  DefaultSelect,
  Input,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Textarea from "@/components/ui/form/Textarea";
import FileUploader from "@/components/ui/form/FileUploader";
import DatePicker from "@/components/ui/form/DatePicker";

const options = [
  { label: "Label 1", value: 1 },
  { label: "Label 2", value: 2 },
];

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showScrollableModal, setShowScrollableModal] = useState(false);
  const [showCenteredModal, setShowCenteredModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hookForm = useForm();

  return (
    <div>
      <Head>
        <title>NextJS Starter</title>
        <meta name="description" content="Dead simple UI components library" />
      </Head>

      <div className="grid grid-cols-2 p-8 gap-12">
        <div className="border rounded-md p-5">
          <h2 className="text-3xl mb-5">Toast</h2>

          <button
            className="bg-gray-200 p-3 rounded mr-5"
            onClick={() => {
              Toast.success("Data has been saved");
            }}
          >
            Custom Success Toast
          </button>
          <button
            className="bg-gray-200 p-3 rounded mr-5"
            onClick={() => {
              toast.success("Default success toast");
            }}
          >
            Default Success Toast
          </button>
        </div>
        <div className="border rounded-md p-8">
          <h2 className="text-3xl mb-5">Drawer & Modal</h2>

          <button
            className="bg-gray-200 p-3 rounded mr-5"
            onClick={() => setShowDrawer(true)}
          >
            Show Drawer
          </button>
          <Drawer show={showDrawer} onClose={() => setShowDrawer(false)}>
            <button onClick={() => setShowDrawer(false)}>Exit</button>
          </Drawer>

          <button
            className="bg-gray-200 p-3 rounded mr-5"
            onClick={() => setShowScrollableModal(true)}
          >
            Show Scrollable Modal
          </button>
          <Modal
            scrollable
            show={showScrollableModal}
            onClose={() => setShowScrollableModal(false)}
          >
            <div className="w-[650px] h-[1200px] p-6">
              <h2 className="font-bold">Scrollable Modal</h2>
            </div>
          </Modal>

          <button
            className="bg-gray-200 p-3 rounded mr-5"
            onClick={() => setShowCenteredModal(true)}
          >
            Show Centered Modal
          </button>
          <Modal
            centered
            show={showCenteredModal}
            onClose={() => setShowCenteredModal(false)}
            className="mt-8"
          >
            <div className="w-[650px] h-[500px] p-6">
              <h2 className="font-bold">Centered Modal</h2>
            </div>
          </Modal>

          <Button onClick={() => setShowModal(true)} className="!w-fit mt-5">
            Show 40px from Top Modal
          </Button>
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            className="mt-10"
          >
            <div className="w-[650px] h-[500px] p-6">
              <h2 className="font-bold">40px from top modal</h2>
            </div>
          </Modal>
        </div>
      </div>

      <div className="border rounded-md p-5 mx-8">
        <h2 className="text-3xl mb-5">Form</h2>

        <form>
          <div className="grid gap-4 max-w-[400px]">
            <Input.Text
              name="default_input"
              register={hookForm.register}
              placeholder="Default input"
            />
            <Input.Text
              type="email"
              name="error_input"
              register={hookForm.register}
              error
              placeholder="Error input"
            />
            <Input.Password
              name="default_password"
              register={hookForm.register}
              placeholder="Default password"
            />
            <Input.Password
              name="error_password"
              register={hookForm.register}
              error
              placeholder="Error password"
              value="Password wrong"
            />

            <DatePicker
              name="date_picker"
              value={hookForm.watch("date_picker")}
              onChange={(date) => hookForm.setValue("date_picker", date)}
            />

            <DefaultSelect
              options={options}
              name="default_select"
              register={hookForm.register}
            />
            <DefaultSelect
              options={options}
              error
              name="error_select"
              register={hookForm.register}
            />
            <CustomSelect
              options={options}
              name="custom_select"
              value={hookForm.watch("custom_select")}
              onChange={(option) =>
                hookForm.setValue("custom_select", option.value)
              }
            />
            <CustomSelect
              error
              options={options}
              name="custom_error_select"
              value={hookForm.watch("custom_select")}
              onChange={(option) =>
                hookForm.setValue("custom_select", option.value)
              }
            />

            <Textarea name="textarea" register={hookForm.register} />
            <Textarea
              error
              name="error_textarea"
              register={hookForm.register}
            />

            <FileUploader />

            <div className="flex items-center cursor-pointer">
              <Checkbox id="agree" name="agree" register={hookForm.register} />
              <label htmlFor="agree" className="text-sm ml-2">
                Agree to this agreement
              </label>
            </div>

            <Button>Submit Asoy</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

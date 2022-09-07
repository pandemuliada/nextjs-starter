import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import toast from "react-hot-toast";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import Toast from "@/components/ui/Toast";
import Drawer from "@/components/ui/Drawer";

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showScrollableModal, setShowScrollableModal] = useState(false);
  const [showCenteredModal, setShowCenteredModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Head>
        <title>NextJS Starter</title>
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

          <button
            className="bg-gray-200 p-3 rounded mr-5 mt-5"
            onClick={() => setShowModal(true)}
          >
            Show 40px from Top Modal
          </button>
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
    </div>
  );
}

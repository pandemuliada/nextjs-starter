import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import toast from "react-hot-toast";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import Toast from "@/components/ui/Toast";
import Drawer from "@/components/ui/Drawer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

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
        <div className="border rounded-md">
          <button onClick={() => setShowDrawer(true)}>Show Drawer</button>
          <Drawer show={showDrawer} onClose={() => setShowDrawer(false)}>
            <button onClick={() => setShowDrawer(false)}>Exit</button>
          </Drawer>
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="w-full md:w-[400px]">
          <p>Something to describe</p>
          <button
            className="border rounded p-2 mt-4"
            onClick={() => {
              toast.promise(
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    reject(true);
                  }, 5000);
                }),
                {
                  loading: "Loading",
                  success: "Got the data",
                  error: "Error when fetching",
                }
              );
            }}
          >
            Show Toast
          </button>
        </div>
      </Modal>
    </div>
  );
}

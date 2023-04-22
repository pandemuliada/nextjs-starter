import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function MyModal({
  className,
  children,
  show,
  onClose,
  noCloseButton = false,
}) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center py-10 px-6 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-5"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-5"
              >
                <Dialog.Panel
                  className={classNames(
                    "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all min-h-full",
                    className,
                  )}
                >
                  {!noCloseButton && (
                    <div className="absolute top-6 right-6">
                      <button type="button" onClick={handleClose}>
                        <IoClose size={20} />
                      </button>
                    </div>
                  )}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import Portal from "@/components/Portal";
import { IoClose } from "react-icons/io5";
import classNames from "classnames";
import { useDisableScroll } from "@/hooks";

const Modal = (props) => {
  const {
    show,
    onClose,
    children,
    className,
    variant = "default", // default | scrollable | centered
  } = props;

  // Disable scroll when modal open
  useDisableScroll(show);

  return (
    <Portal selector="#modal">
      <AnimatePresence>
        {show && (
          <div>
            {/* backdrop */}
            <motion.div
              className="fixed z-[10] inset-0 bg-[rgba(79,79,79,0.44)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.1 } }}
              transition={{ type: "tween", ease: "easeIn" }}
            />
            {/* backdrop */}

            {/* modal wrapper */}
            <motion.div
              onClick={() => onClose && onClose()}
              className={classNames(
                "fixed z-[10] inset-0 max-h-[100vh] w-full flex justify-center",
                { "items-center": variant === "centered" },
                { "overflow-y-auto": variant === "scrollable" },
              )}
            >
              {/* modal content */}
              {/* modal width will based on children width, see ContactForm.js for example */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "tween", ease: "easeOut" }}
                className={classNames(
                  "relative h-fit rounded-[18px] border border-gray-300 bg-white w-fit p-5",
                  className,
                )}
              >
                <motion.button
                  type="button"
                  className="absolute right-5 top-5"
                  onClick={() => onClose && onClose()}
                >
                  <IoClose size={24} />
                </motion.button>
                {children}
              </motion.div>
              {/* modal content */}
            </motion.div>
            {/* modal */}
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;

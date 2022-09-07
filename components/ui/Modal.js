import { AnimatePresence, motion } from "framer-motion";
import Portal from "@/components/Portal";
import { IoClose } from "react-icons/io5";
import classNames from "classnames";

const Modal = (props) => {
  const {
    show,
    onClose,
    children,
    className,
    centered = false, // Always true
    scrollable = false,
  } = props;

  return (
    <Portal selector="#modal">
      <AnimatePresence>
        {show && (
          <div>
            {/* backdrop */}
            <motion.div
              className="fixed z-0 inset-0 bg-[rgba(79,79,79,0.44)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.1 } }}
              transition={{ type: "tween", ease: "easeIn" }}
            />
            {/* backdrop */}

            {/* modal wrapper */}
            <motion.div
              onClick={() => onClose && onClose()}
              className={`fixed z-[1] inset-0 max-h-[100vh] w-full flex justify-center overflow-y-auto
              ${classNames({ "items-center": centered && !scrollable })}
              ${classNames({ "items-start": scrollable && !centered })} 
              `}
            >
              {/* modal content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "tween", ease: "easeOut" }}
                className={`relative h-fit rounded-[18px] border-2 border-carrara bg-white
                ${classNames({ "my-24": scrollable })} 
                ${className}`}
              >
                <motion.button
                  type="button"
                  className="absolute right-3 top-3"
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

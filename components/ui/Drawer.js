import { AnimatePresence, m, motion } from "framer-motion";
import Portal from "../Portal";

const Drawer = (props) => {
  const { show, onClose, children, className } = props;

  return (
    <Portal selector="#drawer">
      <AnimatePresence>
        {show && (
          <div>
            {/* backdrop */}
            <motion.div
              className="fixed z-0 inset-0 bg-black bg-opacity-20"
              onClick={() => onClose()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
            />
            {/* backdrop */}

            {/* drawer */}
            <motion.div
              className={`fixed z-[1] top-0 right-0 bottom-0 bg-white ${className}`}
              style={{ width: 400 }}
              initial={{ opacity: 0, right: -400 }}
              animate={{ opacity: 1, right: 0 }}
              exit={{ opacity: 0, right: -400 }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
            {/* drawer */}
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Drawer;

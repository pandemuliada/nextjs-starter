import { useOnClickOutside } from "@/hooks";
import { createContext, useContext, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PopupContext = createContext({});

const usePopup = () => {
  const { isOpen, setIsOpen, collapseAfterClick, position, onOpen, onClose } =
    useContext(PopupContext);

  return {
    isOpen,
    setIsOpen,
    collapseAfterClick,
    position,
    onOpen,
    onClose,
  };
};

const Popup = (props) => {
  const {
    children,
    trigger,
    onOpen,
    onClose,
    collapseAfterClick = false,
    position = { top: 60, left: 0 },
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef();
  useOnClickOutside(containerRef, () => {
    if (isOpen) {
      setIsOpen(false);
      onClose && onClose();
    }
  });

  return (
    <PopupContext.Provider
      value={{
        isOpen,
        setIsOpen,
        collapseAfterClick,
        position,
        onOpen,
        onClose,
      }}
    >
      {/* The trigger modal will relative to trigger component */}
      <div ref={containerRef} className="relative">
        {typeof trigger === "function" ? (
          <Trigger>{trigger({ isOpen, setIsOpen })}</Trigger>
        ) : (
          <Trigger>{trigger}</Trigger>
        )}
        <Modal position={position}>{children}</Modal>
      </div>
    </PopupContext.Provider>
  );
};

const Trigger = (props) => {
  const { isOpen, setIsOpen, onOpen, onClose, onToggle } = usePopup();
  const triggerRef = useRef();

  return (
    <div
      ref={triggerRef}
      className="w-full"
      onClick={() => {
        setIsOpen(!isOpen);
        if (!isOpen) {
          onOpen && onOpen();
        } else {
          onClose && onClose();
        }
      }}
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const { isOpen, setIsOpen, collapseAfterClick, position, onClose } =
    usePopup();

  return (
    <>
      {/* <Portal selector="#drawer"> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-[1]"
            style={{ ...position }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "tween", ease: "easeInOut" }}
            onClick={() => {
              // Handle if collapseAfterClick props defined
              if (collapseAfterClick) {
                setIsOpen(false);
                onClose && onClose();
              }
            }}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
      {/* </Portal> */}
    </>
  );
};

export default Popup;

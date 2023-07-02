import { useDisableScroll } from "@/hooks";
import { AnimatePresence, m, motion } from "framer-motion";
import Portal from "../Portal";
import classNames from "classnames";

const renderPlacementStyle = (placement) => {
  switch (placement) {
    case "left":
      return "left-0 top-0 bottom-0";
    case "right":
      return "right-0 top-0 bottom-0";
    case "top":
      return "top-0 left-0 right-0";
    case "bottom":
      return "bottom-0 left-0 right-0";
    default:
      return "right-0 top-0 bottom-0";
  }
};

const renderInitialStyle = (placement, size) => {
  switch (placement) {
    case "left":
      return {
        left: `-${size}`,
      };
    case "right":
      return {
        right: `-${size}`,
      };
    case "top":
      return {
        top: `-${size}`,
      };
    case "bottom":
      return {
        bottom: `-${size}`,
      };
    default:
      return {
        right: `-${size}`,
      };
  }
};

const renderAnimateStyle = (placement) => {
  switch (placement) {
    case "left":
      return {
        left: 0,
      };
    case "right":
      return {
        right: 0,
      };
    case "top":
      return {
        top: 0,
      };
    case "bottom":
      return {
        bottom: 0,
      };
    default:
      return {
        right: 0,
      };
  }
};

const renderSize = (placement, size) => {
  switch (placement) {
    case "left":
      return {
        height: "100%",
        width: size,
      };
    case "right":
      return {
        height: "100%",
        width: size,
      };
    case "top":
      return {
        width: "100%",
        height: size,
      };
    case "bottom":
      return {
        width: "100%",
        height: size,
      };
    default:
      return {
        width: "100%",
        height: size,
      };
  }
};

const Drawer = ({
  show,
  onClose,
  children,
  className = "",
  wrapperClassName = "",
  size = "400px",
  placement = "right",
}) => {
  useDisableScroll(show);

  return (
    <Portal selector="#drawer">
      <AnimatePresence>
        {show && (
          <div className={wrapperClassName}>
            {/* backdrop */}
            <motion.div
              className="fixed z-[11] inset-0 bg-black bg-opacity-20"
              onClick={() => onClose()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
            />
            {/* backdrop */}

            {/* drawer */}
            <motion.div
              className={classNames(
                "fixed z-[11] bg-white",
                renderPlacementStyle(placement),
                className,
              )}
              style={{ ...renderSize(placement, size) }}
              initial={{ opacity: 0, ...renderInitialStyle(placement, size) }}
              animate={{ opacity: 1, ...renderAnimateStyle(placement) }}
              exit={{ opacity: 0, ...renderInitialStyle(placement, size) }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            >
              <div className="relative h-[inherit] overflow-y-auto">
                {children}
              </div>
            </motion.div>
            {/* drawer */}
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

const Header = ({ children, className = "" }) => {
  return (
    <div className="sticky top-0">
      <div className={className}>{children}</div>
    </div>
  );
};

const Footer = ({ children, className = "" }) => {
  return (
    <div className="sticky bottom-0">
      <div className={className}>{children}</div>
    </div>
  );
};

Drawer.Header = Header;
Drawer.Footer = Footer;

export default Drawer;

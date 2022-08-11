import { CSSTransition, TransitionGroup } from "react-transition-group";
import Portal from "@/components/Portal";
import { IoClose } from "react-icons/io5";

const Modal = (props) => {
  const {
    title = "Modal Title",
    show,
    onClose,
    maskClosable = false,
    children,
  } = props;

  return (
    <Portal selector="#modal">
      <TransitionGroup>
        {/* Backdrop / Mask */}
        {show && (
          <CSSTransition
            classNames="modal-backdrop"
            // I don't know how the way this "timout" work, but if it missing the animation is so fast and messy
            timeout={{
              enter: 200,
              appear: 200,
              exit: 1000,
            }}
          >
            <div className="fixed inset-0 bg-[#212529] bg-opacity-70 z-[1000]" />
          </CSSTransition>
        )}

        {/* Content */}
        {show && (
          <CSSTransition
            classNames="modal"
            // I don't know how the way this "timout" work, but if it missing the animation is so fast and messy
            timeout={400}
          >
            <div
              className={`absolute z-[1001] flex w-full h-[fit-content] mt-20 overflow-auto inset-0 justify-center`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onClose && maskClosable && onClose();
              }}
            >
              {/* Card */}
              <div
                className="relative p-6 min-w-[300px] w-[fit-content] max-w-[600px] bg-white rounded-md shadow-md mb-20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between pr-8">
                  <h6 className="text-xl font-medium">{title}</h6>

                  {/* Close */}
                  <button
                    className="absolute right-6 top-6 text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose && onClose();
                    }}
                  >
                    <IoClose size={20} />
                  </button>
                </div>
                <div>{children}</div>
              </div>
              {/* Card */}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Portal>
  );
};

export default Modal;

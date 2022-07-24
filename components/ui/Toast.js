import toast from "react-hot-toast";
import { IoCheckmark, IoClose } from "react-icons/io5";

const success = (message = "", removeable = true) => {
  return toast.custom(
    (t) => (
      <div
        className={`bg-white shadow-md rounded-md pl-5 pr-6 py-4 max-w-[300px] animate__animated animate__faster border-l-4 border-solid border-green-400 ${
          t.visible ? "animate__fadeInRight" : "animate__fadeOutRight"
        }`}
      >
        <div className="flex items-center">
          <span className="text-white w-[24px] h-[24px] rounded-full mr-3 p-1 bg-green-400">
            <IoCheckmark size="100%" />
          </span>
          <div>
            <span className="text-[16px] text-gray-700">{message}</span>
          </div>

          {removeable && (
            <span
              className="text-gray-500 ml-5 cursor-pointer"
              onClick={(e) => {
                toast.dismiss(t.id);
              }}
            >
              <IoClose />
            </span>
          )}
        </div>
      </div>
    ),
    { duration: 4000, position: "top-right" }
  );
};

// Create other toasts (error, info, etc)

const Toast = {
  success,
};

export default Toast;

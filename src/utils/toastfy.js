import { toast } from "react-toastify";

const ToastifySuccess = (msg) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export default ToastifySuccess;

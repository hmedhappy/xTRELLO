import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function notify(message, success) {
  success ? toast.success(message,{
    autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  }):toast.error(message,{
    autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  });
}
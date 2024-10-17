import { Flip, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Flip}
      limit={3}
    />
  );
};

export default ToastProvider;

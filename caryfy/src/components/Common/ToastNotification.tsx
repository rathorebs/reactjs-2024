import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';

const createToastContainer = () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<ToastContainer />);
};

const showSuccess = (message: any) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 2000,
  });
};

const showError = (message: any) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 2000,
  });
};

// Initialize the toast container once when the module is imported
createToastContainer();

export { showSuccess, showError };

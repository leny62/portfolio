import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toaster = (message, type) => {
    if (type === 'success') {
        return toast.success(message)
    } else if (type === 'info') {
        return toast.info(message)
    } else if (type === 'warn') {
        return toast.warn(message)
    } else if (type === 'error') {
        return toast.error(message)
    } else {
        return toast(message)
    }
};
export default toaster;
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { cancelDelete, closeModal } from '../features/Todo/todoSlice';

const PopupModal = ({ children }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(cancelDelete());
    dispatch(closeModal());
  };

  return (
    <>
      <div
        onClick={handleCloseModal}
        className="fixed top-0 cursor-pointer left-0 w-full h-full bg-black opacity-50 z-50"
      ></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg z-50 max-w-xl w-full transition-transform duration-300">
        {/* Close button */}
        <button
          onClick={handleCloseModal}
          className="absolute text-xl bg-red-500 rounded-full h-12 w-12 font-bold top-0 right-0 m-4 text-white duration-300 hover:text-gray-800 focus:outline-none"
        >
          &#10005;
        </button>
        {/* Modal content */}
        {children}
      </div>
    </>
  );
};

export default PopupModal;

import { MdTaskAlt } from 'react-icons/md';
import { openModal } from './todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import PopupModal from '../../ui/PopupModal';
import ModalContent from '../../ui/ModalContent';

const AddTodo = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.todo);
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      {isOpen && (
        <PopupModal>
          <ModalContent />
        </PopupModal>
      )}
      <button
        onClick={handleOpenModal}
        className="bg-orange-500 rounded-xl transition-all duration-200 flex justify-center items-center space-x-4 text-xl font-bold text-white p-3 hover:bg-orange-700 focus:outline-none"
      >
        <MdTaskAlt className="text-2xl font-black" /> <span>Add New Todo</span>
      </button>
    </>
  );
};

export default AddTodo;

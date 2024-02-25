/* eslint-disable react/prop-types */
import { TiWarning } from 'react-icons/ti';
import { cancelDelete, deleteTodo } from '../features/Todo/todoSlice';
import { useDispatch } from 'react-redux';

const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));

    dispatch(cancelDelete());
  };

  const handleCancel = () => {
    dispatch(cancelDelete());
  };

  return (
    <div className="p-2 flex flex-col justify-center items-center">
      <TiWarning className="text-9xl text-orange-500" />
      <h1 className="text-5xl mt-8  text-center font-semibold mb-14 leading-[3.5rem] text-orange-400">
        Are you sure you want to delete this todo?
      </h1>

      <div className="flex space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white text-lg font-bold p-4 px-6 duration-300 rounded-lg hover:bg-red-700"
        >
          Yes, Delete!
        </button>
        <button
          onClick={handleCancel}
          className="bg-orange-500 hover:bg-orange-700 duration-300 text-white text-lg font-bold p-4 px-6 rounded-lg "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteTodo;

import { useDispatch, useSelector } from 'react-redux';
import { startDelete, toggleCompleted } from './todoSlice';
import PopupModal from '../../ui/PopupModal';
import DeleteTodo from '../../ui/DeleteTodo';

/* eslint-disable react/prop-types */
const Todo = ({ category, text, id }) => {
  const dispatch = useDispatch();
  const { todos, isDeleted } = useSelector((state) => state.todo);
  const todo = todos.find((todo) => todo.text.id === id);
  const completed = todo ? todo.completed : false;

  const handleDelete = () => {
    dispatch(startDelete());
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted({ id }));
  };

  const completedClassName = completed
    ? 'shadow-lg duration-700 text-white bg-green-500'
    : '';

  if (isDeleted) {
    return (
      <PopupModal>
        <DeleteTodo id={id} />
      </PopupModal>
    );
  }

  return (
    <li
      className={`w-full mt-8 bg-gray-200
       list-none p-4 rounded-lg shadow-lg flex-col space-y-4 ${
         completed && completedClassName
       }`}
    >
      <div className="flex justify-between">
        <p className={`${completed && 'line-through'} text-xl`}>{text}</p>

        <div className="flex space-x-4 items-center">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white text-md font-bold p-2 rounded-lg "
          >
            Delete
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="bg-white tracking-widest uppercase text-orange-500 text-lg font-bold p-2 rounded-lg ">
          {category}
        </p>
        <input
          className="h-6 cursor-pointer w-6 border-gray-300 "
          type="checkbox"
          onChange={handleToggleCompleted}
          checked={completed}
        />
      </div>
    </li>
  );
};

export default Todo;

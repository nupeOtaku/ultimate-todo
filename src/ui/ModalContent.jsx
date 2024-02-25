import { TiWarning } from 'react-icons/ti';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, closeModal } from '../features/Todo/todoSlice';

const ModalContent = () => {
  const [category, setCategory] = useState('');
  const [newTodo, setNewTodo] = useState('');
  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleAddTodo = () => {
    if (!validateForm()) {
      return;
    }

    dispatch(closeModal());
    dispatch(
      addTodo({ category, text: newTodo, id: Math.random() * Date.now() })
    );
    setNewTodo('');
  };

  const validateForm = () => {
    let isValid = true;

    // Validate title
    if (newTodo.length < 4) {
      setTitleError('Title must be at least 4 characters long');
      isValid = false;
    } else {
      setTitleError('');
    }

    // Validate category
    if (!category) {
      setCategoryError('Please select a category');
      isValid = false;
    } else {
      setCategoryError('');
    }

    return isValid;
  };

  const handleTitleChange = (e) => {
    setNewTodo(e.target.value);
    // Clear title error when user starts typing
    if (e.target.value.length >= 4) {
      setTitleError('');
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // Clear category error when user selects a category
    if (e.target.value) {
      setCategoryError('');
    }
  };

  return (
    <div>
      <h1 className="text-5xl  text-center font-semibold mb-14 text-orange-400">
        Todo Form
      </h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-semibold mb-2"
            htmlFor="todo"
          >
            Title
          </label>
          <input
            value={newTodo}
            onChange={handleTitleChange}
            id="todo"
            type="text"
            placeholder="Add Todo"
            className="rounded-xl w-full text-xl font-semibold bg-slate-200 border p-3  text-gray-800 border-gray-300 focus:outline-none"
          />
          {titleError && (
            <p className="text-lg mt-2 flex space-x-2 items-center text-red-500">
              <TiWarning /> <span>{titleError}</span>
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-semibold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            className="rounded-xl w-full bg-slate-200  text-xl font-semibold border-gray-300 p-3 cursor-pointer focus:outline-none"
            name="todo"
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Category</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
          {categoryError && (
            <p className="text-lg mt-2 flex space-x-2 items-center text-red-500">
              <TiWarning /> <span>{categoryError}</span>
            </p>
          )}
        </div>

        <div className="btn-container flex justify-end space-x-4 mt-8">
          <button
            onClick={handleCloseModal}
            type="button"
            className="bg-red-500 text-white text-xl font-bold p-3 rounded-lg hover:bg-red-700 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleAddTodo}
            type="button"
            className="bg-orange-500 text-xl font-bold text-white p-3 rounded-lg duration-200 hover:bg-orange-700 focus:outline-none"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalContent;

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import Todo from './Todocop';

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <div className="mt-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="rounded-l px-4 py-2 border-t border-b border-l text-gray-800 border-gray-200 focus:outline-none"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-700 focus:outline-none"
        >
          Add Todo
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

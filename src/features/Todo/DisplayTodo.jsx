/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import { setTodos } from './todoSlice';
import { useEffect } from 'react';

const DisplayTodo = ({ searchTerm, category }) => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch(setTodos(storedTodos));
    }
  }, [dispatch]);

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === '' || todo.text.category === category;
    return matchesSearch && matchesCategory;
  });

  if (todos.length < 1) {
    return (
      <h1 className="text-2xl mt-8  text-center font-semibold mb-14 text-orange-400">
        You don`t have any todos yet
      </h1>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {filteredTodos.map((todo) => {
        const { text } = todo;

        return <Todo key={text.id} {...text} />;
      })}
    </div>
  );
};

export default DisplayTodo;

// src/App.jsx
import { useState } from 'react';
import AddTodo from './features/Todo/AddTodo';
import DisplayTodo from './features/Todo/DisplayTodo';
import TodoSearch from './features/Todo/TodoSearch';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-ful p-8 flex flex-col">
        <h1 className="text-5xl  text-center font-semibold mb-14 text-orange-400">
          Todo App
        </h1>
        <TodoSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
        />
        {/* <TodoList /> */}
        <AddTodo />
        <DisplayTodo searchTerm={searchTerm} category={category} />
      </div>
    </div>
  );
}

export default App;

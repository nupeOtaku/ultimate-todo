// eslint-disable-next-line react/prop-types
const TodoSearch = ({ searchTerm, setSearchTerm, category, setCategory }) => {
  return (
    <div className="flex w-full space-x-4 mb-8">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search"
        className="rounded-lg w-full text-xl font-semibold bg-slate-200 border p-3  text-gray-800 border-gray-300 focus:outline-none"
      />

      <select
        className="rounded-lg py-1 text-xl font-semibold  p-3 cursor-pointer focus:outline-none bg-slate-200 text-gray-800  border border-gray-300"
        name="todo"
        id="todo"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Category</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
    </div>
  );
};

export default TodoSearch;

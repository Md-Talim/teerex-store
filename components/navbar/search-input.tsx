const SearchInput = () => {
  return (
    <form className="flex-1 max-w-lg flex items-center gap-x-4">
      <input
        type="text"
        placeholder="Search for products..."
        className="outline-none border-b-2 w-full pb-1"
      />

      <button
        type="submit"
        className="bg-black text-white font-bold uppercase text-lg px-4 py-1 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;

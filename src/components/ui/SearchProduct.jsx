import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchProduct({ placeholder, applyFilter, onChange, value }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        applyFilter();
      }}
      className="relative text-sm sm:text-xl"
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-sm sm:text-lg border p-2 border-gray-300 rounded-md w-full h-8 sm:h-10 lg:w-80 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
      />
      <SearchOutlinedIcon
        onClick={() => {
          applyFilter();
        }}
        fontSize="inherit"
        className="absolute right-2 sm:top-2.5 top-2 text-gray-500 cursor-pointer"
      />
    </form>
  );
}

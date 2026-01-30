import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchBar() {
    return (
        <form className="relative">
            <input 
            type="text"
            placeholder="search products..."
            className="border p-2 border-gray-300 rounded-md w-full lg:w-62.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
             />
             <SearchOutlinedIcon 
             fontSize="medium"
             className="absolute right-2 top-2 text-gray-500 cursor-pointer"
             />
        </form>
    )
}
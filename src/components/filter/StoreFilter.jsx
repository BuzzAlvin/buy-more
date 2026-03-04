import { Tune, ArrowDownwardOutlined } from "@mui/icons-material";
import SearchProduct from "../ui/SearchProduct";
import StoreOption from "./StoreOption";

export default function StoreFilter({
  category,
  setCategory,
  sort,
  setSort,
  search,
  setSearch,
  applyFilter,
}) {
  return (
    <>
      <div className="flex flex-col justify-between items-center sm:flex-row sm:space-y-0 space-y-4 mb-8">
        <div className="flex  space-x-4 lg:w-auto shrink-0">
          <StoreOption
            label="All Categories"
            value={category}
            onChange={setCategory}
            options={[
              "All Categories",
              "New Arrival",
              "Best Sellers",
              "Sale Items",
              "Fashion",
              "Electronics",
              "For Men",
              "For Women",
            ]}
          />

          <StoreOption
            label="Most Popular"
            value={sort}
            onChange={setSort}
            options={[
              "Most Popular",
              "Newest",
              "Price: Low to High",
              "Price: High to Low",
              "Best Rating",
            ]}
          />
        </div>

        <div className="flex justify-center h-10 sm:w-auto space-x-4 w-full">
          <span className="sm:flex-none flex-1">
            <SearchProduct
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search..."
              applyFilter={applyFilter}
            />
          </span>
          <span
            onClick={() => applyFilter()}
            className="flex items-center justify-center border border-gray-400 hover:bg-gray-200 rounded-md h-8 w-8 sm:h-10 sm:w-10 text-[24px] sm:text-[28px] lg:text-[30px] cursor-pointer"
          >
            <Tune fontSize="inherit" />
          </span>
        </div>
      </div>
    </>
  );
}

/*         <div className="flex gap-2 items-center ">
            <select name="categories" className="w-full text-sm h-9 px-2 sm:text-base sm:h-10 sm:px-3 lg:text-lg lg:h-11 lg:px-4 bg-transparent outline-none focus:ring-2 focus:ring-emerald-500 transition border border-gray-300  rounded-lg">
              <option value="all categories">All Categories</option>
              <option value="new arrival">New Arrival</option>
              <option value="best sellers">Best Sellers</option>
              <option value="sale items">Sale Items</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="for men">For Men</option>
              <option value="for men">For Women</option>
            </select>
          </div>

          <div className="flex items-center">
            <select name="filter" className="w-full text-sm h-9 px-2 sm:text-base sm:h-10 sm:px-3 lg:text-lg lg:h-11 lg:px-4 bg-transparent outline-none focus:ring-2 focus:ring-emerald-500 transition border border-gray-300  rounded-lg">
              <option className="rounded-lg px-3 h-10 text-sm sm:text-base" value="most popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price: low to high">Price: Low to High</option>
              <option value="price: high to low">Price: High to Low</option>
              <option value="best rating">Best Rating</option>
            </select>
          </div> */

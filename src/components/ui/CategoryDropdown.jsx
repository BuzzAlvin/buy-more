import DropdownItem from "./DropdownItem";

export default function CategoryDropdown({ onToggle }) {
  return (
    <>
      {/*Category Drop-down */}
      <div className="relative hidden lg:block group">
      <span className="px-5 py-1 rounded-lg text-xl font-medium text-gray-850 cursor-pointer hover:bg-emerald-50 hover:text-emerald-700 transition">
        Categories
      </span>

      {/* categories */}
      <div className="bg-white absolute top-full left-0 mt-2 w-48 hidden group-hover:block transition-all duration-200 py-6 px-4 text-lg shadow-sm rounded-md z-50">
        <DropdownItem label="New Arrivals" />
        <DropdownItem label="Best Sellers" />
        <DropdownItem label="Sale Items" />
        <DropdownItem label="Fashion" />
        <DropdownItem label="Electronics" />
        <DropdownItem label="For Men" />
        <DropdownItem label="For Women" />
      </div>
      </div>

      {/* Mobile/ Tablet */}
      <div className="lg:hidden w-full">
        <span
          onClick={onToggle}
          className="px-5 py-1 rounded-lg sm:text-lg text-sm font-medium text-gray-850 cursor-pointer w-full"
        >
          Categories
        </span>
      </div>
    </>
  );
}

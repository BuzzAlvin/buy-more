import SearchProduct from "../ui/SearchProduct";
import NavItem from "../ui/NavItem";
import CategoryDropdown from "../ui/CategoryDropdown";

export default function MobileNav({ categoryOpen, setCategoryOpen, open }) {
  return (
    <>
      {/* Mobile nav */}
      {open && (
        <nav className="fixed top-14 left-0 right-0 z-40 bg-white font-medium transition-transform duration-300 lg:hidden">
          <div className="flex flex-col shadow-sm">
            <div className="px-4 py-3 sm:mt-4">
              <SearchProduct placeholder="search products..." />
            </div>
            <div className="flex flex-col items-start px-4 pb-4 space-y-3">
              <NavItem label="Home" to="/" onClick={() => setOpen(false)} />
              <NavItem
                label="Store"
                to="/store"
                onClick={() => setOpen(false)}
              />
              <NavItem
                label="About"
                to="/about"
                onClick={() => setOpen(false)}
              />
              <NavItem label="Blog" to="/blog" onClick={() => setOpen(false)} />
              <CategoryDropdown
                onToggle={() => setCategoryOpen((prev) => !prev)}
              />
            </div>
          </div>
          {categoryOpen && (
            <div className="flex flex-col items-start px-9 pb-4 space-y-3 border-t border-emerald-600">
              <NavItem label="New Arrivals" />
              <NavItem label="Best Sellers" />
              <NavItem label="Sale Items" />
              <NavItem label="Fashion" />
              <NavItem label="Electronics" />
              <NavItem label="For Men" />
              <NavItem label="For Women" />
            </div>
          )}
        </nav>
      )}
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavItem from "./NavItem";
import CategoryDropdown from "./CategoryDropdown";
import SearchProduct from "./SearchProduct";
import AccountDropdown from "./AccountDropdown";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="mx-auto lg:py-6 lg:px-8 px-4 py-3 max-w-7xl w-full">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden cursor-pointer"
          >
            {open ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
          {/* Logo */}
          <h1 className="lg:text-4xl text-2xl font-semibold tracking-tight text-gray-900 px-3">
            <Link to="/">Buy<span className="text-emerald-600">More</span></Link>
          </h1>

          {/* Destop nav */}
          <nav className="flex items-center gap-8">
            <div className="hidden lg:flex flex-row items-center justify-between gap-2 text-xl font-semibold text-gray-700">
              <NavItem label="Home" to="/" />
              <NavItem label="Store" to="/store"/>
              <NavItem label="About" to="/about" />
              <NavItem label="Blog" to="/blog" />
              <CategoryDropdown />
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="hidden sm:block">
                <SearchProduct />
              </div>
              <div className="flex gap-2">
                <AccountDropdown />
                <Link to="/cart">
                  <ShoppingCartOutlined
                    fontSize="large"
                    className="cursor-pointer hover:bg-emerald-50 hover:text-emerald-700 transition"
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile nav */}
      {open && (
        <nav className="bg-white font-medium z-50 lg:hidden">
          <div className="flex flex-col">
            <div className="px-4 py-3">
              <SearchProduct />
            </div>
            <div className="flex flex-col items-start px-4 pb-4 space-y-3">
              <NavItem label="Home" to="/" />
              <NavItem label="Store" to="/store"/>
              <NavItem label="About" to="/about" />
              <NavItem label="Blog" to="/blog" />
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
    </header>
  );
}

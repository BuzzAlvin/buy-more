import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";
import CartIcon from "../cart/CartIcon";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavItem from "../ui/NavItem";
import CategoryDropdown from "../ui/CategoryDropdown";
import SearchProduct from "../ui/SearchProduct";
import AccountDropdown from "../ui/AccountDropdown";
import MobileNav from "./MobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const { totalItems } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full shadow-sm bg-white">
        <div className="mx-auto lg:py-6 lg:px-8 px-4 py-3 max-w-7xl w-full">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden cursor-pointer sm:text-[30px] text-[20px]"
            >
              {open ? (
                <CloseIcon fontSize="inherit" />
              ) : (
                <MenuIcon fontSize="inherit" />
              )}
            </button>
            {/* Logo */}
            <h1 className="lg:text-2xl sm:text-xl text-lg font-semibold tracking-tight text-gray-900 px-3">
              <Link to="/">
                Buy<span className="text-emerald-600">More</span>
              </Link>
            </h1>

            {/* Destop nav */}
            <nav className="flex items-center gap-8">
              <div className="hidden lg:flex flex-row items-center justify-between gap-2 font-semibold text-gray-700">
                <NavItem label="Home" to="/" />
                <NavItem label="Store" to="/store" />
                <NavItem label="About" to="/about" />
                <NavItem label="Blog" to="/blog" />
                <CategoryDropdown />
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="hidden sm:block">
                  <SearchProduct placeholder="search products..." />
                </div>
                <div className="flex items-center gap-2">
                  <AccountDropdown />

                  <Link
                    to="/cart"
                    className="cursor-pointer text-xl sm:text-2xl lg:text-3xl"
                  >
                    <CartIcon />
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <MobileNav
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
        open={open}
      />
    </>
  );
}

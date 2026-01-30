import { useState, useEffect, useRef } from "react";
import DropdownItem from "./DropdownItem";
import { Login, Person } from "@mui/icons-material";

export default function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="lg:text-xl lg:px-5 px-3 text-lg font-semibold cursor-pointer  py-1 rounded hover:bg-emerald-50 hover:text-emerald-700 transition"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Account
      </button>

      {isOpen && (
        <div className="bg-white absolute top-full left-0 mt-2 w-40 lg:w-48 transition-all duration-200 py-4 px-4 text-lg shadow-lg rounded-md z-50">
          <DropdownItem label="Sign In" icon={Login} to="/login" onClick={() => setIsOpen(false)} />
          <DropdownItem label="Register" icon={Person} to="/signUp" onClick={() => setIsOpen(false)}/>
        </div>
      )}
    </div>
  );
}

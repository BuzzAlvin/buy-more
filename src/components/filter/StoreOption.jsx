import Icon from "@mui/material/Icon";
import { useState } from "react";

export default function StoreOption({
  label,
  options,
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative sm:w-auto">
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          w-full
          text-left
          text-sm h-8 px-1
          sm:text-base sm:h-9 sm:px-3
          lg:text-lg lg:h-11 lg:px-4
          border border-gray-300 rounded-lg
          bg-white
          focus:ring-2 focus:ring-emerald-500
          transition
        "
      >
        {value || label}
{/*         <span>
          <Icon />
        </span> */}
      </button>

      {/* Dropdown menu */}
      {open && (
        <ul
          className="
            absolute left-0 right-0 z-50 mt-2 
            rounded-xl bg-gray-100
            shadow-lg
            p-2 space-y-1 w-full sm:w-40 lg:w-48 
            text-sm
          "
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="
                px-3 py-2
                rounded-lg
                text-sm sm:text-base
                cursor-pointer lg:text-left
                hover:bg-gray-100
                transition-all duration-200 ease-out
              "
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

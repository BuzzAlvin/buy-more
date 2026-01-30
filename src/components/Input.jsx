import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full">
      <div className="relative">
        {label && (
          <label className="block lg:text-md text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full p-2 border lg:text-md text-sm border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${isPassword ? "pr-10" : ""}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2/3 -translate-y-1/2 text-gray-500 cursor-pointer"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </button>
        )}
      </div>
    </div>
  );
}

import { Link } from "react-router";

export default function Button({
  children,
  type = "button",
  variant = "signIn",
  onClick,
  to,
}) {
  const styles = {
    signIn: "bg-emerald-600 hover:bg-emerald-700 text-white sm:py-2 py-1 sm:px-4 px-2  ",
    white:
      "bg-white hover:bg-gray-100 text-gray-700 py-2 px-4 border border-gray-300",
    learnmore:
      "bg-emerald-100 hover:bg-emerald-100 text-emerald-700 py-2 sm:px-4 px-2 ",
  };

  const className = `w-full my-1.5 sm:my-6 cursor-pointer text-center lg:text-xl sm:text-lg text-sm font-semibold rounded-lg transition-colors duration-200 ${styles[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

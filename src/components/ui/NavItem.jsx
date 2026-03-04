import { Link } from "react-router";

export default function NavItem({ label, to, onClick }) {
  return (
    <Link 
    to={to}
    onClick={onClick}
    className="px-5  hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 rounded-lg sm:text-lg lg:text-xl text-sm">
      {label}
    </Link>
  );
}

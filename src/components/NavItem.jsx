import { Link } from "react-router";

export default function NavItem({ label, to }) {
  return (
    <Link 
    to={to}
    className="px-5 py-1 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 rounded-lg text-2xl">
      {label}
    </Link>
  );
}

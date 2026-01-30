import { Link } from "react-router";

export default function DropdownItem({ label, icon: Icon, to, onClick }) {
  const content = (
    <div className="flex items-center gap-3 px-3 py-1 text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 cursor-pointer transition">
      {Icon && <Icon className="text-lg text-gray-600" />}
      <span className="text-lg text-gray-700">{label}</span>
    </div>
  );

  return to ? (
    <Link to={to} onClick={onClick}>
      {content}
    </Link>
  ) : (
    <div onClick={onClick}>{content}</div>
  );
}

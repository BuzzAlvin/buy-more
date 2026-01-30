export default function Button({
  children,
  type = "button",
  variant = "signIn",
  onClick,
}) {
  const styles = {
    signIn: "bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4  ",
    white:
      "bg-white hover:bg-gray-100 text-gray-700  py-2 px-4 border border-gray-300",
  };
  return (
    <button
      type={type}
      className={`w-full my-6 cursor-pointer text-center lg:text-md text-sm font-semibold rounded-lg transition-colors duration-200 ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

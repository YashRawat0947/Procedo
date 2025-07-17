import React from "react";
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Badge = ({ children, className = "", variant = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2";
  const variants = {
    default: "border-transparent bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
    outline: "text-gray-900 border-gray-300",
  };
  const classes = cn(baseClasses, variants[variant], className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Badge;
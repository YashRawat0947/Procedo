import React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F24E1E] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-[#F24E1E] text-white hover:bg-[#d63e13]",
    outline: "border border-[#F24E1E] text-[#F24E1E] hover:bg-[#FFF6EC] bg-transparent",
    secondary: "bg-[#FFF6EC] text-[#1A355D] hover:bg-[#FFD9C0]",
    ghost: "hover:bg-[#FFD9C0] hover:text-[#F24E1E]",
    link: "underline-offset-4 hover:underline text-[#F24E1E]",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  return (
    <button className={classes} onClick={onClick} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
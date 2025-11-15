import React from "react";

const Loader = ({ theme }) => {
  const bg =
    theme === "bright"
      ? "bg-gradient-to-br from-[#FFF6EC] via-white to-[#FFE8D6]"
      : "bg-gradient-to-br from-gray-900 via-black to-gray-800";

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center ${bg} transition-all`}>
      <img
        src="/Procedo-logo4.png"
        alt="Procedo Logo"
        className="w-40 animate-pulse opacity-90"
      />
    </div>
  );
};

export default Loader;

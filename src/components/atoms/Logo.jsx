import React from "react";

const logo = '/images/Logo-Vector-Dacax.png'
export const Logo = () => {
  return (
    <div className="flex items-center justify-center 
                    w-[220px] h-[220px] mx-auto
                    rounded-full border-[15px] border-[#C4E4E940] 
                    bg-[#06333B80]">
      <img
        src={logo}
        alt="Logo Dacax"
        className="w-[120px] h-auto drop-shadow-md"
      />
    </div>

  );
};

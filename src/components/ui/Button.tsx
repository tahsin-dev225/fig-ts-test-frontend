import React from "react";

interface ButtonProps {
  btnName: string;
  classN?: string;
}

const Button: React.FC<ButtonProps> = ({ btnName, classN }) => {
  return (
    <button
      className={`px-8 tracking-[0%] py-3.5 leading-[130%] text-black font-extrabold text-[13px] rounded-xl bg-[#8FEF2F] hover:bg-[#849e6a] ${classN}`}
    >
      {btnName}
    </button>
  );
};

export default Button;

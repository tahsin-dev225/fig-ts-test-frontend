import React from "react";

interface ButtonProps {
  btnName: string;
  classN?: string;
}

const Button: React.FC<ButtonProps> = ({ btnName, classN }) => {
  return (
    <button
      className={`px-8 tracking-[0%] py-3.5 leading-[130%] hover:cursor-pointer text-black font-extrabold text-[13px] rounded-xl bg-[#8FEF2F] hover:bg-[#d9fd80] ${classN}`}
    >
      {btnName}
    </button>
  );
};

export default Button;

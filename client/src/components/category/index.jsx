import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

const Category = ({ emoji, name, selectedCategory }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (selectedCategory.includes(name)) {
      selectedCategory.splice(selectedCategory.indexOf(name), 1);
    } else {
      selectedCategory.push(name);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`w-fit mx-2 my-1 flex justify-center items-center px-3 py-1 shadow-md space-x-2 rounded-full ${
        isSelected && "bg-primary text-white"
      } border-gray-100`}
    >
      {/* emoji */}
      {isSelected ? <FiCheck className="h-7" /> : <p>{emoji}</p>}
      {/* text */}
      <p
        className={` ${
          isSelected ? "text-white" : "text-gray-800"
        } text-[0.8rem] tracking-wide font-semibold`}
      >
        {name}
      </p>
    </button>
  );
};

export default Category;

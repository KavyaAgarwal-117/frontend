import React from "react";

const Card = ({ title, desc, btnText }) => {
  return (
    <div className="bg-white rounded-xl p-4 space-y-4 shadow-lg">
      <h3 className="text-2xl font-semibold ">{title}</h3>
      <p>{desc}</p>
      <button className="bg-blue-500 p-2 text-white rounded-lg">
        {btnText}
      </button>
    </div>
  );
};

export default Card;

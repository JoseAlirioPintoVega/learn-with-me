import React, { useState } from "react";
import numbers from "../utils/numbers";

const Cards = () => {
  const [change, setChange] = useState(false);

  const handleclickTranslate = () => {
    if (!change) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  return (
    <div className="flex flex-wrap  w-full h-auto m-auto">
      {numbers.map((num) => (
        <article className=" flex flex-col items-center w-[250px] h-[320px]  border border-gray-500 m-4 rounded-3xl">
          <div className="w-[200px] h-[180px]  overflow-hidden flex justify-center mt-4  mb-2 rounded-3xl border">
            <img className="w-[100%] h-[100%]" src={num.url} alt="{num.name}" />
          </div>
          <h3>{num.name}</h3>
          <h4>/{num.sound}/</h4>
          <i></i>
          <button
            onClick={handleclickTranslate}
            className="mb-4 bg-[green] px-4 text-white rounded-2xl capitalize"
          >
            {change ? num.translate : "Translate"}
          </button>
        </article>
      ))}
    </div>
  );
};

export default Cards;

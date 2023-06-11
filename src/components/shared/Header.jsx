import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-6 py-4 bg-[#0af390] font-semibold uppercase">
      <h2 className="mx-2 text-xl">learn with me</h2>
      <ul className="flex gap-8 mx-2 text-xl">
        <li>register</li>
        <li>login</li>
      </ul>
    </div>
  );
};

export default Header;

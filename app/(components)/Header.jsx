import React from "react";

const Header = () => {
  return (
    <div className="bg-secondary text-primary flex justify-between items-center p-5">
      <h1 className="text-lg">{`<Private institute name>`}</h1>
      <button className="bg-red-400 p-2 rounded-lg text-secondary">
        Log Out
      </button>
    </div>
  );
};

export default Header;

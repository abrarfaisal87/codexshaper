import React from "react";
import logo  from "../assets/Interagency.png"
import bag from "../assets/Bag.png"


const Nav = () => {
  return (
    <nav
      className="w-full text-white h-16  bg-[#0C30AE] flex justify-between border-b-2 border-white"
    >
      <div className="p-4 border-r-2 border-white">
        <img src={logo} className="w-12 h-8" alt="Inter agency" />
      </div>
      <div className="flex flex-row gap-5 items-center  pr-2.5" >
        <img src={bag} className="w-3.5 h-3.5" alt="bag" />
        <div className="menubtn flex flex-col gap-1.5 ">
            <div className="h-0.5 w-6  bg-white"></div>
            <div className="h-0.5 w-6  bg-white"></div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;

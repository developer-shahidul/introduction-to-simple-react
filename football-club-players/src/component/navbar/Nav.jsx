import React from "react";
import logo from "../../assets/football-logo.jpg";

const Nav = ({ freeCradit }) => {
  return (
    <div>
      <nav
        className="md:flex flex-row  justify-between items-center text-center backdrop-blur-3xl
      fixed top-0 left-0 z-50 w-full opacity-100 px-48"
      >
        <div className="mb-5 md:mb-0 ">
          <img
            className="w-[72px] h-[72px] object-cover mx-auto"
            src={logo}
            alt="logo"
          />
        </div>

        <div>
          <ul className="grid grid-cols-2 md:grid-flow-col  justify-between items-center gap-12">
            <li className="text-black text-base">
              <a href="">Home</a>
            </li>
            <li className="text-black text-base">
              <a href="">Fixture</a>
            </li>
            <li className="text-black text-base">
              <a href="">Teams</a>
            </li>
            <li className="text-black text-base">
              <a href="">Schedules</a>
            </li>
            <li className="px-5 py-4 md:border rounded-xl ">
              {freeCradit}$ Coin 🪙
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

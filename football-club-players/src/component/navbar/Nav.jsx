import React from "react";
import logo from "../../assets/football-logo.jpg";

const Nav = () => {
  return (
    <div>
      <nav className="md:flex flex-row  justify-around items-center text-center backdrop-blur-[450px] fixed top-0 left-0 z-50 w-full">
        <div className="mb-5 md:mb-0 ">
          <img
            className="w-[72px] h-[72px] object-cover mx-auto"
            src={logo}
            alt="logo"
          />
        </div>

        <div>
          <ul className="grid grid-cols-2 md:grid-flow-col  justify-between items-center gap-12">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
            <li className="px-5 py-4 border rounded-xl">0 Coin $</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

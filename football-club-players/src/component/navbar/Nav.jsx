import React from "react";
import logo from "../../assets/football-logo.jpg";
import Banner from "./Banner";

const Nav = () => {
  return (
    <div>
      <nav className="flex flex-row  justify-around items-center text-center backdrop-blur-[450px] fixed top-0 left-0 z-50 w-full">
        <div>
          <img
            className="w-[72px] h-[72px] object-cover mx-auto"
            src={logo}
            alt="logo"
          />
        </div>

        <div>
          <ul className="flex-row md:flex justify-between items-center gap-12">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
            <li className="px-5 py-4 border rounded-xl">0 Coin $</li>
          </ul>
        </div>
      </nav>
      <Banner></Banner>
    </div>
  );
};

export default Nav;

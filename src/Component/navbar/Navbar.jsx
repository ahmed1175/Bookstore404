import React from "react";
import logo from "../../assets/website/logo.png";
import { IoCaretDownSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: "home",
      link: "/#",
    },
    {
      id: 2,
      name: "Best sellar",
      link: "/#services",
    },
  ];
  const drobDownlink = [
    {
      name: "trending Books",
      Links: "/#",
    },
    {
      name: "Best Selling",
      Links: "/#",
    },
    {
      name: "Auther",
      Links: "/#",
    },
  ];
  return (
    <div className=" shadow-lg bg-white dark:bg-gray-800 dark:text-white duration-300  ">
      <div className="container py-3 sm:py-0">
        <div
          className="flex 
        justify-between
        items-center"
        >
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="" className="w-10 " />
              books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4 ">
            <ul className=" items-center gap-4 hidden sm:flex">
              <DarkMode />
              {menu.map((menu) => {
                return (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200 "
                    >
                      {menu.name}
                    </a>
                  </li>
                );
              })}

              <li className="group relative cursor-pointer">
                <a href="/#" className="flex h-[72px] items-center gap-[2px]">
                  Quick links
                  <span>
                    <IoCaretDownSharp className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>
                <div className=" absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px] dark:bg-gray-800 dark:text-white">
                  <ul className=" ">
                    {drobDownlink.map((data) => {
                      return (
                        <li className=" " key={data.id}>
                          <a
                            href={data.Links}
                            className=" inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                          >
                            {data.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
            <button className="flex items-center bg-gradient-to-r from-primary to-secondart text-white px-4 py-1 items-center  rounded-full gap-3 hover:scale-105 duration-300  ">
              Order <FaCartShopping />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

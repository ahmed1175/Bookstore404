import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
} from "react-icons/fa";
const Footer = () => {
  const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];
  return (
    <div className=" dark:bg-gray-950 bg-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 ">
          {/* personal detailes */}
          <div className="py-8 px-5">
            <h1 className=" sm:text-3xl text-xl font-bold sm:text-left mb-3 text-justify">
              book store
            </h1>
            <p className="text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              dolores nisi assumenda eligendi error dolorum quis ea quasi
              libero. Mollitia est totam pariatur corporis veniam aliquid ut
              recusandae doloremque modi!
            </p>
            <br />
            socail link
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>01096975997</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* important linkes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div>
              <div className="py-8 px-4 ">
                <h1 className=" sm:text-xl font-bold sm:text-left text-justify mb-3 ">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  {FooterLinks.map((e) => {
                    return (
                      <li className=" cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500">
                        <span>{e.title}</span>
                        <span></span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className=" sm:text-xl font-bold sm:text-left text-justify mb-3 ">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  {FooterLinks.map((e) => {
                    return (
                      <li className=" cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500">
                        <span>{e.title}</span>
                        <span></span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className=" sm:text-xl font-bold sm:text-left text-justify mb-3 ">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  {FooterLinks.map((e) => {
                    return (
                      <li className=" cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500">
                        <span>{e.title}</span>
                        <span></span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

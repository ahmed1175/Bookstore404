import React from "react";
import library from "../../assets/website/library.jpg";

const Banner = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm ">
            {/* Image section  */}
            <div>
              <img
                src={library}
                alt=""
                className=" max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-5 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-start md:text-start">
                Library in your fingertips
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5 text-center sm:text-start m-3 sm:m-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                quam iste labore enim accusantium autem dolor illum modi? Sequi
                optio cumque aut minima. Voluptate maiores sit nobis, libero
                velit aut?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

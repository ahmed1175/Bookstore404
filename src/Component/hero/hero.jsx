import React, { useState } from "react";
import book1 from "../../assets/books/book1.jpg";
import book2 from "../../assets/books/book2.jpg";
import book3 from "../../assets/books/book3.jpg";
import vector from "../../assets/website/blue-pattern.png";
const Hero = () => {
  const [showmodule, setshowmodule] = useState(false);
  const ImageList = [
    {
      id: 1,
      img: book1,
      title: "His Life will forever be Changed",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: book2,
      title: "Who's there",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: book3,
      title: "Lost Boy",
      description:
        "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const [ImageId, setImageId] = useState(book1);
  const bgImage = {
    backgroundImage: `url(${vector})`,
    backgroundposition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  const [description, setdescription] = useState(
    "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
  const [title, settitle] = useState("His Life will forever be Changed");
  return (
    <div
      className=" min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-300 "
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          {/**/}
          <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from bg-primary text-right text-sm to-secondart">
                by Anonymous
              </p>
            </h1>

            <p className="text-sm my-6">{description}</p>

            <div>
              <button
                className=" bg-gradient-to-r from bg-primary to-secondart text-white px-4 py-2 rounded-full hover:scale-105 duration-300 transition-all  mt-4"
                onClick={() => {
                  setshowmodule(true);
                }}
              >
                Order now{" "}
              </button>
            </div>
          </div>
          {showmodule && (
            <div className=" backdrop  bg-gray-950 fixed left-0  right-0 top-0 bottom-0 bg-opacity-90 z-50 ">
              <div className="showmodule justify-center  items-center absolute right-[16%] sm:right-[34%]  flex lg:right-[40%] top-[30%] rounded-lg  bg-white flex-col order-1 sm:order-2 py-6 px-6 shadow-lg dark:bg-gray-900  transition-all ">
                <div className="flex justify-between align-middle gap-20 text-center pb-2">
                  <div className="flex text-lg">Order Your Book </div>{" "}
                  <div
                    className="cansle flex text-lg text-center cursor-pointer duration-300 "
                    onClick={() => {
                      setshowmodule(false);
                    }}
                  >
                    X
                  </div>{" "}
                </div>
                <input
                  type="text"
                  className="m-3 p-2 rounded-full shadow-lg dark:bg-gray-800 border-solid border-2 dark:border-gray-800"
                  placeholder="Name "
                />
                <input
                  type="text"
                  className="m-3 p-2 rounded-full shadow-lg dark:bg-gray-800 border-solid border-2 dark:border-gray-800"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="m-3 p-2 rounded-full shadow-lg dark:bg-gray-800 border-solid border-2 dark:border-gray-800 "
                  placeholder="Address"
                />
                <button className=" bg-gradient-to-r from bg-primary to-secondart text-white px-4 py-2 rounded-full hover:scale-105 duration-300 transition-all  mt-4">
                  Order now{" "}
                </button>
              </div>
            </div>
          )}
          <div className=" min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            {/**/}
            <div className=" h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                src={ImageId}
                alt=""
                className="w-[300px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain h-[300px] mx-auto"
              />
            </div>
            {/**/}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1  rounded-full ">
              {ImageList.map((data) => {
                return (
                  <img
                    src={data.img}
                    className="cursor-pointer max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-300 "
                    onClick={() => {
                      setdescription(data.description);
                      settitle(data.title);
                      setImageId(data.img);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

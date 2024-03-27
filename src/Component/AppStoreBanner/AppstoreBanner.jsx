import React from "react";
import library from "../../assets/website/board.png";
import playstore from "../../assets/website/play_store.png";
import appstore from "../../assets/website/app_store.png";
const AppstoreBanner = () => {
  const banner = {
    backgroundImage: `url(${library})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      className=" bg-gray-100 dark:bg-gray-900 text-white py-10 "
      style={banner}
    >
      <div className="container">
        <div className=" space-y-6 max-w-xl mx-auto">
          <h1 className=" text-center text-2xl sm:text-4xl font-semibold ">
            Read Book at your fingertips
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 m-4 ">
            <a href="#">
              <img
                src={playstore}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                srcset=""
              />
            </a>
            <a href="#">
              <img
                src={appstore}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                srcset=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppstoreBanner;

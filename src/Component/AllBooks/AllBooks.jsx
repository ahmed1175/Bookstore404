import React from "react";
import book1 from "../../assets/books/book1.jpg";
import book2 from "../../assets/books/book2.jpg";
import book3 from "../../assets/books/book3.jpg";
const AllBooks = () => {
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
    {
      id: 4,
      img: book1,
      title: "His Life will forever be Changed",
      description: "",
    },
    {
      id: 5,
      img: book2,
      title: "Who's there",
      description: "",
    },
  ];
  return (
    <div className="">
      <div className="conrainer py-10">
        {/* Header */}
        <div className=" text-center mb-20 max-w-[400px] mx-auto m-4 ">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondart">
            Best Books
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
          <p className=" text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            iure, corporis
          </p>
        </div>
        {/* cards  */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 items-center">
            {ImageList.map((e) => {
              return (
                <div className=" space-y-3">
                  <img
                    src={e.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md hover:scale-105 duration-300 m-1"
                  />
                  <div>
                    <h1 className="font-semibold w-[10rem] text-balance m-2">
                      {e.title}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-gradient-to-r cursor-pointer  hover:bg-white from-primary to-secondart text-white px-4 py-2 rounded-full hover:scale-105 duration-300 transition-all  mt-4">
              View All books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;

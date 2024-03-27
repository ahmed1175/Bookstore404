import React from "react";
import book1 from "../../assets/books/book1.jpg";
import book2 from "../../assets/books/book2.jpg";
import book3 from "../../assets/books/book3.jpg";
const BestBook = () => {
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
  return (
    <div className="py-10">
      <div className="conatiner">
        {/* Header component */}
        <div className=" text-center mb-20 max-w-[400px] mx-auto ">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondart">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
          <p className=" text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            consequuntur totam natus eveniet, ex aperiam! Cum eum omnis
            consectetur numquam architecto, quis dolor recusandae. In nisi unde
            labore optio culpa?
          </p>
        </div>
      </div>
      {/* Card component  */}
      <div>
        <div className=" grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 md:gap-5 place-items-center  ">
          {ImageList.map((e) => {
            return (
              <div className=" rounded-2xl my-[3rem] md:my-0 bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-lg duration-high group max-w-[300px] ">
                <div className="h-[100px]">
                  <img
                    src={e.img}
                    className=" shadow-md max-w-[100px] block mx-auto transform group-hover:scale-105 duration-300 -translate-y-14"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="text-center py-4 ">
                  <h1 className="text-xl font-bold  ">{e.title}</h1>
                  <p className="text-gray-500 group group-hover:text-white duration-300 text-sm line-clamp-2">
                    {e.description}
                  </p>
                  <button className="bg-gradient-to-r hover:bg-white from-primary to-secondart text-white px-4 py-2 rounded-full hover:scale-105 duration-300 transition-all  mt-4">
                    Order now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestBook;

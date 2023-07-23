import React from "react";
import Swiper_slider from "./Swiper_slider";

function Slider() {
  return (
    <div className="">
      <div className="lg:px-24 pt-4 rounded-3xl capitalize">
        <div className="w-full   bg-white rounded-3xl">
          <div className="flex   justify-between flex-col md:flex-row   p-10  gap-5">
            <div className=" flex  flex-col  px-8 gap-5 ">
              <h1 className="text-5xl font font-semibold   flex justify-start md:justify-center">
                App Design And Development Agency
              </h1>
              <div className="text-2xl  ">
                we convert ideas into{" "}
                <span className="default-color"> Mobile and Web App</span> with
                our full time design to development services.
              </div>
              <ul className="">
                <li className=" text-lg w-32 font-semibold text-white bg-blue-500 rounded-full px-4 py-2 ">
                  contact us{" "}
                </li>
              </ul>

              <div className="pt-4 text-xl ">
                <div className="p">Recognised By:</div>
              </div>
            </div>

            <div className="h-96 w-96 ">
              <Swiper_slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

import React from "react";

const Services = () => {
  return (
    <div>
      <div className="services relative xl:relative xl:flex xl:flex-row xl:items-center xl:justify-between   xl:h-72 flex flex-col">
        <img
          className="xl:absolute xl:top-2 xl:left-[35%] absolute right-1 top-2 "
          src="/polygon 10.png"
          alt="asa"
        />
        <img
          className="xl:absolute xl:top-44 xl:-left-3 absolute top-72"
          src="/polygon 9.png"
          alt="side"
        />
        <div
          className="flex flex-col xl:pt-0 pt-7 xl:pb-0 pb-7
          xl:m-auto xl:flex xl:flex-row xl:justify-between xl:items-center  xl:w-[75%]"
        >
          <div className="mt-5">
            <div className="flex justify-center">
              <img src="/truck.png" alt="truck" />
            </div>
            <div className="text-center mb-5">
              <h1 className="text-white">Free Shipping</h1>
              <p className="text-white">Free delivery pan india all orders</p>
            </div>
          </div>
          <div className="mt-5">
            <div className=" flex justify-center">
              <img className="" src="/v.png" alt="truck" />
            </div>
            <div className="text-center mb-5">
              <h1 className="text-white">Easy Return</h1>
              <p className="text-white">
                Return product with in 7 days of<br></br> purchase
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-center">
              <img className="" src="/v.png" alt="truck" />
            </div>
            <div className="text-center mb-5">
              <h1 className="text-white">Cash on delivery</h1>
              <p className="text-white font-normal ">
                100% Risk free secured<br></br> Shopping
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

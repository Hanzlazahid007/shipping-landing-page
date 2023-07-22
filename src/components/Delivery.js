import React from "react";

const Delivery = () => {
  return (
    <div>
      <div className="xl:bg-[#FFFFFF] xl:flex xl:justify-between  box w-[80%] xl:ml-20 xl:mt-14 xl:h-24   xl:rounded-xl flex  h-20  w-[85%] m-auto mb-8">
        <div className="xl:ml-10 ml-4 xl:mt-5">
          <h1 className="xl:leading-4">Delivery Address</h1>
          <p className="xl:mt-3  ">
            Pak avenue line no 10 opposite fried town sahiwal
          </p>
        </div>
        <h1 className="text-[#F3692E]  cursor-pointer xl:mr-8 xl:mt-3 mr-3">
          Change
        </h1>
      </div>
    </div>
  );
};

export default Delivery;

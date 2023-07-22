import Image from "next/image";
import React from "react";

const Items = () => {
  const items = [
    {
      name: "Morning Blossom Premium Quality Agarbatti ( Incense Stick ) 100Gms",
      price: "$50",
      img: "/item.png",
      size: "12 ML",
      quantity: 1,
    },
    {
      name: "Morning Blossom Premium Quality Agarbatti ( Incense Stick ) 100Gms",
      price: "$50",
      img: "/item.png",
      size: "12 ML",
      quantity: 1,
    },
  ];

  return (
    <div className="flex flex-col xl:gap-16 xl:mb-20  ">
      {items.map((data, index) => {
        return (
          <>
            <div className="xl:absolute xl:-left-8 xl:top-[31rem] hidden">
              <img src="/polygon 5.png" alt="" />
            </div>
            <div className="xl:absolute xl:-right-8  xl:top-[51rem] hidden">
              <img src="/polygon 6.png" alt="" />
            </div>
            <div
              key={index}
              className="flex flex-col   xl:flex xl:flex-row  xl:h-[16rem] xl:w-[650px] xl:rounded-lg "
            >
              <div className="mt-5 xl:m-0 xl:w-[36%] rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={data.img}
                  alt="Product"
                  className="xl:h-full xl:w-full  rounded-lg xl:object-contain h-80 w-[80%] m-auto"
                />
              </div>
              <div className="xl:flex xl:flex-col xl:justify-between   xl:w-[41.7%] ml-12 mt-6 xl:m-0 xl:pl-8">
                <h1 className="text-xl font-bold w-[80%] mb-2 ">{data.name}</h1>
                <div className="text-sm xl:mt-0 mt-4 mb-2">
                  <p>Size: {data.size}</p>
                </div>
                <div className="text-sm mb-2">
                  <p>Quantity: {data.quantity}</p>
                </div>
                <div className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio  h-4 w-4"
                      checked
                    />
                    <span className="ml-2">Delivery within 7 days</span>
                  </label>
                </div>
                <div className="rounded w-[152px] xl:w-[200px]   border border-[#848484] p-2 pl-3">
                  <p className="xl:text-lg ">
                    Total Amount:
                    <span className="xl:font-bold xl:pl-5">
                      {data.price}{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Items;

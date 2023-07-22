const OrderSummary = () => {
  const totalitems = 5;
  const subtotal = 100;
  const couponDiscount = 10;
  const shipping = 5;
  const total = subtotal - couponDiscount + shipping;
  return (
    <div className="m-auto mb-10 w-[80%]  xl:w-72 h-[19rem] pl-6 pr-6 xl:text-center font-bold xl:mx-auto xl:mt-0 mt-6 bg-gray-300 rounded-lg p-4">
      <h2 className="text-xl  mb-2">Order Summary</h2>
      <p className="text-sm mb-5 font-semibold">Total Items: {totalitems}</p>
      <div className="flex justify-between">
        <p>Subtotal:</p>
        <p>${subtotal}</p>
      </div>
      <div className="flex justify-between">
        <p>Coupon Discount:</p>
        <p>${couponDiscount}</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping:</p>
        <p>${shipping}</p>
      </div>
      <hr className="xl:my-2 my-2 w-[82%] m-auto border-gray-400" />
      <div className="flex justify-between font-semibold">
        <p>Total:</p>
        <p>${total}</p>
      </div>
      <button className="w-[100%] font-medium mb-4 rounded-lg h-12 p-2 bg-[#2F9379] text-white flex items-center justify-center mt-4">
        Continue
      </button>
    </div>
  );
};

export default OrderSummary;

import Items from "./Items";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  return (
    <>
      <div className="flex flex-col xl:flex xl:flex-row xl:ml-20 xl:mr-24 xl:mt-4 xl:mb-8  ">
        <Items />
        <OrderSummary />
      </div>
    </>
  );
};

export default Cart;

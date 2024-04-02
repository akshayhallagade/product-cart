import { useSelector } from "react-redux";

const TotalPay = () => {
  const cartTotal = useSelector((state) => state.cart.total);
  return (
    <div className="px-6 py-2">
      <h1 className="text-2xl font-bold ">Total Price</h1>
      <p>You have to pay : {cartTotal}$</p>
      <button className="px-2 bg-blue-700 mt-4">Pay</button>
    </div>
  );
};

export default TotalPay;

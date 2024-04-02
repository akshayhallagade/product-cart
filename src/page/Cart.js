import CartTable from "../components/CartTable";
import TotalPay from "../components/TotalPay";

const Cart = () => {
  return (
    <div className="w-screen h-screen bg-slate-400 flex items-center flex-col py-10">
      <h1 className="text-2xl text-center font-extrabold underline">CART</h1>
      <div className="flex w-full p-4">
        <CartTable />
        <TotalPay />
      </div>
    </div>
  );
};

export default Cart;

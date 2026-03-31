import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const Cart = ({ carts,setCarts }) => {

  const total = carts.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price;
  }, 0);
  const handlePayment=()=>{
    setCarts([])
    toast.success("Cart empty!")
  }
  const handleDelete=(item)=>{
    const filteredArray=carts.filter(c=>c.id !== item.id)
    
    setCarts(filteredArray)
    toast.success("Tool removed!")

  }

  return (
    <div className="p-8 border border-gray-100 shadow-md max-w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold">Your Cart</h2>
      {
        carts.length===0 ? <><div className="flex flex-col items-center justify-center gap-3 bg-purple-100 rounded-md  mt-3 py-12"><ShoppingCart className="text-purple-500 text-5xl"  /><p className="text-purple-500">Cart is empty</p></div></> : <> {carts.map((item) => (
        <div key={item.id} className="bg-gray-100 p-2 mt-1 rounded-md">
          <div className="flex justify-between items-center p-2">
            <div className="flex gap-3 items-center">
              <img src={item.image} alt="" className="w-10 h-10" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>{item.price}</p>
              </div>
            </div>

            <button onClick={()=>handleDelete(item)} className="btn text-red-500 border-none">
              Remove
            </button>
          </div>
        </div>
      ))}

      
      <div className="flex justify-between items-center mt-4 font-semibold text-lg">
        <p>Total:</p>
        <p>${total}</p>
      </div>

      <button onClick={handlePayment} className="btn btn-primary w-full rounded-md mt-4">
        Proceed to checkout
      </button></>
      }

     
    </div>
  );
};

export default Cart;
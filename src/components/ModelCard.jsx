import React, { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const getStatusClass = (status) => {
  switch (status) {
    case "New":
      return "bg-green-100 text-green-500 rounded-full px-3 py-1 text-sm";
    case "popular":
      return "bg-purple-100 text-purple-500 rounded-full px-3 py-1 text-sm";
    case "Best Seller":
      return "bg-orange-100 text-orange-500 rounded-full px-3 py-1 text-sm";
    default:
      return "bg-gray-100 text-gray-500 rounded-full px-3 py-1 text-sm";
  }
};

const ModelCard = ({ model ,carts, setCarts }) => {
  const [isBought, setIsBought] = useState(false);
  const handleBuyBtn=()=>{
    setIsBought(true)
    const isFound=carts.find(item=>item.id===model.id)

    if (isFound){
      toast.error("oops! Tool is already added")
      return
    }
    
    setCarts([...carts,model])
    toast.success("Tool added to cart!")
  }

  return (
    <div className="border border-gray-100 rounded-xl p-3 space-y-3 shadow-md hover:shadow-xl transition">

     
      <div className="flex justify-between items-center">
        <div className="rounded-full bg-gray-50 p-3">
          <img src={model.image} alt={model.title} className="w-10 h-10" />
        </div>

        <span className={getStatusClass(model.status)}>
          {model.status}
        </span>
      </div>

      
      <div>
        <h2 className="text-xl font-semibold">{model.title}</h2>
        <p className="text-gray-500 text-sm whitespace-pre-line">
          {model.description}
        </p>
        <p className="font-semibold mt-2">{model.price}</p>
      </div>

      
      <div className="space-y-1">
        {model.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <Check className="h-4 w-4 text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      
      <button
        onClick={handleBuyBtn}
        className="w-full btn btn-primary rounded-full text-white"
      >
        {isBought ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ModelCard;
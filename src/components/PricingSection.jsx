import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-purple-500 py-16 max-[540px]:py-8 px-4 max-[540px]:px-2 text-center text-white">
      
      
      <h2 className="text-4xl max-[540px]:text-3xl  font-semibold">
        Ready To Transform Your Workflow?
      </h2>

     
      <p className="mt-4 max-[540px]:mt-2 text-sm  text-white/80 max-w-2xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.
        <br />
        Start your free trial today.
      </p>

      
      <div className="mt-6 max-[540px]:mt-4 flex justify-center gap-4 max-[540px]:gap-2 items-center flex-wrap">
        
        
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Explore Products
        </button>

        
        <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
          View Pricing
        </button>
      </div>

      
      <p className="mt-6 max-[540px]:mt-4 text-sm text-white/70">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default PricingSection;
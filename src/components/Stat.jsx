import React from 'react';

const Stat = () => {
    return (
         <div className="bg-purple-500 py-10">
      <div className="max-w-full flex justify-around items-center text-white text-center">

       
        <div>
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-sm mt-1 opacity-80">Active Users</p>
        </div>

       
        <div className="h-10 w-px bg-white/40"></div>

        
        <div>
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-sm mt-1 opacity-80">Premium Tools</p>
        </div>

        
        <div className="h-10 w-px bg-white/40"></div>

        
        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-sm mt-1 opacity-80">Rating</p>
        </div>

      </div>
    </div>
    );
};

export default Stat;
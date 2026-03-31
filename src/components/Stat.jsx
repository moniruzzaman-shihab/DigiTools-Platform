import React from 'react';

const Stat = () => {
    return (
        <>
            <div className="bg-purple-500 py-10 max-[540px]:py-6">
                <div className="max-w-full flex max-[540px]:flex-col justify-around max-[540px]:justify-center items-center text-white text-center">


                    <div>
                        <h2 className="text-4xl max-[540px]:text-3xl font-semibold">50K+</h2>
                        <p className="text-sm mt-1 opacity-80">Active Users</p>
                    </div>


                    <div className="h-10 max-[540px]:h-6 w-px bg-white/40"></div>


                    <div>
                        <h2 className="text-4xl max-[540px]:text-3xl font-semibold">200+</h2>
                        <p className="text-sm mt-1 opacity-80">Premium Tools</p>
                    </div>


                    <div className="h-10 max-[540px]:h-6 w-px bg-white/40"></div>


                    <div>
                        <h2 className="text-4xl max-[540px]:text-3xl font-semibold">4.9</h2>
                        <p className="text-sm mt-1 opacity-80">Rating</p>
                    </div>

                </div>
            </div>
            <div className='text-center p-4 max-[540px]:p-3 m-6 max-[540px]:m-4'>
                <h2 className='text-3xl max-[540px]:text-2xl font-semibold'>Premium Digital Tools</h2>
                <p className='text-gray-500 max-[540px]:text-sm'>Choose from our curated collection of premium digital products designed 
                    <br /> to boost your productivity and creativity.</p>
            </div>
        </>
    );
};

export default Stat;
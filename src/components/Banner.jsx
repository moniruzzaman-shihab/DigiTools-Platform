import React from 'react';
import bannerImg from "../assets/banner.png"
import circle from "../assets/Group 5.png"
import { Play } from 'lucide-react';

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex max-w-11/12 mx-auto max-[540px]:flex-col max-[540px]:justify-center items-center overflow-hidden max-[540px]:mx-2">
            <div className=" mx-auto grid grid-cols-2 max-[540px]:grid-cols-1 gap-10 max-[540px]:gap-6 items-center relative z-10">
                
                <div className="space-y-4 max-[540px]:space-y-2">
                    <div className="inline-flex items-center gap-2 bg-purple-100  text-purple-500 text-sm font-medium px-5 max-[540px]:px-3 py-2 rounded-full max-[540px]:justify-center">
                        <img src={circle} alt="" /> New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl max-[540px]:text-3xl  font-semibold  ">
                       Supercharge Your
                        <br />
                        <span className=" font-semibold text-4xl max-[540px]:text-3xl">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg max-[540px]:text-sm text-gray-500 max-w-lg max-[540px]:max-w-sm">
                        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 max-[540px]:gap-3 pt-4 max-[540px]:pt-3">
                        <button className="btn btn-primary rounded-full">
                            Explore Products
                            
                        </button>
                        <button className="btn btn-outline rounded-full border border-purple-500 text-purple-500 ">
                            <Play/> Watch Demo
                            
                        </button>
                    </div>

                    
                </div>

               
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 max-[540px]:h-auto max-[540px]:mb-2 w-auto object-contain drop-shadow-md rounded-3xl max-[540px]:rounded-2xl "
                            src={bannerImg}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
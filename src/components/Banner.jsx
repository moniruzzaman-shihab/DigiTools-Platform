import React from 'react';
import bannerImg from "../assets/banner.png"
import circle from "../assets/Group 5.png"
import { Play } from 'lucide-react';

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-purple-100  text-purple-500 text-sm font-medium px-5 py-2 rounded-full">
                        <img src={circle} alt="" /> New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl  font-semibold  ">
                       Supercharge Your
                        <br />
                        <span className=" font-semibold text-4xl">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-gray-500 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
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
                            className="relative h-130 w-auto object-contain drop-shadow-md rounded-3xl "
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
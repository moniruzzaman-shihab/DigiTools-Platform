import React from "react";
import { User, Package, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: User,
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: Package,
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: Rocket,
  },
];

const Steps = () => {
  return (
    <div id="steps" className="bg-purple-100 py-16 max-[540px]:py-10">
      
     
      <div className="text-center mb-10 max-[540px]:mb-6">
        <h2 className="text-3xl max-[540px]:text-2xl font-semibold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 text-sm mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      
      <div className="max-w-11/12 mx-auto grid grid-cols-3 max-[540px]:grid-cols-1 gap-6 max-[540px]:gap-4 px-4 max-[540px]:px-2">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="relative bg-white rounded-xl shadow-md p-6 text-center "
            >
              
              
              <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs w-7 h-7 flex items-center justify-center rounded-full">
                {step.id}
              </div>

              
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <Icon className="w-8 h-8 text-purple-500" />
                </div>
              </div>

             
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
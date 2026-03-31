import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
  },
  {
    title: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    status: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
  },
  {
    title: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-16 max-[540px]:py-10 px-4 max-[540px]:px-2">
      
     
      <div className="text-center mb-10 max-[540px]:mb-6">
        <h2 className="text-3xl max-[540px]:text-2xl font-semibold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-sm mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      
      <div className="grid grid-cols-3 max-[540px]:grid-cols-1 gap-6 max-[540px]:gap-4 max-w-11/12 mx-auto">
        {plans.map((plan, index) => {
          const isPopular = plan.status === "Most Popular";

          return (
            <div
              key={index}
              className={`relative rounded-xl p-6 shadow-sm border border-gray-200
              ${
                isPopular
                  ? "bg-purple-500"
                  : "bg-white"
              }`}
            >
              
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full font-medium text-black">
                  Most Popular
                </div>
              )}

              
              <h3 className="text-lg font-semibold">{plan.title}</h3>
              <p
                className={`text-sm mt-1 ${
                  isPopular ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              
              <div className="mt-4">
                <span className={`text-sm ml-1 ${
                    isPopular ? "text-white" : "text-black-500"
                  } text-4xl font-semibold`}>${plan.price}</span>
                <span
                  className={`text-sm ml-1 ${
                    isPopular ? "text-white" : "text-gray-500"
                  }`}
                >
                  /Month
                </span>
              </div>

              
              <div className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 ${
                        isPopular ? "text-green-300" : "text-green-500"
                      }`}
                    />
                    <span
                      className={
                        isPopular ? "text-gray-200" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              
              <button
                className={`mt-6 w-full py-2 rounded-full font-medium transition
                ${
                  isPopular
                    ? "bg-white text-purple-600 hover:bg-gray-200"
                    : "bg-purple-500 text-white hover:bg-purple-600"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
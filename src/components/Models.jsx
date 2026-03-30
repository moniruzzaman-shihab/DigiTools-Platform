import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise ,carts, setCarts}) => {
  const models = use(modelPromise);

  return (
    <div className="py-8 px-4">
      <div className="text-center space-y-2 pb-8">
        <h2 className="font-semibold text-4xl">Premium Digital Tools</h2>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products designed
          <br />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-11/12 mx-auto">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Models;
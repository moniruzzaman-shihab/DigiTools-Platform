import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise ,carts, setCarts}) => {
  const models = use(modelPromise);

  return (
    <div className="py-8 px-4">
      

      <div className="grid grid-cols-3 max-[540px]:grid-cols-1 gap-6 max-[540px]:gap-4 max-w-11/12 mx-auto">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Models;
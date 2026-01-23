import React from "react";
import ElectricBorder from "./ElectricBorder";

const AdventureCard = ({ adventure }) => {
  const { title, image, ecoFriendlyFeatures, id } = adventure;

  return (
    <ElectricBorder
      color="#7F00FF"
      speed={1}
      chaos={0.12}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <div className="card bg-base-100 shadow-xl border border-gray-200 flex flex-col h-full rounded-xl overflow-hidden">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt={title}
            className="rounded-xl h-48 w-full object-cover"
          />
        </figure>

        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title text-purple-700">{title}</h2>

          <div className="mt-2 flex-grow">
            <p className="font-semibold text-sm mb-2 text-purple-600">
              Eco-Features:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {ecoFriendlyFeatures.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="card-actions mt-4">
            <button className="btn btn-primary w-full bg-purple-700 hover:bg-purple-800 border-none">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
};

export default AdventureCard;

import { AiFillStar } from "react-icons/ai";
import React from "react";
import { Restaurant } from "../data";

interface Props {
  className?: string;
}

const RestaurantItem: React.FC<Partial<Restaurant> & Props> = ({
  name,
  image,
  rating,
  className,
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg bg-white h-[140px] flex flex-col ${className}`}
    >
      <div className="w-full flex-1 bg-red relative overflow-hidden">
        <img className="max-h-full w-full object-cover" src={image} alt="" />
      </div>
      <div className="p-2 flex justify-between items-center">
        <h3 className="text-gray-900 text-sm font-medium">{name}</h3>
        <div className="center space-x-1">
          <p className="text-xs">{rating} </p>
          <AiFillStar className="text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;

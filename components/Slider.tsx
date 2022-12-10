import React from "react";
import RestaurantItem from "./RestaurantItem";
import { Restaurant } from "../data";
import Link from "next/link";

interface Props {
  name: string;
  restaurants: Restaurant[];
}

const Slider: React.FC<Props> = ({ name, restaurants }) => {
  return (
    <div className="pl-[2vw]">
      <div className="flex justify-between items-center font-bold pr-[2vw]">
        <h2 className="text-2xl text-gray-dark">{name}</h2>
        <p className="text-red">Zobraziť všetko</p>
      </div>
      <ul className="w-full flex space-x-4 overflow-x-auto flex-nowrap pt-3 pb-4 scrollbar-hide pr-[2vw]">
        {restaurants?.map((restaurant, index) => {
          return (
            <Link href={`/detail/${restaurant?.slug}`} key={index}>
              <RestaurantItem
                name={restaurant.name}
                rating={restaurant.rating}
                image={restaurant.image}
                className="min-w-[200px]"
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Slider;

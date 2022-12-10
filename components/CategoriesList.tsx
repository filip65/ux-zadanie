import { useState } from "react";

const categories = [
  "Všetko",
  "Kebab",
  "Pizaa",
  "Cestoviny",
  "Šalaty",
  "Dezerty",
];

const CategoriesList = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <ul className="w-full overflow-x-auto flex space-x-4 py-6 scrollbar-hide pl-[3vw]">
      {categories?.map((item, index) => {
        return (
          <li
            key={index}
            className={`shadow-lg py-2 px-3 rounded-full transition-all ${
              item === selectedCategory
                ? "bg-red text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;

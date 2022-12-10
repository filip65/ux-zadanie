import Layout from "../components/Layout";
import Container from "../components/Container";
import { BsSearch } from "react-icons/bs";
import { allRestaurants } from "../data";
import { RiEBike2Fill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const Search = () => {
  return (
    <Layout>
      <Container>
        <div className="flex items-center bg-white px-2 rounded-lg mb-8">
          <BsSearch className="text-red w-4 h-4" />
          <input
            type="text"
            className="w-full border-none bg-transparent !focus:outline:none py-2"
            placeholder="Zadajte názov reštaurácie/jedla"
          />
        </div>

        <ul>
          {allRestaurants?.map((restaurant, index) => (
            <Link href={`detail/${restaurant?.slug}`} key={index}>
              <li className="flex bg-white border-b border-b-gray p-2">
                <img
                  src={restaurant?.image}
                  alt="restaurant"
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1 ml-2 flex flex-col justify-between">
                  <h3 className="font-bold">{restaurant?.name}</h3>
                  <div className="flex items-center">
                    <RiEBike2Fill />
                    <p className="text-xs ml-2">
                      {restaurant?.delivery?.cost}€
                    </p>
                  </div>
                </div>
                <div className="flex items-end ">
                  <p className="text-xs mr-2">{restaurant?.rating}</p>
                  <AiFillStar className="text-yellow-300" />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default Search;

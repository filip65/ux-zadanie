import { useRouter } from "next/router";
import { getRestaurantBySlug, Meal } from "../../data";
import { SlOptions } from "react-icons/sl";
import { IoMdArrowBack } from "react-icons/io";
import Container from "../../components/Container";
import Link from "next/link";
import { BiLike, BiTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { RiEBike2Fill } from "react-icons/ri";
import React, { useContext, useState } from "react";
import Sheet from "react-modal-sheet";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";
import { OrderContext } from "../_app";

const RestaurantDetail = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [count, setCount] = useState<number>(0);

  const { setOrder } = useContext(OrderContext);

  const router = useRouter();

  const slug = router.query.slug;

  const restaurant = getRestaurantBySlug(slug as string);

  const decrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const increase = () => setCount((prev) => prev + 1);

  const confirm = () => {
    if (selectedMeal) {
      console.log("log");
      setOrder(selectedMeal);
      router.push("/summary");
    }
  };

  return (
    <div className="relative">
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="space-y-6 w-[90%] mx-auto pb-6">
              <div className="bg-gray p-3 rounded-lg shadow-xl">
                <h1 className="text-2xl font-semibold">{selectedMeal?.name}</h1>
                <p className="py-1 px-4 bg-red text-white text-xs w-fit rounded-full my-3">
                  {selectedMeal?.price}€
                </p>
                <p>{selectedMeal?.ingredients}</p>
              </div>

              <div className="bg-gray  p-3 rounded-lg shadow-xl">
                <h1 className="text-xl font-semibold">Extra</h1>
                <ul>
                  {selectedMeal?.extra?.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <input
                          id={item?.name}
                          type="checkbox"
                          className="text-red rounded mr-2"
                        />
                        <label htmlFor={item?.name} className="text-sm">
                          {item?.name}
                        </label>
                      </div>

                      <p className="bg-red px-2 text-white rounded-full text-xs">
                        +{item?.price} €
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center bg-gray px-4 py-1 shadow-lg rounded-full space-x-3">
                  <button onClick={() => decrease()}>
                    <HiOutlineMinusSm className="text-red w-6 h-6" />
                  </button>
                  <p>{count}</p>
                  <button onClick={() => increase()}>
                    <BsPlusLg className="text-red" />
                  </button>
                </div>
                <button
                  className="bg-gray px-4 py-1 shadow-lg rounded-full"
                  onClick={confirm}
                >
                  {`Pokračovať ${selectedMeal?.price}€`}
                </button>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
      <div>
        <div className="relative">
          <img
            src={restaurant?.image}
            alt=""
            className="w-full object-cover h-[200px]"
          />
          <div className="absolute top-4 left-0 w-full flex justify-between px-[2vw]">
            <Link href="/home">
              <Button>
                <IoMdArrowBack className="text-white w-6 h-6" />
              </Button>
            </Link>
            <Button>
              <SlOptions className="text-white w-6 h-6" />
            </Button>
          </div>
        </div>

        <Container>
          <div className="flex justify-between items-center my-4">
            <h1 className="font-bold text-3xl">{restaurant?.name}</h1>
            <BiLike className="w-6 h-6 text-red" />
          </div>

          <p className="text-lg mb-4">{restaurant?.description}</p>

          <ul className="bg-white rounded-lg shadow-xl mb-10">
            <li className="flex items-center p-2">
              <AiFillStar className="text-yellow-300" />{" "}
              <p className="ml-2">Hodnotenie: {restaurant?.rating}</p>
            </li>

            <li className="flex items-center p-2">
              <BiTimeFive />{" "}
              <p className="ml-2">
                Otváracie hodiny: {restaurant?.delivery?.time?.from} -{" "}
                {restaurant?.delivery?.time?.to}
              </p>
            </li>

            <li className="flex items-center p-2">
              <RiEBike2Fill />{" "}
              <p className="ml-2">
                Doručenie: {restaurant?.delivery?.duration}
              </p>
            </li>
          </ul>

          <ul>
            {restaurant?.menu?.map((menu_item, index) => (
              <li key={index}>
                <h2 className="font-semibold text-2xl">{menu_item?.name}</h2>
                <ul className="space-y-2">
                  {menu_item?.meals?.map((meal, index) => (
                    <li
                      key={index}
                      className="bg-white p-2 rounded-lg shadow-lg space-y-1"
                      onClick={() => {
                        console.log("******", meal);
                        setSelectedMeal(meal);
                        setOpen(true);
                      }}
                    >
                      <h3 className="font-bold">{meal?.name}</h3>
                      <p className="text-xs">{meal?.ingredients}</p>
                      <p className="text-red text-xs font-bold">
                        {meal?.price}€
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
};

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="p-2 bg-white-transparent rounded-full">
      {children}
    </button>
  );
};

export default RestaurantDetail;

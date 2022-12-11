import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { GrBookmark } from "react-icons/gr";
import { RiShoppingBagFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import { OrderContext } from "../pages/_app";

const BottomNavigation = () => {
  const router = useRouter();

  const { order } = useContext(OrderContext);

  return (
    <div className="flex justify-between items-center bg-white">
      <div className="flex justify-around flex-1">
        <Link href="/home">
          <HiHome
            className={`w-6 h-6 transition-all ${
              router.pathname === "/home" ? "text-red" : "text-black"
            }`}
          />
        </Link>
        <Link href="/search">
          <BsSearch
            className={`w-6 h-6 transition-all ${
              router.pathname === "/search" ? "text-red" : "text-black"
            }`}
          />
        </Link>
      </div>
      <Link href={`${!!order ? "/summary" : ""}`}>
        <div
          className={`bg-red p-5 rounded-full transform -translate-y-6 ${
            !order ? "grayscale" : ""
          }`}
        >
          <RiShoppingBagFill className="text-white w-6 h-6 transition-all" />
        </div>
      </Link>
      <div className="flex justify-around flex-1">
        <GrBookmark
          className={`w-6 h-6 transition-all ${
            router.pathname === "/bookmark" ? "text-red" : "text-black"
          }`}
        />
        <BsFillPersonFill
          className={`w-6 h-6 transition-all ${
            router.pathname === "/profile" ? "text-red" : "text-black"
          }`}
        />
      </div>
    </div>
  );
};

export default BottomNavigation;

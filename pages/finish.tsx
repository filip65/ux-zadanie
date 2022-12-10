import Layout from "../components/Layout";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const Finish = () => {
  const [stars, setStart] = useState<number>(1);

  return (
    <Layout>
      <div className="bg-white rounded-lg p-3 mb-4">
        <div className="flex items-start justify-between">
          <h2 className="font-base text-lg font-semibold">
            Odhadovaný čas donášky
          </h2>
          <p className="text-[2.5rem] font-semibold">15:48</p>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center">
            <p className="w-10 text-xs">15:20</p>
            <div className="bottom-line w-5 h-5 bg-red rounded-full"></div>
            <p className="ml-2 text-lg">Príprava jedla</p>
          </li>

          <li className="flex items-center">
            <p className="w-10 text-xs"></p>
            <div className="bottom-line w-5 h-5 border border-red rounded-full"></div>
            <p className="ml-2 text-lg">Vyzdvihnutie kurierom</p>
          </li>

          <li className="flex items-center">
            <p className="w-10 text-xs"></p>
            <div className="bottom-line w-5 h-5 border border-red rounded-full"></div>
            <p className="ml-2 text-lg">Preprava</p>
          </li>

          <li className="flex items-center">
            <p className="w-10 text-xs"></p>
            <div className="w-5 h-5 border border-red rounded-full"></div>
            <p className="ml-2 text-lg">Doručenie</p>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-3">
        <h2 className="text-lg font-semibold">Hodnotenie reštaurácie</h2>
        <ul className="flex justify-between my-2 px-4">
          {[...Array(5)].map((_, index) => (
            <li key={index} onClick={() => setStart(index + 1)}>
              {index < stars ? (
                <AiFillStar className="w-10 h-10 text-yellow-300" />
              ) : (
                <AiOutlineStar className="w-10 h-10 text-yellow-300" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Finish;

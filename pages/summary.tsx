import Layout from "../components/Layout";
import React, { useContext, useState } from "react";
import { OrderContext } from "./_app";
import Container from "../components/Container";
import { BsCreditCard } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

enum Delivery {
  courier = "courier",
  self = "self",
}

enum Payment {
  card = "card",
  cash = "cash",
}

const Summary = () => {
  const [delivery, setDelivery] = useState<Delivery>(Delivery.courier);
  const [payment, setPayment] = useState<Payment>(Payment.card);
  const { order } = useContext(OrderContext);

  console.log(order);

  return (
    <Layout navigation={false}>
      <Container>
        <div className="w-full p-2 bg-white flex space-x-4 rounded-2xl mb-6">
          <button
            className={`flex-1 py-3 rounded-2xl transition-all ${
              delivery === Delivery.courier
                ? "bg-red text-white"
                : "bg-transparent"
            }`}
            onClick={() => setDelivery(Delivery.courier)}
          >
            Donáška
          </button>
          <button
            className={`flex-1 py-3 rounded-2xl transition-all ${
              delivery === Delivery.self
                ? "bg-red text-white"
                : "bg-transparent"
            }`}
            onClick={() => setDelivery(Delivery.self)}
          >
            Vyzdvihnutie
          </button>
        </div>
      </Container>

      <div className="space-y-2 pb-8">
        <div className="flex bg-white rounded-lg p-3">
          <img
            src={order?.image}
            alt="summary_image"
            className="w-16 h-16 rounded-lg"
          />
          <div className="flex flex-col justify-around ml-2">
            <h2 className="font-bold">{order?.name}</h2>
            <p className="bg-red px-2 py-1 rounded-full w-fit text-xs text-white">
              {order?.price}€
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg py-2">
          <ul className="">
            <li className="flex justify-between py-1 px-4 font-bold">
              <p>Medzisúčet</p>
              <p>10,49€</p>
            </li>

            <li className="flex justify-between py-1 px-4">
              <p>Poplatok za malú objednávku</p>
              <p>1,20€</p>
            </li>

            <li className="flex justify-between py-1 px-4">
              <p>Prepitné kurierovi</p>
              <p>2€</p>
            </li>

            <li className="flex justify-between py-1 px-4 border-b border-gray">
              <p>Doručenie</p>
              <p>2,29€</p>
            </li>

            <li className="flex justify-between py-1 px-4">
              <p>Doručenie</p>
              <p>2,29€</p>
            </li>
          </ul>
        </div>

        <div className="p-3 bg-white rounded-lg font-bold">
          <h2>Platba</h2>
          <div className="flex space-x-4">
            <div
              className={`flex flex-col flex-1 justify-center items-center rounded space-y-1 p-2 ${
                payment === Payment.card
                  ? "border-[3px] border-red"
                  : "border border-black"
              }`}
              onClick={() => setPayment(Payment.card)}
            >
              <h3>Karta</h3>
              <BsCreditCard className="w-8 h-8" />
              <p className="bg-red text-white text-xs rounded-full px-2">
                2% zľava
              </p>
            </div>

            <div
              className={`flex flex-col flex-1 justify-center items-center rounded space-y-1 p-2 ${
                payment === Payment.cash
                  ? "border-2 border-red"
                  : "border border-black"
              }`}
              onClick={() => setPayment(Payment.cash)}
            >
              <h3>Platba kurierovi</h3>
              <RiEBike2Fill className="w-8 h-8" />
            </div>
          </div>
        </div>

        <input
          type="text"
          placeholder="Tu vložte zľavový kupón"
          className="w-full border-none rounded-lg py-3"
        />

        <div className="bg-white rounded-lg pb-2">
          <ul>
            <li className="flex items-center p-2 space-x-3">
              <RiEBike2Fill /> <p>20 - 35min</p>
            </li>
            <li className="flex items-center px-2">
              <HiOutlineLocationMarker />
              <input
                type="text"
                placeholder="Vyberte svoju polohu"
                className="border-none w-full"
              />
            </li>
          </ul>
          <img
            src="/images/map.png"
            alt=""
            className="w-full h-[130px] object-cover mb-4"
          />

          <div className="center">
            <Link href="/finish" className="w-full max-w-[250px]">
              <button className="bg-red text-white font-bold p-2 rounded-full w-full">
                Objednať
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Summary;

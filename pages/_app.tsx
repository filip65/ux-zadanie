import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Meal } from "../data";

export const OrderContext = React.createContext<{
  order: Meal | null;
  setOrder: any;
}>({
  order: null,
  setOrder: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [order, setOrder] = useState(null);

  return (
    <OrderContext.Provider value={{ order: order, setOrder }}>
      <Component {...pageProps} />
    </OrderContext.Provider>
  );
}

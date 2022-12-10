import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[94vw] mx-auto">{children}</div>;
};

export default Container;

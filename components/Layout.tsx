import React from "react";
import BottomNavigation from "./BottomNavigation";

const Layout = ({
  children,
  navigation = true,
}: {
  children: React.ReactNode;
  navigation?: boolean;
}) => {
  return (
    <div className="min-h-screen max-h-screen flex flex-col pt-12 bg-gray">
      <div className="flex-1 overflow-y-auto">{children}</div>
      {navigation && <BottomNavigation />}
    </div>
  );
};

export default Layout;

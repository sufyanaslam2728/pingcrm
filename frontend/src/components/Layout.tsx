import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 md:p-12 overflow-y-auto flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

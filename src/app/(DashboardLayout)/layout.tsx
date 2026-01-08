import React from "react";
import Sidebar from "../components/shared/sidebar/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="flex ">
      <div>
        <Sidebar/>
      </div>
      <section className="flex-1">{children}</section>
    </section>
  );
};

export default DashboardLayout;

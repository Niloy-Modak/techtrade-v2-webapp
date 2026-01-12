import Sidebar from "@/components/shared/sidebar/Sidebar";
import React from "react";


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

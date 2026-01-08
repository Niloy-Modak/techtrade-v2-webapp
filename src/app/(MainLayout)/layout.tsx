import React from "react";
import NavBar from "../components/shared/navbar/NavBar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
        <NavBar/>
      <main>{children}</main>
    </section>
  );
};

export default MainLayout;

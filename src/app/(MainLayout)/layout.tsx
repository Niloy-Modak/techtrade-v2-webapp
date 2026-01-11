import Footer from "@/components/shared/footer/Footer";
import NavBar from "@/components/shared/navbar/NavBar";
import React from "react";


const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <NavBar />
      <main className="pt-16 min-h-[calc(100vh-385px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer/>
    </section>
  );
};

export default MainLayout;

"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import Carrousel from "./components/carrousel";
import Calender from "./components/calender";

const home = () => {
  return (
    <main className="relative flex flex-col">
      <Header />
      <div className="h-lvh">
        <Carrousel />
        <div className="relative block mt-3 pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16 text-[16px] font-bold">
          Calendario
        </div>
        <Calender />
      </div>
      <Footer />
    </main>
  );
};

export default home;

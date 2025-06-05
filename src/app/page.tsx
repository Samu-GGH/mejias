"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import Carrousel from "./components/carrousel";
import Calender from "./components/calender";

const home = () => {
  return (
    <main className="relative flex flex-col">
      <Header />
      <div className="h-fit mb-16 lg:pt-2">
        <Carrousel />
        <div className="relative block mt-3 pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-18 lg:pr-18 text-[16px] lg:text-[24px] font-bold">
          Calendario
        </div>
        <Calender />
        <div className="masCalendario absolute inline-flex flex-wrap items-center mt-3 w-25 text-center p-1 text-[12px] md:text-[16px] border-black border-2 rounded-2xl right-[5%] lg:right-[50%] lg:translate-x-[50%] cursor-pointer font-bold hover:bg-[#f11515] hover:text-white hover:border-red-950 transition-all duration-150 ease-out">
          <span className="relative w-full">Mas</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="chevron size-6 absolute right-1"
          >
            <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default home;

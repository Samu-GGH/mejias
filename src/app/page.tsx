"use client";
import Carrousel from "./components/carrousel";
import Calender from "./components/calender";
import Newscontainer from "./components/noticiasContainer";
import Ranking from "./components/ranking";
import Categories from "./components/categories";

const home = () => {
  return (
    <main className="relative flex flex-col">
      <div className="content h-fit mb-16 lg:pt-2">
        <Carrousel />
        <div className="calenderContainer relative block mt-3 mb-15">
          <span className="relative block pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-18 lg:pr-18 text-[16px] lg:text-[24px] font-bold">
            Calendario
          </span>
          <Calender />
          <div className="masCalendario absolute inline-flex flex-wrap items-center justify-center w-25 p-1 text-[12px] md:text-[16px] -bottom-12 border-black border-2 rounded-2xl right-[5%] lg:right-[50%] lg:translate-x-[50%] cursor-pointer font-bold hover:bg-[#f11515] hover:text-white hover:border-red-950 transition-all duration-150 ease-out">
            <span className="relative w-fit">Mas</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="chevron size-6 absolute right-2"
            >
              <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className="noticiasContainer relative block mt-3 mb-15">
          <span className="relative block pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-18 lg:pr-18 text-[16px] lg:text-[24px] font-bold">
            Noticias
          </span>
          <Newscontainer />
          <div className="masNoticias absolute inline-flex flex-wrap items-center justify-center w-25 p-1 text-[12px] md:text-[16px] -bottom-12 border-black border-2 rounded-2xl right-[5%] lg:right-[50%] lg:translate-x-[50%] cursor-pointer font-bold hover:bg-[#f11515] hover:text-white hover:border-red-950 transition-all duration-150 ease-out">
            <span className="relative w-fit">Mas</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="chevron size-6 absolute right-2"
            >
              <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className="categoriasContainer relative block mt-3 mb-15">
          <span className="relative block pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-18 lg:pr-18 text-[16px] lg:text-[24px] font-bold">
            Categorias
          </span>
          <Categories />
        </div>
        <div className="rankingContainer relative block mt-3 mb-15">
          <span className="relative block pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-18 lg:pr-18 text-[16px] lg:text-[24px] font-bold">
            Rankings
          </span>
          <Ranking />
          <div className="masRankings absolute inline-flex flex-wrap items-center justify-center w-25 p-1 text-[12px] md:text-[16px] -bottom-12 border-black border-2 rounded-2xl right-[5%] lg:right-[50%] lg:translate-x-[50%] cursor-pointer font-bold hover:bg-[#f11515] hover:text-white hover:border-red-950 transition-all duration-150 ease-out">
            <span className="relative w-fit">Mas</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="chevron size-6 absolute right-2"
            >
              <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default home;

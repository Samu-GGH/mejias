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
        <Calender />
      </div>
      <Footer />
    </main>
  );
};

export default home;

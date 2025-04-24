"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import Carrousel from "./components/carrousel";

const home = () => {
  return (
    <main className="relative flex flex-col">
      <Header />
      <div className="h-lvh">
        <Carrousel />
      </div>
      <Footer />
    </main>
  );
};

export default home;

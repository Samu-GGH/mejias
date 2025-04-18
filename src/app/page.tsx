"use client";
import Header from "./components/header";

const home = () => {
  return (
    <main className="relative flex flex-col">
      <Header />
      <div className="h-lvh"></div>
      <footer className="BGCcomponent text-white relative flex justify-evenly place-items-center h-82 md:h-40 w-full p-5"></footer>
    </main>
  );
};

export default home;

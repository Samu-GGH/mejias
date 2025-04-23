"use client";
import Header from "./components/header";
import Footer from "./components/footer";

const home = () => {
  return (
    <main className="relative flex flex-col">
      <Header />
      <div className="h-lvh"></div>
      <Footer />
    </main>
  );
};

export default home;

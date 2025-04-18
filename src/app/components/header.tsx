"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  // Especificamos que el ref se usará en un elemento <li>
  const submenuRef = useRef<HTMLLIElement>(null);

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  //cerrar el submenu al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        event.target instanceof Node &&
        !submenuRef.current.contains(event.target)
      ) {
        setIsSubmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative flex justify-evenly md:justify-between h-20 md:h-16 p-2 flex-wrap place-items-center BGCcomponent text-white">
      <div className="text-4xl font-bold md:ml-20">
        <Link href="/">Mejias</Link>
      </div>

      <nav className="w-full md:w-[40%]">
        <ul className="links flex space-x-4 place-items-center justify-evenly text-sm">
          <li className="m-0.5 w-[20%] elAfter">
            <Link
              href="./noticias"
              className="inline-block w-full text-center hover:font-bold transition-all duration-100 "
            >
              Noticias
            </Link>
          </li>
          <li className="m-0.5 w-[20%]">
            <Link
              href="./calendario"
              className="inline-block w-full text-center hover:font-bold transition-all duration-100"
            >
              Calendario
            </Link>
          </li>
          {/* Se asigna el ref en este elemento <li> */}
          <li className="relative m-0.5 w-[20%]" ref={submenuRef}>
            {/* Se agrega la clase "group" para poder usar sus modificadores en los elementos hijos */}
            <button
              onClick={toggleSubmenu}
              className="group inline-flex flex-wrap justify-center place-items-center w-full text-center hover:font-bold transition-all duration-100 cursor-pointer focus:outline-none"
            >
              Plantilla{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`size-4 transform transition-all duration-200 ${
                  isSubmenuOpen ? "rotate-180" : ""
                } [stroke-width:1.5] group-hover:[stroke-width:2.5]`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-red-500 rounded w-30 shadow-lg transition-opacity duration-200 ${
                isSubmenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li>
                <Link
                  href="#categoria1"
                  className="block px-4 py-2 hover:bg-red-600"
                >
                  Categoría 1
                </Link>
              </li>
              <li>
                <Link
                  href="#categoria2"
                  className="block px-4 py-2 hover:bg-red-600"
                >
                  Categoría 2
                </Link>
              </li>
              <li>
                <Link
                  href="#categoria3"
                  className="block px-4 py-2 hover:bg-red-600"
                >
                  Categoría 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="m-0.5 w-[20%]">
            <Link
              href="./institucion"
              className="inline-block w-full text-center hover:font-bold transition-all duration-100"
            >
              Institución
            </Link>
          </li>
          <li className="m-0.5 w-[20%]">
            <Link
              href="./contacto"
              className="inline-block w-full text-center hover:font-bold transition-all duration-100"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

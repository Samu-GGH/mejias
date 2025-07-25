"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // Especificamos que el ref se usará en un elemento <li>
  const submenuRef = useRef<HTMLLIElement>(null);

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const toggleNavBar = () => {
    setIsNavOpen((prev) => !prev);
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
    <header className="relative flex justify-evenly lg:justify-between h-20 md:h-22 lg:h-15 p-2 flex-wrap place-items-center BGCcomponent text-white select-none shadow-lg">
      <button
        onClick={toggleNavBar}
        className="button-navbar absolute left-6 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="text-4xl font-bold md:mb-3 lg:ml-20">
        <Link href="/">Mejias</Link>
      </div>

      <nav
        className={`navbar absolute md:relative flex flex-col left-0 top-0 h-120 md:h-fit w-full lg:w-[40%] pt-10 md:pt-0 md:place-content-center z-100 bg-red-950 md:bg-transparent -translate-x-[101%] md:translate-0 transition-all duration-200 ease-in-out ${
          isNavOpen ? "translate-x-0" : "-translate-x-[101%]"
        }`}
      >
        <button
          onClick={toggleNavBar}
          className="absolute top-3 right-3 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="links flex flex-wrap md:flex-nowrap space-x-4 place-content-start md:place-items-center justify-evenly text-sm h-full md:w-full z-150">
          <li className="mb-4 mt-4 m-0.5 md:m-0.5 w-full md:w-[20%]">
            <Link
              href="./noticias"
              className="inline-block w-full text-center hover:font-bold transition-all duration-100 "
            >
              Noticias
            </Link>
          </li>
          <li className="mb-4 m-0.5 md:m-0.5 w-full md:w-[20%]">
            <Link
              href="./calendario"
              className="inline-block w-full text-center hover:font-bold transition-all duration-100"
            >
              Calendario
            </Link>
          </li>
          {/* Se asigna el ref en este elemento <li> */}
          <li
            className="relative mb-4 m-0.5 md:m-0.5 w-full md:w-[20%]"
            ref={submenuRef}
          >
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
                  isSubmenuOpen
                    ? "rotate-90 md:rotate-180"
                    : "-rotate-90 md:rotate-0"
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
              className={`absolute left-[100%] -top-3.5 md:top-[90%] lg:top-7 md:left-0 mt-2 bg-red-950 md:bg-red-500 w-30 md:w-full lg:w-30 shadow-lg transition-opacity duration-200 ${
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
          <li className="mb-4 m-0.5 w-full md:m-0.5 md:w-[20%]">
            <Link
              href="./institucion"
              className="inline-block w-full text-center hover:font-bold transition-all duration-100"
            >
              Institución
            </Link>
          </li>
          <li className="mb-4 m-0.5 w-full md:m-0.5 md:w-[20%]">
            <Link
              href="./contacto"
              className="inline-block w-full text-center hover:font-bold transition-all duration-100"
            >
              Contacto
            </Link>
          </li>
        </ul>
        <div className="md:hidden absolute flex flex-wrap bottom-0 justify-evenly place-content-center w-full h-15 z-200">
          <Link
            href="https://www.instagram.com/escuelamejiafmm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g fill="#ffffff">
                <g transform="scale(5.12,5.12)">
                  <path d="M11.30078,2c-5.13623,0 -9.30078,4.16455 -9.30078,9.30078v27.5c0,5.13623 4.16455,9.29883 9.30078,9.29883h27.5c5.13623,0 9.29883,-4.1626 9.29883,-9.29883v-27.51172v-0.01172c-0.1114,-5.1242 -4.25068,-9.27734 -9.29883,-9.27734zM11.30078,4h27.5c3.95185,0 7.21022,3.24647 7.29883,7.32227v27.47852c0,4.06377 -3.23506,7.29883 -7.29883,7.29883h-5.80078v-17.09961h4.84766l1.33203,-8h-6.17969v-2c0,-0.55 0.05476,-0.59429 0.25195,-0.7207c0.1972,-0.12641 0.77741,-0.2793 1.74805,-0.2793h4v-6.72852l-0.69336,-0.22266c0,0 -3.17676,-1.04883 -6.30664,-1.04883c-2.9037,0 -5.04221,0.95344 -6.32031,2.63281c-1.27811,1.67937 -1.67969,3.90371 -1.67969,6.36719v2h-3v8h3v17.09961h-12.69922c-4.06377,0 -7.30078,-3.23506 -7.30078,-7.29883v-27.5c0,-4.06377 3.23701,-7.30078 7.30078,-7.30078zM32,12c2.16868,0 4.17455,0.53763 5,0.77344v3.22656h-2c-1.12936,0 -2.05032,0.09711 -2.82812,0.5957c-0.7778,0.49859 -1.17187,1.4543 -1.17187,2.4043v4h5.82031l-0.66797,4h-5.15234v19.09961h-5v-19.09961h-3v-4h3v-4c0,-2.23653 0.39959,-4.01062 1.27148,-5.15625c0.8719,-1.14563 2.23222,-1.84375 4.72852,-1.84375z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/escuelamejiafmm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g fill="#ffffff">
                <g transform="scale(5.12,5.12)">
                  <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/escuelamejiafmm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="x"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g fill="#ffffff">
                <g transform="scale(5.12,5.12)">
                  <path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/escuelamejiafmm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="whatsapp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g fill="#ffffff">
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,4.0791 1.11869,7.88588 2.98438,11.20898l-2.94727,10.52148c-0.09582,0.34262 -0.00241,0.71035 0.24531,0.96571c0.24772,0.25536 0.61244,0.35989 0.95781,0.27452l10.9707,-2.71875c3.22369,1.72098 6.88165,2.74805 10.78906,2.74805c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-3.72198,0 -7.20788,-0.97037 -10.23828,-2.66602c-0.22164,-0.12385 -0.48208,-0.15876 -0.72852,-0.09766l-9.60742,2.38086l2.57617,-9.19141c0.07449,-0.26248 0.03851,-0.54399 -0.09961,-0.7793c-1.84166,-3.12289 -2.90234,-6.75638 -2.90234,-10.64648c0,-11.60953 9.39047,-21 21,-21zM16.64258,13c-0.64104,0 -1.55653,0.23849 -2.30859,1.04883c-0.45172,0.48672 -2.33398,2.32068 -2.33398,5.54492c0,3.36152 2.33139,6.2621 2.61328,6.63477h0.00195v0.00195c-0.02674,-0.03514 0.3578,0.52172 0.87109,1.18945c0.5133,0.66773 1.23108,1.54472 2.13281,2.49414c1.80347,1.89885 4.33914,4.09336 7.48633,5.43555c1.44932,0.61717 2.59271,0.98981 3.45898,1.26172c1.60539,0.5041 3.06762,0.42747 4.16602,0.26563c0.82216,-0.12108 1.72641,-0.51584 2.62109,-1.08203c0.89469,-0.56619 1.77153,-1.2702 2.1582,-2.33984c0.27701,-0.76683 0.41783,-1.47548 0.46875,-2.05859c0.02546,-0.29156 0.02869,-0.54888 0.00977,-0.78711c-0.01897,-0.23823 0.0013,-0.42071 -0.2207,-0.78516c-0.46557,-0.76441 -0.99283,-0.78437 -1.54297,-1.05664c-0.30567,-0.15128 -1.17595,-0.57625 -2.04883,-0.99219c-0.8719,-0.41547 -1.62686,-0.78344 -2.0918,-0.94922c-0.29375,-0.10568 -0.65243,-0.25782 -1.16992,-0.19922c-0.51749,0.0586 -1.0286,0.43198 -1.32617,0.87305c-0.28205,0.41807 -1.4175,1.75835 -1.76367,2.15234c-0.0046,-0.0028 0.02544,0.01104 -0.11133,-0.05664c-0.42813,-0.21189 -0.95173,-0.39205 -1.72656,-0.80078c-0.77483,-0.40873 -1.74407,-1.01229 -2.80469,-1.94727v-0.00195c-1.57861,-1.38975 -2.68437,-3.1346 -3.0332,-3.7207c0.0235,-0.02796 -0.00279,0.0059 0.04687,-0.04297l0.00195,-0.00195c0.35652,-0.35115 0.67247,-0.77056 0.93945,-1.07812c0.37854,-0.43609 0.54559,-0.82052 0.72656,-1.17969c0.36067,-0.71583 0.15985,-1.50352 -0.04883,-1.91797v-0.00195c0.01441,0.02867 -0.11288,-0.25219 -0.25,-0.57617c-0.13751,-0.32491 -0.31279,-0.74613 -0.5,-1.19531c-0.37442,-0.89836 -0.79243,-1.90595 -1.04102,-2.49609v-0.00195c-0.29285,-0.69513 -0.68904,-1.1959 -1.20703,-1.4375c-0.51799,-0.2416 -0.97563,-0.17291 -0.99414,-0.17383h-0.00195c-0.36964,-0.01705 -0.77527,-0.02148 -1.17773,-0.02148zM16.64258,15c0.38554,0 0.76564,0.0047 1.08398,0.01953c0.32749,0.01632 0.30712,0.01766 0.24414,-0.01172c-0.06399,-0.02984 0.02283,-0.03953 0.20898,0.40234c0.24341,0.57785 0.66348,1.58909 1.03906,2.49023c0.18779,0.45057 0.36354,0.87343 0.50391,1.20508c0.14036,0.33165 0.21642,0.51683 0.30469,0.69336v0.00195l0.00195,0.00195c0.08654,0.17075 0.07889,0.06143 0.04883,0.12109c-0.21103,0.41883 -0.23966,0.52166 -0.45312,0.76758c-0.32502,0.37443 -0.65655,0.792 -0.83203,0.96484c-0.15353,0.15082 -0.43055,0.38578 -0.60352,0.8457c-0.17323,0.46063 -0.09238,1.09262 0.18555,1.56445c0.37003,0.62819 1.58941,2.6129 3.48438,4.28125c1.19338,1.05202 2.30519,1.74828 3.19336,2.2168c0.88817,0.46852 1.61157,0.74215 1.77344,0.82227c0.38438,0.19023 0.80448,0.33795 1.29297,0.2793c0.48849,-0.05865 0.90964,-0.35504 1.17773,-0.6582l0.00195,-0.00195c0.3568,-0.40451 1.41702,-1.61513 1.92578,-2.36133c0.02156,0.0076 0.0145,0.0017 0.18359,0.0625v0.00195h0.00195c0.0772,0.02749 1.04413,0.46028 1.90625,0.87109c0.86212,0.41081 1.73716,0.8378 2.02148,0.97852c0.41033,0.20308 0.60422,0.33529 0.6543,0.33594c0.00338,0.08798 0.0068,0.18333 -0.00586,0.32813c-0.03507,0.40164 -0.14243,0.95757 -0.35742,1.55273c-0.10532,0.29136 -0.65389,0.89227 -1.3457,1.33008c-0.69181,0.43781 -1.53386,0.74705 -1.8457,0.79297c-0.9376,0.13815 -2.05083,0.18859 -3.27344,-0.19531c-0.84773,-0.26609 -1.90476,-0.61053 -3.27344,-1.19336c-2.77581,-1.18381 -5.13503,-3.19825 -6.82031,-4.97266c-0.84264,-0.8872 -1.51775,-1.71309 -1.99805,-2.33789c-0.4794,-0.62364 -0.68874,-0.94816 -0.86328,-1.17773l-0.00195,-0.00195c-0.30983,-0.40973 -2.20703,-3.04868 -2.20703,-5.42578c0,-2.51576 1.1685,-3.50231 1.80078,-4.18359c0.33194,-0.35766 0.69484,-0.41016 0.8418,-0.41016z"></path>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

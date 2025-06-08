"use client";
import Link from "next/link";
import Image from "next/image";

const Newscontainer = () => {
  return (
    <div className="relative w-full inline-flex justify-center flex-wrap px-2 lg:px-4 mt-3 z-100">
      <article className="noticiaPrincipal relative inline-flex h-60 md:h-81 lg:h-99 w-[90%] md:w-[45%] m-1.5 rounded-sm shadow-sm hover:scale-101 hover:shadow-lg transition-all duration-150 ease-out overflow-hidden">
        <Link href="/" className="relative w-full h-full">
          <Image
            src="3.png"
            width={0}
            height={0}
            alt={""}
            className="w-full h-full object-cover hover:scale-103 transition-all duration-150 ease-out"
          />
          <span className="absolute inline-block w-full text-center text-xl lg:text-[24px] font-bold text-white bottom-6">
            {" "}
            Lorem ipsum dolor sit.
          </span>
        </Link>
      </article>
      <div className="noticiaSecundaria-Container relative inline-flex flex-wrap md:h-81 lg:h-99 m-1.5 w-[90%] md:w-[45%] items-center justify-center">
        <article className="noticiaSecundaria relative inline-block h-28 md:h-25 lg:h-31 w-full my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgSecundaria w-[40%] lg:w-[35%] h-full object-cover"
            />
            <div className="relative w-[55%] lg:w-[62%] m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
              <span className="relative block text-justify text-xs text-gray-900 m-1.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaSecundaria relative inline-block h-28 md:h-25 lg:h-31 w-full my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgSecundaria w-[40%] lg:w-[35%] h-full object-cover"
            />
            <div className="relative w-[55%] lg:w-[62%] m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
              <span className="relative block text-justify text-xs text-gray-900 m-1.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaSecundaria relative inline-block h-28 md:h-25 lg:h-31 w-full my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgSecundaria w-[40%] lg:w-[35%] h-full object-cover"
            />
            <div className="relative w-[55%] lg:w-[62%] m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
              <span className="relative block text-justify text-xs text-gray-900 m-1.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </Link>
        </article>
      </div>
      <div className="noticiaRelleno-Container relative inline-flex flex-wrap my-1.5 w-[91%] items-center justify-between">
        <article className="noticiaRelleno relative inline-block h-28 md:h-51 lg:h-72 xl:h-99 w-full md:w-[32%] my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgRelleno w-[40%] md:w-full h-full md:h-[60%] xl:h-[70%] object-cover"
            />
            <div className="relative w-[55%] md:w-full m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaRelleno relative inline-block h-28 md:h-51 lg:h-72 xl:h-99 w-full md:w-[32%] my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgRelleno w-[40%] md:w-full h-full md:h-[60%] xl:h-[70%] object-cover"
            />
            <div className="relative w-[55%] md:w-full m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaRelleno relative inline-block h-28 md:h-51 lg:h-72 xl:h-99 w-full md:w-[32%] my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgRelleno w-[40%] md:w-full h-full md:h-[60%] xl:h-[70%] object-cover"
            />
            <div className="relative w-[55%] md:w-full m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaRelleno relative inline-block h-28 md:h-51 lg:h-72 xl:h-99 w-full md:w-[32%] my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgRelleno w-[40%] md:w-full h-full md:h-[60%] xl:h-[70%] object-cover"
            />
            <div className="relative w-[55%] md:w-full m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaRelleno relative inline-block h-28 md:h-51 lg:h-72 xl:h-99 w-full md:w-[32%] my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgRelleno w-[40%] md:w-full h-full md:h-[60%] xl:h-[70%] object-cover"
            />
            <div className="relative w-[55%] md:w-full m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaRelleno relative inline-block h-28 md:h-51 lg:h-72 xl:h-99 w-full md:w-[32%] my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgRelleno w-[40%] md:w-full h-full md:h-[60%] xl:h-[70%] object-cover"
            />
            <div className="relative w-[55%] md:w-full m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaRelleno relative inline-block h-28 md:h-51 lg:h-72 xl:h-99 w-full md:w-[32%] my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgRelleno w-[40%] md:w-full h-full md:h-[60%] xl:h-[70%] object-cover"
            />
            <div className="relative w-[55%] md:w-full m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </div>
          </Link>
        </article>
        <article className="noticiaRelleno relative inline-block h-28 md:h-51 lg:h-72 xl:h-99 w-full md:w-[32%] my-3 md:my-0 md:mb-3 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-150 ease-out overflow-hidden">
          <Link
            href="/"
            className="relative inline-flex flex-wrap justify-between w-full h-full"
          >
            <Image
              src="\2.png"
              width={0}
              height={0}
              alt={""}
              className="relative imgRelleno w-[40%] md:w-full h-full md:h-[60%] xl:h-[70%] object-cover"
            />
            <div className="relative w-[55%] md:w-full m-1.5">
              <span className="relative block text-justify text-xs lg:text-[16px] font-bold m-1.5">
                Lorem, ipsum dolor sit amet consectetur
              </span>
            </div>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default Newscontainer;

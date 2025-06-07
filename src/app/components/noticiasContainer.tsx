"use client";
import Link from "next/link";
import Image from "next/image";

const Newscontainer = () => {
  return (
    <div className="relative w-full inline-flex justify-evenly flex-wrap px-5 mt-3 z-100">
      <article className="noticiaPrincipal relative inline-flex h-80 w-[90%] md:w-[80%] lg:w-[45%] rounded-2xl hover:scale-102 transition-all duration-150 ease-out overflow-hidden">
        <Link href="/" className="relative w-full h-full">
          <Image
            src="\1.png"
            width={0}
            height={0}
            alt={""}
            className="w-full h-full object-cover hover:scale-102 transition-all duration-150 ease-out"
          />
        </Link>
      </article>
    </div>
  );
};

export default Newscontainer;

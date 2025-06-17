"use client";
import Image from "next/image";

export default function Ranking() {
  const rankings = [
    {
      sub9: {
        posicion: {
          rankInd: "Ranking",
          categoriaInd: "Sub-9",
          posicionInd: "Pos.",
          equipoInd: "Equipo",
          victoriaInd: "V",
          derrotaInd: "D",
          puntosInd: "Pts",
        },
        equipos: [
          {
            nombre: "Mejias",
            posicion: 1,
            victorias: 18,
            derrotas: 12,
            puntos: 56,
          },
          {
            nombre: "pajeros irving",
            posicion: 2,
            victorias: 18,
            derrotas: 12,
            puntos: 56,
          },
          {
            nombre: "aoinokame",
            posicion: 3,
            victorias: 18,
            derrotas: 12,
            puntos: 56,
          },
          {
            nombre: "supernova slasher",
            posicion: 4,
            victorias: 18,
            derrotas: 12,
            puntos: 56,
          },
          {
            nombre: "karasuno",
            posicion: 5,
            victorias: 18,
            derrotas: 12,
            puntos: 56,
          },
          {
            nombre: "thunderbolts",
            posicion: 6,
            victorias: 18,
            derrotas: 12,
            puntos: 56,
          },
        ],
      },
    },
    {
      sub11: {
        posicion: {
          rankInd: "Ranking",
          categoriaInd: "Sub-11",
          posicionInd: "Pos.",
          equipoInd: "Equipo",
          victoriaInd: "V",
          derrotaInd: "D",
          puntosInd: "Pts",
        },
        equipos: [
          {
            nombre: "Proyecto A",
            posicion: 1,
            victorias: 20,
            derrotas: 10,
            puntos: 60,
          },
          {
            nombre: "Proyecto B",
            posicion: 2,
            victorias: 17,
            derrotas: 13,
            puntos: 55,
          },
          {
            nombre: "Proyecto C",
            posicion: 3,
            victorias: 15,
            derrotas: 15,
            puntos: 50,
          },
          {
            nombre: "Proyecto D",
            posicion: 4,
            victorias: 14,
            derrotas: 16,
            puntos: 48,
          },
        ],
      },
    },
    {
      sub18: {
        posicion: {
          rankInd: "Ranking",
          categoriaInd: "Sub-18",
          posicionInd: "Pos.",
          equipoInd: "Equipo",
          victoriaInd: "V",
          derrotaInd: "D",
          puntosInd: "Pts",
        },
        equipos: [
          {
            nombre: "Proyecto A",
            posicion: 1,
            victorias: 20,
            derrotas: 10,
            puntos: 60,
          },
          {
            nombre: "Proyecto B",
            posicion: 2,
            victorias: 17,
            derrotas: 13,
            puntos: 55,
          },
          {
            nombre: "Proyecto C",
            posicion: 3,
            victorias: 15,
            derrotas: 15,
            puntos: 50,
          },
          {
            nombre: "Proyecto D",
            posicion: 4,
            victorias: 14,
            derrotas: 16,
            puntos: 48,
          },
        ],
      },
    },
  ];

  return (
    <div className="relative inline-flex flex-wrap BGCcomponent justify-center w-full mt-3 overflow-hidden">
      <Image
        src="/volleyball-ball-svgrepo-com-white.png"
        width={0}
        height={0}
        alt="Volleyball ball"
        className="w-full object-cover absolute top-40 -left-20 opacity-10 z-100"
      />
      {/* Se recorre cada objeto "ranking" */}
      {rankings.map((ranking, rankingIndex) =>
        // Para cada ranking, se recorren las categorías disponibles (sub9, sub11, ...)
        Object.entries(ranking).map(([categoriaKey, categoriaData]) => (
          <div
            key={`${rankingIndex}-${categoriaKey}`}
            className="rank-sub9 relative w-[90%] lg:w-[70%] rounded-2xl p-3 bg-red-950 my-3"
          >
            <span className="block relative text-center text-white text-xl md:text-2xl lg:text-4xl font-extrabold mt-3">
              {categoriaData.posicion.rankInd}
            </span>
            <span className="block relative text-center text-white text-sm md:text-md lg:text-lg font-medium mb-3">
              {categoriaData.posicion.categoriaInd}
            </span>
            <div className="relative inline-flex w-full">
              <table className="table-fixed w-full text-white md:text-lg lg:text-2xl">
                <thead>
                  <tr className="border-b-3 border-white">
                    <th className="w-[10%] py-1.5">
                      {categoriaData.posicion.posicionInd}
                    </th>
                    <th className="w-[60%] py-1.5 text-left pl-10">
                      {categoriaData.posicion.equipoInd}
                    </th>
                    <th className="w-[10%] py-1.5">
                      {categoriaData.posicion.victoriaInd}
                    </th>
                    <th className="w-[10%] py-1.5">
                      {categoriaData.posicion.derrotaInd}
                    </th>
                    <th className="w-[10%] py-1.5">
                      {categoriaData.posicion.puntosInd}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categoriaData.equipos.map((equipo, index) => (
                    <tr key={index} className="font-bold">
                      <td className="w-[10%] pt-6 text-center">
                        {equipo.posicion}
                      </td>
                      <td className="w-[60%] pt-6 pl-10">{equipo.nombre}</td>
                      <td className="w-[10%] pt-6 text-center">
                        {equipo.victorias}
                      </td>
                      <td className="w-[10%] pt-6 text-center">
                        {equipo.derrotas}
                      </td>
                      <td className="w-[10%] pt-6 text-center">
                        {equipo.puntos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

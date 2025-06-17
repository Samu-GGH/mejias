"use client";
//import Link from "next/link";

export default function Usuarios() {
  const usuarios = [
    { id: 1, nombre: "Samuel", edad: 30 },
    { id: 2, nombre: "Ana", edad: 25 },
    { id: 3, nombre: "Luis", edad: 28 },
  ];

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <h2>{usuario.nombre}</h2>
          <p>Edad: {usuario.edad}</p>
        </div>
      ))}
    </div>
  );
}

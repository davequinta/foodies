import Link from 'next/link';
import React, { useState } from 'react';
const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function HomeNavbar() {
  const [menuClosed, setMenuClosed] = useState(true);
  return (
    <nav className="navbar absolute w-full z-50 flex justify-between">
      <a href="/">
        <h1 className="title text-undefined">Foodies</h1>
      </a>
      <ul className="items hidden xl:flex justify-start w-full">
        <li className="link">
          <a href="/#about">Acerca de</a>
        </li>
        <li className="link">
          <a href="/#restaurant">Restaurantes</a>
        </li>
        <li className="link">
          <a href="/menu">Menú</a>
        </li>
        <li className="link">
          <a href="/#contact">Contáctanos</a>
        </li>
      </ul>
      <div
        className={`home-modal  transform  ${
          menuClosed && 'translate-x-full hidden'
        } absolute top-0 left-0 w-full z-20 flex-col  shadow-md rounded-b-3xl transition duration-500 ease-in-out pt-10`}
      >
        <h1 className="title font-bold">Foodies</h1>
        <ul className="flex gap-4 flex-col">
          <li className="menu-item link">
            <a href="/#about">Acerca de</a>
          </li>
          <li className="menu-item link">
            <a href="/#restaurant">Restaurantes</a>
          </li>
          <li className="menu-item link">
            <a href="/menu">Menú</a>
          </li>
          <li className="menu-item link">
            <a href="/#contact">Contáctanos</a>
          </li>
        </ul>
      </div>
      <div className="menu xl:hidden ">
        <input type="checkbox" onChange={() => setMenuClosed(!menuClosed)} />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

import Link from 'next/link';
import React from 'react';

const NavigationBar = () => {
  const links = [
    {
      linkName: 'About',
      path: '/about'
    },
    {
      linkName: 'Contact',
      path: '/contact'
    },
    {
      linkName: 'Dashboard',
      path: '/dashboard'
    }
  ];
  return (
    <nav className="navbar bg-primary-content text-black sticky top-0 z-10">
      <div className="navbar-start">
        <div className="navbar-start hidden lg:flex ">
          <Link href="/">
            <h2 className="text-4xl pl-4 font-bold">
              <span className="text-blue-500 ">Office</span>Hours
            </h2>
          </Link>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-4"
          >
            {links.map((item) => (
              <Link key={item.linkName} href={item.path}>
                <li>{item.linkName}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {links.map((item) => (
            <Link key={item.linkName} href={item.path}>
              <li className="rounded-lg btn btn-ghost text-lg hover:bg-slate-300">
                {item.linkName}
              </li>
            </Link>
          ))}
          <div>
            <li className="text-lg mt-[.1rem] cursor-pointer font-semibold self-middle outline-6 outline outline-blue-500 rounded-lg py-2 px-4 bg-blue-500 text-white">
              SCHEDULE A DEMO
            </li>
          </div>
          <Link key="login" href="/login">
            <li className="text-lg mt-[.1rem] cursor-pointer font-semibold self-middle outline-6 outline outline-blue-500 rounded-lg py-2 px-4 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors">
              LOGIN
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;

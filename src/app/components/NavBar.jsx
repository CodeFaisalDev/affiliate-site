import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <div className="border mt-5 rounded-full w-fit hidden md:flex navbar gap-28 bg-base-100 mx-auto max-w-xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TBD</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:rounded-full">
              <Link href="/">All Finds</Link>
            </li>
            <li>
              <Link href="/">Best Finds</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                  <Link href="/">Sports</Link>
                  </li>
                  <li>
                  <Link href="/">Creators</Link>
                  </li>
                  <li>
                  <Link href="/">Beauty</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex md:hidden navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">TBD</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-2 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link href="/">All Finds</Link>
              </li>
              <li>
              <Link href="/">Best Finds</Link>
              </li>
              
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  <li>
                  <Link href="/">Sports Finds</Link>
                  </li>
                  <li>
                  <Link href="/">Home Finds</Link>
                  </li>
                  <li>
                  <Link href="/">Creators Finds</Link>
                  </li>
                  <li>
                  <Link href="/">Beauty Finds</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// 'use client';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut } from '../auth';


function Navbar1() {
  async function out() {
    "use server"
   await signOut({redirectTo:"/contactus"})
    
  }

    
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-gray-200 dark:bg-gray-900 p-3 mt-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/"    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/postui" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Users
              </Link>
            </li>
            <li>
              <Link href="/login" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Login
              </Link>
            </li>

            <li>
              <form action={out}>
              <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">Signout</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;

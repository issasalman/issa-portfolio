import React,{ useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
export default function Header() {
  useEffect(() => {
  
        const btn = document.getElementById("mobileBtn");
        const list = document.getElementById("mobileList");
        btn.addEventListener("click", () => {
          list.classList.toggle("hidden");
        });
 
}, []);
  return (
    <>
      <Head>
        <title>Issa Salman</title>
        <link rel="icon" href="./icon1.png" />
      </Head>
      <nav class="flex items-center justify-between flex-wrap bg-zinc-900 p-6 mb-6 bg-opacity-20">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold  tracking-tight text-2xl">  <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                href="/"
              >
               My Portfolio
              </Link></span>
        </div>
        <div class="block lg:hidden">
          <button class=" flex items-center px-3 py-2 border rounded text-gray-500 border-gray-400" id="mobileBtn">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div id="mobileList" class="  lg:visible hidden w-full block flex-grow flex items-center justify-between lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a class="block mt-4 lg:inline-block text-xl lg:mt-0 text-gray-200 hover:text-white mr-4">
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                href="projects"
              >
                Projects
              </Link>
            </a>
      
          </div>
          <div className="profile-options">
            {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hire Me
</button> */}

            <a href="Issa-Salman.pdf" download="Issa-Salman.pdf">
              <button class="bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

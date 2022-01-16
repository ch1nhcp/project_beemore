import React from "react";
import MainLayout from "../../components/Layout";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <MainLayout>
      <main class="bg-white relative overflow-hidden h-screen relative">
        <header class="absolute top-0 left-0 right-0 z-20">
          <nav class="container mx-auto px-6 md:px-12 py-4">
            <div class="md:flex justify-between items-center">
              <div class="flex justify-between items-center">
                <div class="md:hidden">
                  <button class="text-gray-800 focus:outline-none">
                    <svg
                      class="h-12 w-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div class="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
          <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
            <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
              <h1 class="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
                Sorry, this page isn&#x27;t available
              </h1>
              <button class="px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-yellow-400 border-2 text-lg border-gray-700 bg-yellow-300 focus:outline-none">
                <Link to="/">Go back home</Link>
              </button>
            </div>
            <div class="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
              <img src="https://www.tailwind-kit.com/images/illustrations/1.svg" />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

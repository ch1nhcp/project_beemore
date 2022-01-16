import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header class="text-gray-600 body-font bg-gray-100 border-0">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span class="ml-3 text-xl">BEEMORE</span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div class="hidden mx-10 md:block">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  type="text"
                  class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Search"
                />
              </div>
            </div>
          </nav>
          <div class="inline-flex items-center  py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            <div class="flex items-center py-2 -mx-1 md:mx-0">
              <Link
                to="/login"
                class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
              >
                Login
              </Link>
              <Link
                to="/register"
                class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
              >
                Join free
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

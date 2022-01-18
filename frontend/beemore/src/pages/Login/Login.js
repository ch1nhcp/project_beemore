import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="h-full content-center ">
        <div className="px-4 py-20 mx-auto max-w-7xl ">
          <a
            href="/"
            title="Beemore Home Page"
            className="flex items-center justify-start sm:justify-center"
          >
            <a href="/" title="Go to Beemore Home Page">
              <span className=" text-xl font-bold uppercase text-center text-blue-600 md:text-5xl">
                Beemore
              </span>

              <span className="sr-only">Beemore Home Page</span>
            </a>
            <span className="sr-only">Beemore</span>
          </a>
          <div className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5">
            <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">
              Log in to your account
            </h1>
            <form className="pb-1 space-y-4">
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Email
                </span>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Ex. james@bond.com"
                  inputmode="email"
                  required
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Password
                </span>
                <input
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </label>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                    Remember me
                  </span>
                </label>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <div class="relative my-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 text-neutral-600 bg-white">
                  {" "}
                  Or continue with{" "}
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                  "
              >
                <div class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      ></path>
                    </defs>
                    <clipPath id="b">
                      <use overflow="visible"></use>
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    ></path>
                    <path
                      clip-path="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    ></path>
                    <path
                      clip-path="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    ></path>
                    <path
                      clip-path="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    ></path>
                  </svg>
                  <span class="ml-4"> Log in with Google</span>
                </div>
              </button>
            </div>
          </div>
          <p className="mb-4 space-y-2 text-sm text-left text-gray-600 sm:text-center sm:space-y-0">
            <a href="#" className="w-full btn btn-sm btn-link sm:w-auto">
              Forgot password
            </a>
            <Link
              to="/register"
              className="w-full btn btn-sm btn-link sm:w-auto"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

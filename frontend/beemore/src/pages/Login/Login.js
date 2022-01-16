import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section class="h-full content-center ">
        <div class="px-4 py-20 mx-auto max-w-7xl ">
          <a
            href="/"
            title="Beemore Home Page"
            class="flex items-center justify-start sm:justify-center"
          >
            <a href="/" title="Go to Beemore Home Page">
              <span class=" text-xl font-medium text-center text-amber-400 md:text-5xl">
                Bee
              </span>
              <span class=" text-xl font-medium text-center text-gray-600 md:text-5xl">
                more
              </span>
              <span class="sr-only">Beemore Home Page</span>
            </a>
            <span class="sr-only">Beemore</span>
          </a>
          <div class="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5">
            <h1 class="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">
              Log in to your account
            </h1>
            <form class="pb-1 space-y-4">
              <label class="block">
                <span class="block mb-1 text-xs font-medium text-gray-700">
                  Your Email
                </span>
                <input
                  class="form-input"
                  type="email"
                  placeholder="Ex. james@bond.com"
                  inputmode="email"
                  required
                />
              </label>
              <label class="block">
                <span class="block mb-1 text-xs font-medium text-gray-700">
                  Your Password
                </span>
                <input
                  class="form-input"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </label>
              <div class="flex items-center justify-between">
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                    Remember me
                  </span>
                </label>
                <input type="submit" class="btn btn-primary" value="Login" />
              </div>
            </form>
          </div>
          <p class="mb-4 space-y-2 text-sm text-left text-gray-600 sm:text-center sm:space-y-0">
            <a href="#" class="w-full btn btn-sm btn-link sm:w-auto">
              Forgot password
            </a>
            <Link to="/register" class="w-full btn btn-sm btn-link sm:w-auto">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

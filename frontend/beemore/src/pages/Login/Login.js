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
              <span className=" text-xl font-medium text-center text-amber-400 md:text-5xl">
                Bee
              </span>
              <span className=" text-xl font-medium text-center text-gray-600 md:text-5xl">
                more
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

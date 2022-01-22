import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

export default function ForgotPassword() {
  //!Axios Connect FrontendBackend - Auth Register - Connect authRoutes /api/auth/register:
  const [username, setUsername] = useState("");
  const [account, setAccount] = useState("");
  const [error, setError] = useState("");
  //   const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //ngăn load trang

    try {
      setError(false);
      //   setSuccess(true);
      const res = await axios.post("/auth/forgot", {
        // /api/auth/forgot
        // /api/auth/register
        account: account,
      });
    } catch (err) {
      setError(true);
      //   setSuccess(false);
    }
  };

  return (
    <>
      <section class="px-4 pb-24 mx-auto max-w-7xl">
        <header class="flex items-center justify-center py-5 mb-5 border-b border-gray-200">
          <a href="/" title="Go to Beemore Home Page">
            <span className=" text-xl font-bold uppercase text-center text-blue-600 md:text-5xl">
              Beemore
            </span>
            <span class="sr-only">Beemore Home Page</span>
          </a>
        </header>
        <div class="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
          <h1 class="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
            Forgot your password ?
          </h1>
          <p class="mb-2 text-sm font-normal text-center text-gray-700 md:text-base">
            Already have an account?
            <Link to="/login" class="text-blue-700 hover:text-blue-900">
              &nbsp;Sign in
            </Link>
          </p>

          <form class="mt-8 space-y-4" onSubmit={handleSubmit}>
            <label class="block">
              <span class="block mb-1 text-xs font-medium text-gray-700">
                Your Email
                {/* Error Text */}
                {error ? (
                  <span
                    className="error"
                    style={{
                      fontSize: "20px",
                      // marginTop: "20px",
                      marginLeft: "50px",
                      color: "red",
                    }}
                  >
                    Tài khoản chưa được đăng ký
                  </span>
                ) : (
                  <span
                    className="error"
                    style={{
                      fontSize: "20px",
                      // marginTop: "20px",
                      marginLeft: "100px",
                      color: "red",
                    }}
                  >
                    Đã gửi mail xác nhận
                  </span>
                )}
              </span>
              <input
                class="form-input"
                type="email"
                placeholder="Ex. james@bond.com"
                inputmode="email"
                required
                onChange={(e) => setAccount(e.target.value)}
              />
            </label>

            <input
              type="submit"
              class="w-full btn btn-primary btn-lg"
              value="Send Activate Link"
            />
          </form>

          <p class="my-5 text-xs font-medium text-center text-gray-700">
            By clicking "Send Activate Link" you agree to our
            <a href="#" class="text-blue-700 hover:text-blue-900">
              &nbsp;Terms of Service&nbsp;
            </a>
            and
            <a href="#" class="text-blue-700 hover:text-blue-900">
              &nbsp;Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

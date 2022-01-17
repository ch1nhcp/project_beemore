import MainLayout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import ListPost from "../../components/ListPost";
import Rank from "../../components/Rank";
import News from "../../components/News";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <MainLayout>
      <div class="flex flex-row p-10 ">
        <div class="basis-1/6 hidden md:block">
          <Sidebar />
        </div>
        <div class="basis-2/3 ">
          <News />
          <ListPost />
        </div>
        <div class="basis-1/6 hidden md:block items-center justify-center">
          <Link
            to="/add"
            type="button"
            class="py-2 px-4 mb-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            &nbsp;&nbsp;Create new post
          </Link>

          <Rank />
        </div>
      </div>
    </MainLayout>
  );
}

import MainLayout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import ListPost from "../../components/ListPost";
import Rank from "../../components/Rank";
import News from "../../components/News";

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
          <Rank />
        </div>
      </div>
    </MainLayout>
  );
}

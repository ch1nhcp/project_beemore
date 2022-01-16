import MainLayout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import ListPost from "../../components/ListPost";
// import Rank from "../../components/Rank";
// import News from "../../components/News";

export default function Home() {
  return (
    <MainLayout>
      <div class="flex flex-row ">
        <div class="basis-1/8 hidden md:block">
          <Sidebar />
        </div>
        <div class="basis-3/4 ">
          {/* <News /> */}
          <ListPost />
        </div>
        <div class="basis-1/8 hidden md:block ">
          <h1>Bảng xếp hạng</h1>
          {/* <Rank /> */}
        </div>
      </div>
    </MainLayout>
  );
}

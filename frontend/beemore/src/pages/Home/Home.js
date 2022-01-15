import MainLayout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import ListPost from "../../components/ListPost";

export default function Home() {
  return (
    <MainLayout>
      <div class="flex flex-row ">
        <div class="basis-1/4 hidden md:block">
          <Sidebar />
        </div>
        <div class="basis-1/2 ">
          <ListPost/>
        </div>
        <div class="basis-1/4 hidden md:block ">Thanh công cụ</div>
      </div>
    </MainLayout>
  );
}

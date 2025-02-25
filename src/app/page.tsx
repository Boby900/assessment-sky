import Navbar from "@/components/layout/navbar";
import Main from "@/components/layout/main";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#020817]">
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
      <div className="text-yellow-500 border-2">
        hello bob
      </div>
    </div>
  );
}

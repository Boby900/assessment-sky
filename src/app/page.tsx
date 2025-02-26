import Navbar from "@/components/layout/navbar";
import Main from "@/components/layout/main";
import Section2 from "@/components/layout/section2";

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
        <Section2 />
      </div>
    </div>
  );
}

import Navbar from "@/components/layout/navbar";
import Main from "@/components/layout/main";
import Section2 from "@/components/layout/section2";
import Section3 from "@/components/layout/section3";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#020817]">
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
    </div>
  );
}

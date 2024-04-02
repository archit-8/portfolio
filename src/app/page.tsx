import Main from "@/components/Main";
import Company from "@/components/company";
import Spil from  "@/components/special"
import Image from "next/image";
import Footer from "@/components/footer";
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-600">
    <div className=" bg-gray-500">
    <main className="max-w-[1240px] w-full h-full  mx-auto p-2 flex-col justify-between items-center  md:h-full gap-8 bg-red">
     <Main/>
     <Company/>
     <Spil/>
     <Footer/>
    </main>
    </div>
  );
}

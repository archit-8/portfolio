import Main from "@/components/Main";
import Company from "@/components/company";
import Spil from  "@/components/special"
import Footer from "@/components/footer";
export default function Home() {
  return (
    
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

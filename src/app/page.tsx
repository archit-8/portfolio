import Main from "@/components/Main";
import Company from "@/components/company";
import Spil from "@/components/special";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className=" relative overflow-hidden p-0 m-0 h-full w-full">
      <Main />
      <Company />
      <Spil />
      <Footer />
    </main>
  );
}

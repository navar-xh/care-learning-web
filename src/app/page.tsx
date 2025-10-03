// import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "./pages/Home/page";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <main className="f">
        <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}

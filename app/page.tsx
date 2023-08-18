import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Aboutme from "@/components/aboutme";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300">
      <div className="max-w-screen-xl mx-auto">
        <Banner></Banner>
        <Aboutme></Aboutme>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
        <Contacts></Contacts>
        <Footer></Footer>
      </div>
    </main>
  );
}

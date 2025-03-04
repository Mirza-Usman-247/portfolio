import About from "@/components/About";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black py-10">
      <Container>
        <Header/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Container>
    </div>
  );
}

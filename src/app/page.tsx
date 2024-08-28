import Image from "next/image";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import AboutUs from "./components/aboutUs";
import Projects from "./components/projects";
import Faq from "./components/faq";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <Projects />
      <Faq />
    </>
  );
}

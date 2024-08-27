import Image from "next/image";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import AboutUs from "./components/aboutUs";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
    </>
  );
}

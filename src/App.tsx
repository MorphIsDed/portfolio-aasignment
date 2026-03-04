import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/layout/CustomCursor";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <>
      <CustomCursor />
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

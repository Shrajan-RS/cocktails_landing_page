import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; //plugins for this project
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText); //we are registering this so we can use it anywhere from the project folder

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default App;

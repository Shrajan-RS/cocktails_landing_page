import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; //plugins for this project
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText); //we are registering this so we can use it anywhere from the project folder

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;

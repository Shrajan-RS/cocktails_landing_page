import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; //plugins for this project


gsap.registerPlugin(ScrollTrigger, SplitText); //we are registering this so we can use it anywhere from the project folder

const App = () => {
  return <div className="flex-center h-[100vh]">
    <h1 className="text-3xl text-indigo-300">Hello GSAP!</h1>
  </div>;
};

export default App;

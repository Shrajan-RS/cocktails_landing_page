import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    //creating a timeline named navTween
    const navTween = gsap.timeline({
      //based on the scroll
      scrollTrigger: {
        trigger: "nav", //the trigger will be the nav
        start: "bottom top", //when nav bottom reaches the top of the viewport
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent", //from
      },
      {
        //to
        backgroundColor: "#00000050", //the last 50 stands for the opacity in the hexadecimal
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );

   
  });

  return (
    <nav className="px-10">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Violet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li  key={link.id}>
              <a className="hover:text-yellow" href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

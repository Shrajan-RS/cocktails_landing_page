import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    // Create a GSAP timeline for scroll-triggered animation on the <nav> element
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav", // Trigger animation when <nav> enters viewport
        start: "bottom top", // Animation starts when bottom of <nav> hits top of viewport
      },
    });

    // Animate <nav> background from transparent to semi-transparent with blur
    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent", // Starting background color
      },
      {
        backgroundColor: "#00000050", // Semi-transparent black (50 = ~30% opacity)
        backgroundFilter: "blur(10px)", // Add blur effect to the background
        duration: 1,
        ease: "power1.inOut", // Smooth easing
      }
    );

    // Animate nav-bar elements fading in and sliding down from top
    gsap.from(".nav-bar", {
      opacity: 0,
      delay: 1, // Delay before animation starts
      duration: 1, // Duration of the animation
      y: -30, // Slide down from -30px
    });
  });

  return (
    <nav className="px-10">
      <div className="nav-bar">
        {/* Logo and site title */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Violet Pour</p>
        </a>

        {/* Navigation links */}
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a className="hover:text-yellow" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

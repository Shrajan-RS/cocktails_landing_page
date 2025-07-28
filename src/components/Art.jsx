import { useMediaQuery } from "react-responsive";
import { featureLists, goodLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  // Check if the user is on a mobile device (viewport width < 768px)
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // Set scroll animation start point differently based on device size
    const start = isMobile ? "top 20%" : "top top";

    // Create a scroll-triggered timeline for animating the "Art" section
    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",           // Start animation when #art section hits start point
        start,                     // Responsive start position
        end: "bottom center",      // End when bottom of section hits center of viewport
        scrub: 1.5,                // Smoothly sync animation with scroll
        pin: true,                 // Pin section during scroll animation
      },
    });

    // Sequential animation steps:

    // 1. Fade out all elements with class .will-fade
    maskedTimeline.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    });

    // 2. Scale up and animate mask effect on the cocktail image
    maskedTimeline.to(".masked-img", {
      scale: 1.3,
      maskPosition: "center",
      maskSize: "400%",
      duration: 1,
      ease: "power1.inOut",
    });

    // 3. Move the cocktail image upward slightly
    maskedTimeline.to(".cocktail-img", {
      y: -50,
      duration: 1,
      ease: "power1.inOut",
    });

    // 4. Reveal the final text block
    maskedTimeline.to("#masked-content", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        {/* Section heading */}
        <h2 className="will-fade">The Art</h2>

        <div className="content">
          {/* Left-side feature list */}
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          {/* Center cocktail image with masking animation */}
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          {/* Right-side feature list */}
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Final message that fades in at end of scroll animation */}
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3 className="capitalize">made with craft, poured with passion</h3>
            <p className="capitalize">
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;

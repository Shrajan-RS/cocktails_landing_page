import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    // Split the <h2> heading text into individual words using GSAP's SplitText plugin
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    // Create a timeline for scroll-triggered animation
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about", // Start animation when #about section enters viewport
        start: "top center", // Trigger starts when top of section hits center of screen
        scrub: true, // Makes animation linked to scroll position
      },
    });

    // Animate the heading words: fade in + slide up with stagger
    textTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02, // Delay between each word for staggered effect
      })
      // Animate image grids appearing from below with fade and movement
      .from(
        ".top-grid, .bottom-grid",
        {
          opacity: 0,
          ease: "expo.out",
          duration: 1,
          stagger: 0.05,
          y: 110,
        },
        "-=0.8" // Overlap this animation with previous by 0.8s
      );
  });

  return (
    <div id="about">
      {/* About text and headline section */}
      <div className="mb-16 md:px-0 p-5">
        <div className="content capitalize px-12">
          <div className="md:col-span-8">
            <p className="badge">best cocktails</p>
            <h2>
              where every detail matters <span className="text-white"> - </span>
              from muddle to garnish
            </h2>
          </div>

          {/* Sub-content with description and customer rating */}
          <div className="sub-content">
            <p>
              every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. that care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                more than +12,000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top image grid layout */}
      <div className="top-grid px-12">
        <div className="md:col-span-3">
          <div className="noisy"></div>
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy"></div>
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy"></div>
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      {/* Bottom image grid layout */}
      <div className="bottom-grid px-12">
        <div className="md:col-span-8">
          <div className="noisy"></div>
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy"></div>
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;

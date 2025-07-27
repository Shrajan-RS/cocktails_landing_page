import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    //animation on the h2 text
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        scrub: true,
      },
    });

    textTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid, .bottom-grid",
        {
          opacity: 0,
          ease: "expo.out",
          duration: 1,
          stagger: 0.05,
          y: 110,
        },
        "-=0.8"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 p-5">
        <div className="content capitalize px-12">
          <div className="md:col-span-8">
            <p className="badge">best cocktails</p>
            <h2>
              where every detail matters <span className="text-white"> - </span>
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. that cure is
              what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                more then +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

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

      <div className="bottom-grid px-12">
        <div className="md:col-span-8">
          <div className="noisy"></div>
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy"></div>
          <img src="/images/abt4.png" alt="grid-img-3" />
        </div>
      </div>
    </div>
  );
};

export default About;

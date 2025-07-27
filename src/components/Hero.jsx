import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 }); //react responsive package, this indicates that if maxWidth is less then the 767px then it's mobile

  //Animating the heroText, subtexts
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars",
    });

    const ParaSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    //animating the each individual char from the main heading
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      stagger: 0.08,
      ease: "expo.out",
      delay: 0.9,
    });

    //animating the paragraph
    gsap.from(ParaSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      stagger: 0.09,
      ease: "expo.out",
      delay: 1.8,
    });

    //Animating the left leaf
    gsap.from(".left-leaf", {
      duration: 0.8,
      rotation: -90,
      transformOrigin: "left 90%",
    });

    //Animating the right leaf
    gsap.from(".right-leaf", {
      duration: 0.8,
      rotation: 90,
      transformOrigin: "right 90%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top", //top of the homepage hits the top of the screen
          end: "bottom top", //bottom of the homepage hits the top of the screen
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    //defining the start and end of the animation var
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    // creating the video animation timeline
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };

    gsap.from(videoRef.current, {
      y: 200,
      duration: 1,
      delay: 2.3,
      opacity: 0,
    });

    gsap.from(".para-heading, .view-cocktails", {
      opacity: 0,
      delay: 1.6,
    });
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title"> MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body ">
          <div className="content ">
            <div className="space-y-5 hidden md:block ">
              <p className="para-heading">Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip The Spirit <br /> Of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle text-violet-100 capitalize ">
                Every cocktail on our menu is the blend of premium ingredients,
                creative flair, and timeless recipes-designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </>
  );
};

export default Hero;

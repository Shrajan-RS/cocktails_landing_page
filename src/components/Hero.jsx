import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  // Use react-responsive to detect mobile view (max-width <= 767px)
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Use GSAP to animate various elements when the component mounts
  useGSAP(() => {
    // Split the main heading text into individual characters
    const heroSplit = new SplitText(".title", { type: "chars" });

    // Split the subtitle into lines for animation
    const ParaSplit = new SplitText(".subtitle", { type: "lines" });

    // Add gradient styling to each character of the title
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Animate title characters with staggered vertical entrance
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      stagger: 0.08,
      ease: "expo.out",
      delay: 0.9,
    });

    // Animate subtitle lines with vertical movement and stagger
    gsap.from(ParaSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      stagger: 0.09,
      ease: "expo.out",
      delay: 1.8,
    });

    // Animate the entrance of decorative leaves with rotation
    gsap.from(".left-leaf", {
      duration: 0.8,
      rotation: -90,
      transformOrigin: "left 90%",
    });

    gsap.from(".right-leaf", {
      duration: 0.8,
      rotation: 90,
      transformOrigin: "right 90%",
    });

    // Scroll-triggered animation: parallax movement of leaves
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top", // Start when top of hero section hits top of viewport
          end: "bottom top", // End when bottom of hero section hits top of viewport
          scrub: true, // Smooth scroll-linked animation
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    // Define scroll start/end values based on mobile or desktop
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "205% top" : "bottom top";

    // Create timeline for animating the video on scroll
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true, // Keeps video pinned during scroll
      },
    });

    // Animate video playback over scroll duration
    videoRef.current.onloadedmetadata = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };

    // Fade and slide in the video on load
    gsap.from(videoRef.current, {
      y: 200,
      duration: 1,
      delay: 2.3,
      opacity: 0,
    });

    // Fade in heading and call-to-action section
    gsap.from(".para-heading, .view-cocktails", {
      opacity: 0,
      delay: 1.6,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="noisy">
        <h1 className="title">Violet Pour</h1>

        {/* Decorative Leaves */}
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

        {/* Hero Content */}
        <div className="body">
          <div className="content">
            {/* Subtext shown only on medium+ screens */}
            <div className="space-y-5 hidden md:block">
              <p className="para-heading">Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip The Spirit <br /> Of Summer
              </p>
            </div>

            {/* Call to action with additional subtitle */}
            <div className="view-cocktails">
              <p className="subtitle text-violet-100 capitalize">
                Every cocktail on our menu is the blend of premium ingredients,
                creative flair, and timeless recipes—designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-animated video element */}
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

import React from "react";
// Importing static data for store info, opening hours, and social links
import { openingHours, socials, storeInfo } from "../../constants";
// useGSAP is a hook from the @gsap/react package for integrating GSAP with React
import { useGSAP } from "@gsap/react";
// SplitText is used to animate text by splitting it into characters or words
import { SplitText } from "gsap/all";
// Main GSAP animation library
import gsap from "gsap";

const Contact = () => {
  // Destructuring store information
  const { greeting, address, contact } = storeInfo;

  // GSAP animations initialized when the component is mounted
  useGSAP(() => {
    // Split the heading text into individual words for staggered animation
    const headingSplit = SplitText.create("#contact h2", {
      type: "words",
    });

    // Create a GSAP timeline with scroll-based trigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact", // Element to trigger animation
        start: "top bottom", // When top of #contact hits bottom of viewport
        end: "top top", // When top of #contact hits top of viewport
        scrub: true, // Sync animation with scroll
      },
    });

    // Animate heading words from below with a delay and stagger
    timeline
      .from(headingSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
        delay: 3, // Delayed start (could be adjusted based on use case)
      })
      // Animate all h3 and paragraph elements inside #contact
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
      })
      // Animate left leaf image upwards
      .to("#f-left-leaf", {
        y: "-30%",
        duration: 1,
        ease: "power1.inOut",
      })
      // Animate right leaf image downwards
      .to("#f-right-leaf", {
        y: "30%",
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    // Main footer element with ID for styling and animation
    <footer id="contact">
      {/* Decorative leaf images */}
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />

      {/* Footer content */}
      <div className="content">
        <h2>Where To Find Us</h2>

        {/* Store address section */}
        <div>
          <h3 className="text-yellow">{greeting}</h3>
          <p>{address}</p>
        </div>

        {/* Contact information section */}
        <div>
          <h3 className="text-yellow">Contact Us</h3>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>

        {/* Opening hours section */}
        <div>
          <h3 className="text-yellow">Open Every Day!</h3>
          {/* Mapping through opening hours array */}
          {openingHours.map(({ day, time }) => (
            <p key={day}>
              {day} | {time}
            </p>
          ))}
        </div>

        {/* Social media links section */}
        <div>
          <h3>Social</h3>
          <div className="flex-center gap-5 ">
            {/* Mapping through social links array */}
            {socials.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

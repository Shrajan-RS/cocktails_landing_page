import React from "react";
import { openingHours, socials, storeInfo } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  const { greeting, address, contact } = storeInfo;

  useGSAP(() => {
    const headingSplit = SplitText.create("#contact h2", {
      type: "words",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    timeline
      .from(headingSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
        delay: 3,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
      })
      .to("#f-left-leaf", {
        y: "-30%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#f-right-leaf", {
        y: "30%",
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <footer id="contact">
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

      <div className="content">
        <h2>Where To Find Us</h2>

        <div>
          <h3 className="text-yellow">{greeting}</h3>
          <p>{address}</p>
        </div>

        <div>
          <h3 className="text-yellow">Contact Us</h3>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>

        <div>
          <h3 className="text-yellow">Open Every Day!</h3>
          {openingHours.map(({ day, time }) => (
            <p key={day}>
              {day} | {time}
            </p>
          ))}
        </div>

        <div>
          <h3>Social</h3>
          <div className="flex-center gap-5 ">
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

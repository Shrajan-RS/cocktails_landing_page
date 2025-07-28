import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    // Create a scroll-triggered animation timeline for the cocktail leaves
    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",   // Start animation when this section comes into view
        start: "top 30%",        // When top of section reaches 30% of viewport height
        end: "bottom 80%",       // End when bottom reaches 80%
        scrub: true,             // Smooth scroll-based animation
      },
    });

    // Animate left leaf moving in from top-left
    leafTimeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });

    // Animate right leaf moving in from top-right
    leafTimeline.from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
  });

  return (
    <section id="cocktails" className="noisy">
      {/* Decorative leaf images */}
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

      <div className="list px-6">
        {/* Popular cocktails list */}
        <div className="popular">
          <h2 className="capitalize">most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, price, detail }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Most loved mocktails list */}
        <div className="loved">
          <h2 className="capitalize">most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, price, detail }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;

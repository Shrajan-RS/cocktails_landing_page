import { useRef, useState } from "react";
import { cocktailMenu } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  // Reference to the content div for potential future animations
  const contentRef = useRef();

  // State to track the currently selected cocktail
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total number of cocktails in the menu
  const totalCocktails = cocktailMenu.length;

  // Function to navigate to a specific slide (cocktail)
  const goToSlide = (index) => {
    // Handles wrap-around behavior when navigating past ends
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  // Returns the cocktail at a relative index (supports negative and wrap-around indexing)
  const getCocktailAt = (indexOffset) => {
    return cocktailMenu[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  // Get the current, previous, and next cocktail based on the index
  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  // Animation triggered when the current cocktail changes
  useGSAP(() => {
    // Animate title and details text from left to right
    gsap.fromTo(
      "#title , .details",
      {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "expo.inOut",
      },
      {
        opacity: 1,
        duration: 0.5,
        x: 0,
        ease: "power1.inOut",
      }
    );

    // Animate cocktail image from left with fade-in
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -60 },
      {
        opacity: 1,
        xPercent: -10,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]); // Re-run this animation whenever currentIndex changes

  // Scroll-triggered animation for decorative leaves
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#menu",
          start: "top top",
          end: "bottom top ",
          scrub: true, // Smooth animation on scroll
        },
      })
      .to("#m-left-leaf", { y: -200 }, 0) // Move left leaf up
      .to("#m-right-leaf", { y: 500 }, 0); // Move right leaf down
  });

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="overflow-hidden"
    >
      {/* Decorative leaf images */}
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      {/* Hidden heading for accessibility */}
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      {/* Tab navigation for each cocktail */}
      <nav className="cocktail-tabs" aria-label="cocktail navigation">
        {cocktailMenu.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-yellow border-whityellow"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        {/* Navigation arrows for previous and next cocktail */}
        <div className="arrows">
          <button
            className="text-left ml-20"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left mr-18"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Display of current cocktail image */}
        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt={currentCocktail.name}
            className="object-contain"
          />
        </div>

        {/* Cocktail recipe details */}
        <div className="recipe">
          <div ref={contentRef} className="info ml-20 ">
            <p>Recipe For:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

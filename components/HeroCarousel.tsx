"use client";

import { Carousel } from "react-responsive-carousel";
import heros from "@/content/homepage/hero.json";
import { theme } from "@/assets/theme";
import CarouselArrow from "./CarouselArrow";

const HeroCarousel = () => {
  return (
    <Carousel
      showThumbs={false} // hide thumbnails
      showStatus={false} // show slide number
      showIndicators={true} // navigation dots
      infiniteLoop={true} // infinite scroll
      autoPlay={true} // autoplay
      interval={5000} // slide interval
      transitionTime={600} // slide animation
      swipeable={true} // enable drag/swipe
      emulateTouch={true} // emulate touch on desktop
      centerMode={true} // center content
      centerSlidePercentage={100} // make slides full width
      className="w-full h-full" // full width & height
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <CarouselArrow
          direction="left"
          onClick={onClickHandler}
          visible={hasPrev}
          label={label}
          className="left-5"
        />
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <CarouselArrow
          direction="right"
          onClick={onClickHandler}
          visible={hasNext}
          label={label}
          className="right-5"
        />
      )}
    >
      {heros.map((hero) => (
        <div
          className="flex justify-center items-center overflow-hidden w-full h-full"
          style={{ color: theme.colors.white[0] }}
        >
          <div
            key={hero.id}
            className="flex flex-col justify-center items-center max-w-[80%] md:max-w-[50%] text-center gap-6 lg:gap-8"
          >
            <p
              className={`${theme.typography.techno_20_semibold} hidden lg:block`}
            >
              {hero.hero_tag}
            </p>
            <p
              className={`${theme.typography.techno_16_semibold} block lg:hidden`}
            >
              {hero.hero_tag}
            </p>
            <h2
              className={`${theme.typography.techno_56_bold} hidden lg:block`}
            >
              {hero.hero_header}
            </h2>
            <h2
              className={`${theme.typography.techno_36_semibold} block lg:hidden`}
            >
              {hero.hero_header}
            </h2>
            <h3
              className={`${theme.typography.techno_24_semibold} hidden lg:block`}
            >
              {hero.hero_subheader}
            </h3>
            <h3
              className={`${theme.typography.techno_16_semibold} block lg:hidden`}
            >
              {hero.hero_subheader}
            </h3>

            <button
              className={`px-16 py-6 rounded-full cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out`}
              style={{
                background: `linear-gradient(90deg, ${theme.colors.red[500]}, ${theme.colors.pink[500]})`,
              }}
            >
              <p
                className={`${theme.typography.techno_24_semibold} hidden lg:block`}
              >
                {hero.cta}
              </p>
              <p
                className={`${theme.typography.techno_16_semibold} block lg:hidden`}
              >
                {hero.cta}
              </p>
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;

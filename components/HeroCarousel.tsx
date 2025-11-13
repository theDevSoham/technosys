"use client";

import { Carousel } from "react-responsive-carousel";
import { theme } from "@/assets/theme";
import CarouselArrow from "./CarouselArrow";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";
import { HeroSection, HeroSections } from "@/types/Hero";

interface HeroCarouselProps {
  heros: HeroSections;
  showIndicators?: boolean;
  onCallToAction?: (item: HeroSection) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  heros,
  showIndicators = true,
  onCallToAction = () => {},
}) => {
  const handleDiscover = (currentItem: HeroSection) => {
    if (currentItem?.cta_link) {
      window.location.href = currentItem?.cta_link;
    }

    onCallToAction(currentItem);
  };

  return (
    <Carousel
      showThumbs={false} // hide thumbnails
      showStatus={false} // show slide number
      showIndicators={showIndicators} // navigation dots
      infiniteLoop={true} // infinite scroll
      autoPlay={true} // autoplay
      interval={2000} // slide interval
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
          className="left-5 z-99 text-white"
        />
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <CarouselArrow
          direction="right"
          onClick={onClickHandler}
          visible={hasNext}
          label={label}
          className="right-5 z-99 text-white"
        />
      )}
    >
      {heros.map((hero) => (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 w-full h-full z-1">
            <Image
              src={hero.bg_img || "/hero-image.png"}
              width={300}
              height={300}
              alt="hero image"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute inset-0 w-full h-full z-2"
            style={{
              color: theme.colors.primary[50],
            }}
          >
            <div
              key={hero.id}
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

                {(hero?.cta || hero?.cta_link) && (
                  <AnimatedButton onClick={() => handleDiscover(hero)}>
                    {hero.cta || hero?.cta_link}
                  </AnimatedButton>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;

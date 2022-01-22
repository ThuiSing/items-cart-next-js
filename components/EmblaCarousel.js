import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "../styles/embla.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumb";
// import { mediaByIndex } from "./Media/media";

const EmblaCarousel = ({ slides, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true,
  });

  // media
  const media = images;
  const mediaByIndex = (index) => media[index % media.length];

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={mainViewportRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>
                  <Image
                    className={styles.embla__slide__img}
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.embla} ${styles.embla_thumb}`}>
        <div className={styles.embla__viewport} ref={thumbViewportRef}>
          <div
            className={`${styles.embla__container} ${styles.embla_container_thumb}`}
          >
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={mediaByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;

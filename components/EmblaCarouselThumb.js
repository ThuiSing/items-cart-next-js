import Image from "next/image";
import React from "react";
import styles from "../styles/embla.module.css";
export const Thumb = ({ selected, onClick, imgSrc }) => (
  <div
    className={`${styles.embla__slide} ${styles.embla__slide_thumb} ${
      selected ? styles.is_selected : ""
    }`}
  >
    <button
      onClick={onClick}
      className={`${styles.embla__slide__inner} ${styles.embla__slide__inner_thumb} `}
      type="button"
    >
      <Image
        className={styles.embla__slide__thumbnail}
        src={imgSrc}
        alt="A cool cat."
      />
    </button>
  </div>
);

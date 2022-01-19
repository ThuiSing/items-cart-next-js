import media1 from "./product1.jpg";
import media2 from "./product2.jpg";
import media3 from "./product3.jpg";
import media4 from "./product4.jpg";

export const media = [media1, media2, media3, media4];
export const mediaByIndex = (index) => media[index % media.length];

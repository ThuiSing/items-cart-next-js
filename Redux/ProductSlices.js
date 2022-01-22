import { createSlice } from "@reduxjs/toolkit";
import img from "../images/dolce.jpg";
import img1 from "../images/dolce1.jpg";
import coat1 from "../images/coat (1).jpg";
import coat2 from "../images/coat (2).jpg";
import coat3 from "../images/coat (3).jpg";
import coat4 from "../images/coat (4).jpg";
import b1 from "../images/b (1).jpg";
import b2 from "../images/b (2).jpg";
import b3 from "../images/b (3).jpg";
import bag1 from "../images/bag (1).jpg";
import bag2 from "../images/bag (2).jpg";
import bag3 from "../images/bag (3).jpg";
import bag4 from "../images/bag (4).jpg";
import t from "../images/t.jpg";
import t1 from "../images/tshirt (1).jpeg";
import t2 from "../images/tshirt (2).jpeg";
import t3 from "../images/tshirt (3).jpeg";
import t4 from "../images/tshirt (4).jpeg";
const initialState = {
  products: [
    {
      id: 0,
      name: "Becky Silk Blazer",
      type: "trending",
      description:
        "Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.",
      designerInformation:
        "An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a downtown romantic theme.",
      CareDEtails: [
        "Storm and midnight-blue stretch cotton blend",
        "Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket",
        "Two button fastening",
        "84% cotton, 14% nylon, 2% elastane",
        "Dry clean",
      ],
      price: 400,
      img: [coat1, coat2, coat3, coat4],
    },
    {
      id: 1,
      name: "Dolce & Gabbana",
      type: "trending",
      description:
        "Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.",
      designerInformation:
        "An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a downtown romantic theme.",
      CareDEtails: [
        "Storm and midnight-blue stretch cotton blend",
        "Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket",
        "Two button fastening",
        "84% cotton, 14% nylon, 2% elastane",
        "Dry clean",
      ],
      price: 400,
      img: [img, img1, img],
    },
    {
      id: 2,
      name: "Balmain",
      type: "trending",
      description:
        "Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.",
      designerInformation:
        "An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a downtown romantic theme.",
      CareDEtails: [
        "Storm and midnight-blue stretch cotton blend",
        "Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket",
        "Two button fastening",
        "84% cotton, 14% nylon, 2% elastane",
        "Dry clean",
      ],
      price: 410,
      img: [b3, b2, b1],
    },
    {
      id: 3,
      name: "Balenciaga",
      type: "trending",
      description:
        "Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.",
      designerInformation:
        "An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a downtown romantic theme.",
      CareDEtails: [
        "Storm and midnight-blue stretch cotton blend",
        "Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket",
        "Two button fastening",
        "84% cotton, 14% nylon, 2% elastane",
        "Dry clean",
      ],
      price: 290,
      img: [bag1, bag2, bag3, bag4],
    },
    {
      id: 4,
      name: "Dolce & Balenciaga",
      type: "trending",
      description:
        "Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.",
      designerInformation:
        "An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a downtown romantic theme.",
      CareDEtails: [
        "Storm and midnight-blue stretch cotton blend",
        "Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket",
        "Two button fastening",
        "84% cotton, 14% nylon, 2% elastane",
        "Dry clean",
      ],
      price: 350,
      img: [t, t1, t2, t3, t4],
    },
  ],
  selectedProduct: {
    id: 0,
    name: "Becky Silk Blazer",
    type: "trending",
    description:
      "Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.",
    designerInformation:
      "An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a downtown romantic theme.",
    CareDEtails: [
      "Storm and midnight-blue stretch cotton blend",
      "Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket",
      "Two button fastening",
      "84% cotton, 14% nylon, 2% elastane",
      "Dry clean",
    ],
    price: 400,
    img: [coat1, coat2, coat3, coat4],
  },
};

export const ProductSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToSelectedProduct: (state, action) => {
      console.log(action.payload);
      state.selectedProduct = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToSelectedProduct } = ProductSlices.actions;

export default ProductSlices.reducer;

import { SHOW_PRODUCTS, SHOW_PRODUCT } from "./type";

const initialState = {
  products: [],
  product: {
    id: 0,
    title: "...",
    category: "...",
    description: "...",
    price: "...",
    image: "...",
  },
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SHOW_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}

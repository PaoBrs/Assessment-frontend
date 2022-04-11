import { SHOW_PRODUCTS, SHOW_PRODUCT, ERASE_PREVIOUS_PRODUCT } from "./type";

const initialState = {
  products: [],
  product: {
    id: 0,
    title: "...",
    category: "...",
    description: "...",
    price: "...",
    image: "...",
    rating: {
      rate: 0,
      count: 0,
    },
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
    case ERASE_PREVIOUS_PRODUCT:
      return {
        ...state,
        product: initialState.product,
      };
    default:
      return state;
  }
}

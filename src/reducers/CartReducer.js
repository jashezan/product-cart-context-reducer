export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payloads.products,
      };
    case "ADD_TO_CART":
      // return {
      //   ...state,
      //   cart: [
      //     ...state.cart,
      //     {
      //       ...action.payloads.product,
      //       qty: 1
      //     },
      //   ],
      // };
      state.cart.map((prod) => {
        if (prod.id === action.payloads.product.id) {
          console.log(state.cart)
          return {
            ...state,
            cart: [
              ...state.cart,
              {
                ...prod,
                qty: prod.qty + 1,
              },
            ],
          };
        } else {
          console.log(state.cart)
          return {
            ...state,
            cart: [
              ...state.cart,
              {
                ...prod,
                qty: 1,
              },
            ],
          };
        }
      });
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((e) => e.id !== action.payloads.id),
      };
    default:
      return state;
  }
};

import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";

export const CartContext = createContext(null);

const initialValue = {
  products: [],
  cart: []
}

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue)

  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

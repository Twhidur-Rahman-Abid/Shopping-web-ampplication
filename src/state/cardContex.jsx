import { createContext, useContext, useEffect, useReducer } from "react";
import { ADD_CART_ITEM, REMOVE_CART, REMOVE_CART_ITEM } from "./constent";

const createCartContext = createContext();
export const cartContext = () => useContext(createCartContext);

const initialState = () => {
  return JSON.parse(localStorage.getItem("cartData")) || [];
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return (state = action.payload);
    case REMOVE_CART_ITEM:
      return (state = action.payload);
    case REMOVE_CART:
      return (state = action.payload);

    default:
      state;
  }
};

export const CardContextProvaider = ({ children }) => {
  const [cartData, dispatch] = useReducer(reducer, initialState());

  // calculate total price
  const totalPrice = cartData.reduce((a, b) => a + b.price * b.qty, 0);

  // calculate total product
  const totalCart = cartData.length;

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <createCartContext.Provider
      value={{
        cartData,
        cardDispatch: dispatch,
        totalPrice,
        totalCart,
      }}
    >
      {children}
    </createCartContext.Provider>
  );
};

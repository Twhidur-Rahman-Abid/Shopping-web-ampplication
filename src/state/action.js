import { ADD_CART_ITEM, REMOVE_CART, REMOVE_CART_ITEM } from "./constent";

const add_action = (product, basket) => {
  const search = basket.find((x) => x.id === product.id);

  if (search) {
    basket = basket.map((x) =>
      x.id === product.id ? { ...search, qty: search.qty + 1 } : x
    );
  } else {
    basket = [...basket, { ...product, qty: 1 }];
  }
  return {
    type: ADD_CART_ITEM,
    payload: basket,
  };
};

const remove_action = (product, basket) => {
  const search = basket.find((x) => x.id === product.id);
  if (search.qty === 1) {
    basket = basket.filter((x) => x.id !== search.id);
  } else {
    basket = basket.map((x) =>
      x.id === product.id ? { ...product, qty: product.qty - 1 } : x
    );
  }

  return {
    type: REMOVE_CART_ITEM,
    payload: basket,
  };
};

const remove = (id, basket) => {
  basket = basket.filter((x) => x.id !== id);
  return {
    type: REMOVE_CART,
    payload: basket,
  };
};

export { remove, remove_action, add_action };

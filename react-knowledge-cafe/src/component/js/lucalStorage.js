const getItemFromLS = (cart, defultValue) => {
  const SaveCart = localStorage.getItem(cart);
  if (SaveCart) {
    return JSON.parse(SaveCart);
  }
  return defultValue;
};
const setItemLS = (cart, value) => {
  const cartStringfy = JSON.stringify(value);
  localStorage.setItem(cart, cartStringfy);
};
const displayItem = (cartkey, item) => {
  const saved = getItemFromLS(cartkey, []);
  saved.push(item);
  setItemLS(cartkey, saved);
};
export { getItemFromLS, setItemLS, displayItem };

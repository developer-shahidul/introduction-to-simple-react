//

const getElementByLocalStorage = () => {
  const cart = localStorage.getItem("Cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const setCartToLocalStorage = (item) => {
  const cartString = JSON.stringify(item);
  localStorage.setItem("Cart", cartString);
};

const addFromLocalStorage = (cart) => {
  const saveCart = getElementByLocalStorage();
  saveCart.push(cart);
  setCartToLocalStorage(saveCart);
};

// remove
const removeForLocalStorage = (id) => {
  const cart = getElementByLocalStorage();
  const remainingCart = cart.filter((item) => item !== id);
  setCartToLocalStorage(remainingCart);
};

export { getElementByLocalStorage, removeForLocalStorage, addFromLocalStorage };

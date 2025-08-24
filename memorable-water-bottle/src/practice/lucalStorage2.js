//
const getStorageCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};
const saveCartToLs = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
const addToLS = (id) => {
  const cart = getStorageCart();
  cart.push(id);
  saveCartToLs(cart);
  console.log("Saved Cart:", cart); // 🔍 দেখো ঠিকমতো save হচ্ছে কিনা
};

const removeFromLs = (id) => {
  const cart = getStorageCart();
  const remaining = cart.filter((itemId) => itemId !== id);
  saveCartToLs(remaining);
};

export { addToLS, getStorageCart, removeFromLs };

const getStorageCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const removeFromLS = (id) => {
  const cart = getStorageCart();

  // removing every id
  const remaining = cart.filter((idx) => idx !== id);

  saveCartToLS(remaining);
};

const addToLS = (id) => {
  const cart = getStorageCart(); // 1️⃣ আগে লোকালস্টোরেজ থেকে cart নামের array বের করে আনা হচ্ছে
  cart.push(id); // 2️⃣ cart array এর মধ্যে নতুন id (মানে নতুন item) যোগ করা হচ্ছে

  // save to lucalstorage

  saveCartToLS(cart); // 3️⃣ updated cart আবার localStorage-এ save করে রাখা হচ্ছে
};

export { addToLS, getStorageCart, removeFromLS };

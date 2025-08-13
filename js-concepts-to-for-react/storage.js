//
const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;

  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  // id and value te judi man pawa jai taile setItem hobe
  if (id && value) {
    localStorage.setItem(id, value);
  }
  idInput.value = "";
  valueInput.value = "";
};

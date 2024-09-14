import { displayProductsIndex } from "./list-products.js";

const buttonSearch = document.getElementById("buttonSearch");

let products = JSON.parse(localStorage.getItem("productos"))

console.log(products)

buttonSearch.addEventListener("click", () => {

  console.log(searchInput.value.toLowerCase())

  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) => product.title.toLowerCase().startsWith(searchTerm));

  displayProductsIndex(filteredProducts);
});
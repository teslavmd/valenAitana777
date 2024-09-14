import { displayProductsIndex } from "./list-products.js";
import { showSidebar } from "./carrito.js"
import { initilizelocalStorage } from "./localStorage.js";
import { createAside } from "./sideBar.js";

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            displayProductsIndex(products);
            //
            localStorage.setItem('productos', JSON.stringify(products));
        })
        .catch(error => console.error('Error fetching products:', error));
    
    });

initilizelocalStorage();

createAside()
document.getElementById('toggleSidebarBtn').onclick = () => showSidebar();
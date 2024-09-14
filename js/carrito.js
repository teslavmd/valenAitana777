import { createAside } from "./sideBar.js";

export function showSidebar() {
    const sidebar = document.getElementById('offcanvasRight');
    sidebar.classList.add('open')
    
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');

    closeSidebarBtn.onclick = () => {
        sidebar.classList.remove('open');
    };

    createAside()
}

export function addToCart(product){
    let objlocalStorage = JSON.parse(localStorage.getItem('productosCarrito'))
    let productExists = objlocalStorage.find((prod) => prod.id == product.id)
    let index = objlocalStorage.findIndex((prod) => prod.id == product.id)

    if (productExists)
    {
        objlocalStorage[index].quantity += 1;
    } 
    else
    {
        product.quantity = 1;
        objlocalStorage.push(product);
    }
    
    localStorage.setItem("productosCarrito", JSON.stringify(objlocalStorage))


    //localStorage.setItem
}
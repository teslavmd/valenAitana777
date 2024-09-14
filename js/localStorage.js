//Inicializar localstorage
export function initilizelocalStorage(){

    let objlocalStorage = JSON.parse(localStorage.getItem('productosCarrito'));

    if (objlocalStorage == null)
    {
        localStorage.setItem('productosCarrito', JSON.stringify([]));
    }
}
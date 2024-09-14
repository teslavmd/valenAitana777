import { addToCart } from "./carrito.js";

export function showModal(product) {
    const modalTitle = document.getElementById('modalProductTitle');
    const modalImg = document.getElementById('img')
    const modalPrice = document.getElementById('modalProductPrice');
    const modalDescription = document.getElementById('modalProductDescription');
    const addToCartBtn = document.getElementById('addToCartBtn')

    modalTitle.textContent = product.title;
    modalImg.src = product.image;
    modalImg.alt = product.title;
    modalPrice.textContent = `$${product.price}`;
    modalDescription.textContent = product.description;

    addToCartBtn.onclick = () => addToCart(product);

    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
}
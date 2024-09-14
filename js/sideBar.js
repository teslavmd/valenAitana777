export function createAside(){
    let body = document.querySelector(".offcanvas-body");
    
    // Ensure body exists
    if (!body) {
        console.error('Element with class "offcanvas-body" not found.');
        return;
    }
    
    // Retrieve products from localStorage
    let productStorage = JSON.parse(localStorage.getItem("productosCarrito")) || [];
    let asideContent = '';

    // Build HTML content for each product
    productStorage.forEach((p) => {
        asideContent += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${p.image}" class="img-fluid rounded-start" alt="${p.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text"><small class="text-body-secondary">
                        <p>${p.title}<p>
                        <span>${p.price}</span>
                        <button>+</button>
                        <span>${p.quantity}</span>
                        <button>-</button>
                        </small></p>
                    </div>
                </div>
            </div>
        </div>`;
    });
    
    body.innerHTML = asideContent;
}
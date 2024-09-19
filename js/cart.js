// Initialize an empty cart array
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); //Save cart to local storage
    alert(`${product.name} has been added to your cart.`);
}

// Event listener for all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.getAttribute('data-name');
            const productPrice = productCard.getAttribute('data-price');

            const product = {
                name: productName,
                price: parseFloat(productPrice)
            };

            addToCart(product);
        });
    });
});



const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");

const buttons = document.querySelectorAll(".add-btn");

const cartItems = document.getElementById("cart-items");

const total = document.getElementById("total");

const count = document.getElementById("cart-count");

let totalPrice = 0;

let cartCount = 0;

cartBtn.onclick = () => {
  cart.classList.add("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};

buttons.forEach((button) => {
  button.onclick = () => {
    const name = button.dataset.name;

    const price = parseFloat(button.dataset.price);

    document.querySelector(".empty-cart")?.remove();

    const item = document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML = `

<div>

<strong>${name}</strong>

<p>$${price.toFixed(2)}</p>

</div>

<button class="remove-btn">Remove</button>

`;

    cartItems.appendChild(item);

    cartCount++;

    count.textContent = cartCount;

    totalPrice += price;

    total.textContent = totalPrice.toFixed(2);

    button.innerHTML = "✓ Added";

    button.style.background = "#4CAF50";

    setTimeout(() => {
      button.innerHTML = "Add to Cart";

      button.style.background = "#5c4033";
    }, 1000);

    item.querySelector(".remove-btn").onclick = () => {
      item.remove();

      cartCount--;

      count.textContent = cartCount;

      totalPrice -= price;

      total.textContent = totalPrice.toFixed(2);

      if (cartCount == 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
      }
    };
  };
});

const checkoutModal = document.getElementById("checkout-modal");
const closeCheckout = document.getElementById("close-checkout");

document.getElementById("checkout").onclick = () => {

  if (cartCount == 0) {

    alert("Your cart is empty!");

  } else {

    checkoutModal.classList.add("active");

    // Clear cart
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';

    // Reset count and total
    cartCount = 0;
    totalPrice = 0;

    count.textContent = cartCount;
    total.textContent = totalPrice.toFixed(2);
  }

};

closeCheckout.onclick = () => {

  checkoutModal.classList.remove("active");

  cart.classList.remove("active");

};
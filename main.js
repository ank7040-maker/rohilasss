// Basic JS for Rohilas
console.log("Rohilas store loaded");

// Simple cart counter demo (front-end only)
document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.querySelector(".nav-cta");
  const productButtons = document.querySelectorAll(".product-btn");
  let count = 0;

  if (!cartButton) return;

  productButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.tagName.toLowerCase() === "button") {
        e.preventDefault();
      }
      count += 1;
      cartButton.textContent = `Cart (${count})`;
    });
  });
});

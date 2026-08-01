const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.querySelector("#product-select");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    if (window.location.pathname.includes("review.html")) {
        let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;
        reviewCount++;
        localStorage.setItem("reviewCount-ls", reviewCount);

        document.getElementById("counter").textContent = reviewCount;
        // const counterDisplay = document.querySelector("#counter");
        // if (counterDisplay) {
        //     counterDisplay.textContent = reviewCount;
        // }
    }
})
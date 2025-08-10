const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const resultCount = document.getElementById("resultCount");
const totalPriceEl = document.getElementById("totalPrice");
const products = Array.from(document.querySelectorAll(".card"));

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categorySelect.value;
  let visibleProducts = 0;
  let totalPrice = 0;

  products.forEach((product) => {
    const name = product.dataset.name.toLowerCase();
    const productCategory = product.dataset.category;
    const price = Number(product.dataset.price);

    const matchText = name.includes(searchText);
    const matchCategory = category === "all" || productCategory === category;

    if (matchText && matchCategory) {
      product.style.display = "";
      product.classList.add("small");
      visibleProducts++;
      totalPrice += price;
    } else {
      product.style.display = "none";
      product.classList.remove("small");
    }
  });

  resultCount.textContent = visibleProducts + " produk";
  totalPriceEl.textContent = "Total: Rp " + totalPrice.toLocaleString("id-ID");
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

/* =========================================
   FOODIE PRO — JAVASCRIPT
   ========================================= */

"use strict";

// =========================================
// 1. FOOD DATA
// =========================================

const foods = [
  {
    id: 1,
    name: "Smoky Chicken Biryani",
    restaurant: "Nawab's Kitchen",
    category: "Indian",
    price: 249,
    rating: 4.8,
    tag: "Bestseller",
    description: "Aromatic basmati rice with smoky spices and tender chicken.",
   image: "images/smoky-chicken-biryani.avif"
  },
  {
    id: 2,
    name: "Garden Margherita Pizza",
    restaurant: "Bella Forno",
    category: "Pizza",
    price: 199,
    rating: 4.7,
    tag: "Popular",
    description: "Classic tomato sauce, mozzarella and fragrant basil.",
    image: "images/Garden-margherita-pizza.avif"
  },
  {
    id: 3,
    name: "Classic Smash Burger",
    restaurant: "Grill District",
    category: "Burger",
    price: 179,
    rating: 4.6,
    tag: "Must try",
    description: "Juicy burger patty with cheese, lettuce and house sauce.",
    image: "images/classic-smash-burger.avif"
  },
  {
    id: 4,
    name: "Berry Bliss Salad Bowl",
    restaurant: "Green Spoon",
    category: "Healthy",
    price: 159,
    rating: 4.5,
    tag: "Fresh",
    description: "A colourful bowl with greens, berries and fresh vegetables.",
    image: "images/berry-bliss-salad-bowl.avif"
  },
  {
    id: 5,
    name: "Paneer Butter Masala",
    restaurant: "Spice Route",
    category: "Indian",
    price: 219,
    rating: 4.8,
    tag: "Vegetarian",
    description: "Soft paneer in a rich, creamy tomato-based curry.",
    image: "images/paneer-butter-masala.avif"
  },
  {
    id: 6,
    name: "Chocolate Fudge Cake",
    restaurant: "Sugar & Crumb",
    category: "Dessert",
    price: 129,
    rating: 4.9,
    tag: "Sweet pick",
    description: "Rich chocolate cake layered with smooth chocolate fudge.",
    image: "images/chocolate-fudge-cake.avif"
  },
  {
    id: 7,
    name: "Crispy Masala Fries",
    restaurant: "Grill District",
    category: "Snacks",
    price: 99,
    rating: 4.4,
    tag: "Snack time",
    description: "Golden fries tossed in a savoury Indian spice mix.",
    image: "images/crispy-masala-fries.avif"
  },
  {
    id: 8,
    name: "Loaded Cheese Pizza",
    restaurant: "Bella Forno",
    category: "Pizza",
    price: 299,
    rating: 4.8,
    tag: "Cheesy",
    description: "A generous layer of melted cheese with delicious toppings.",
    image: "images/loaded-cheese-pizza.avif"
  },
  {
    id: 9,
    name: "Crispy Chicken Wings",
    restaurant: "Grill District",
    category: "Snacks",
    price: 189,
    rating: 4.7,
    tag: "Spicy",
    description: "Crispy chicken wings coated in a bold, tangy glaze.",
    image: "images/crispy-chicken-wings.avif"
  },
  {
    id: 10,
    name: "Mutton Dum Biryani",
    restaurant: "Nawab's Kitchen",
    category: "Indian",
    price: 329,
    rating: 4.9,
    tag: "Chef's pick",
    description: "Slow-cooked mutton and fragrant rice with royal spices.",
    image: "images/mutton-dum-biryani.avif"
  },
  {
    id: 11,
    name: "Masala Dosa",
    restaurant: "Spice Route",
    category: "Indian",
    price: 119,
    rating: 4.6,
    tag: "Classic",
    description: "Golden crispy dosa filled with seasoned potato masala.",
    image: "images/masala-dosa.avif"
  },
  {
    id: 12,
    name: "Pancake Stack",
    restaurant: "Sugar & Crumb",
    category: "Dessert",
    price: 149,
    rating: 4.6,
    tag: "Sweet treat",
    description: "Fluffy pancakes served with syrup and sweet toppings.",
    image: "images/pancake-stack.avif"
  },
  {
    id: 13,
    name: "Avocado Toast",
    restaurant: "Green Spoon",
    category: "Healthy",
    price: 169,
    rating: 4.5,
    tag: "Fresh",
    description: "Toasted bread topped with creamy avocado and seasoning.",
    image: "images/avocado-toast.avif"
  },
  {
    id: 14,
    name: "Double Cheese Burger",
    restaurant: "Grill District",
    category: "Burger",
    price: 229,
    rating: 4.8,
    tag: "Extra cheesy",
    description: "Two juicy patties with melted cheese and burger sauce.",
    image: "images/double-cheese-burger.avif"
  },
  {
    id: 15,
    name: "Butter Garlic Noodles",
    restaurant: "Wok & Roll",
    category: "Chinese",
    price: 159,
    rating: 4.5,
    tag: "Wok favourite",
    description: "Stir-fried noodles with garlic, vegetables and soy sauce.",
    image: "images/butter-garlic-noodles.avif"
  },
  {
    id: 16,
    name: "Chilli Garlic Momos",
    restaurant: "Wok & Roll",
    category: "Chinese",
    price: 139,
    rating: 4.7,
    tag: "Spicy favourite",
    description: "Soft dumplings tossed in a spicy chilli garlic sauce.",
    image: "images/chilli-garlic-momos.avif"
  }
];

// =========================================
// 2. RESTAURANT DATA
// =========================================

const restaurants = [
  {
    name: "Nawab's Kitchen",
    cuisine: "North Indian · Biryani",
    rating: 4.8,
    time: "25–35 min",
    description: "Royal flavours, fragrant biryani and traditional Indian favourites.",
    image: "images/nawab's-kitchen.avif",
    menu: ["Smoky Chicken Biryani", "Mutton Dum Biryani"]
  },
  {
    name: "Bella Forno",
    cuisine: "Italian · Pizza",
    rating: 4.7,
    time: "20–30 min",
    description: "Pizza favourites with rich cheese, classic sauces and fresh toppings.",
    image: "images/bella-forno.avif",
    menu: ["Garden Margherita Pizza", "Loaded Cheese Pizza"]
  },
  {
    name: "Grill District",
    cuisine: "Burgers · Grills",
    rating: 4.8,
    time: "20–30 min",
    description: "Burgers, crispy sides and satisfying grilled favourites.",
    image: "images/grill-district.avif",
    menu: ["Classic Smash Burger", "Crispy Chicken Wings"]
  },
  {
    name: "Green Spoon",
    cuisine: "Healthy · Fresh",
    rating: 4.5,
    time: "15–25 min",
    description: "Colourful bowls and fresh options for lighter cravings.",
    image: "images/green-spoon.avif",
    menu: ["Berry Bliss Salad Bowl", "Avocado Toast"]
  },
  {
    name: "Spice Route",
    cuisine: "Indian · Vegetarian",
    rating: 4.7,
    time: "20–30 min",
    description: "Comforting Indian classics, aromatic spices and vegetarian meals.",
    image: "images/spice-route.avif",
    menu: ["Paneer Butter Masala", "Masala Dosa"]
  },
  {
    name: "Sugar & Crumb",
    cuisine: "Bakery · Desserts",
    rating: 4.8,
    time: "15–25 min",
    description: "Chocolate treats, fluffy pancakes and little moments of sweetness.",
    image: "images/sugar-&-crumb.avif",
    menu: ["Chocolate Fudge Cake", "Pancake Stack"]
  },
  {
    name: "Wok & Roll",
    cuisine: "Chinese · Asian",
    rating: 4.6,
    time: "20–30 min",
    description: "Wok-tossed noodles and flavour-packed dumplings.",
    image: "images/wok-&-roll.avif",
    menu: ["Butter Garlic Noodles", "Chilli Garlic Momos"]
  }
];

// =========================================
// 3. APP STATE
// =========================================

const STORAGE_KEYS = {
  cart: "foodieProCart",
  theme: "foodieProTheme",
  coupon: "foodieProCoupon"
};

const DELIVERY_FEE = 30;
const COUPON_CODE = "FOODIE10";
const COUPON_RATE = 0.10;

let cart = loadCart();
let activeCategory = "All";
let activeRestaurant = "";
let searchQuery = "";
let sortOption = "featured";
let couponApplied = loadCoupon();
let toastTimer;

// =========================================
// 4. DOM HELPERS
// =========================================

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function findFood(foodId) {
  return foods.find((food) => food.id === Number(foodId));
}

function getFoodQuantity(foodId) {
  const item = cart.find((entry) => entry.id === Number(foodId));
  return item ? item.quantity : 0;
}

// =========================================
// 5. LOCAL STORAGE
// =========================================

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart));

    if (!Array.isArray(saved)) {
      return [];
    }

    return saved
      .map((item) => ({
        id: Number(item.id),
        quantity: Number(item.quantity)
      }))
      .filter((item) => {
        return (
          findFood(item.id) &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0 &&
          item.quantity <= 99
        );
      });
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  } catch {
    // The app still works for the current session.
  }
}

function loadCoupon() {
  try {
    return localStorage.getItem(STORAGE_KEYS.coupon) === COUPON_CODE;
  } catch {
    return false;
  }
}

function saveCoupon() {
  try {
    if (couponApplied) {
      localStorage.setItem(STORAGE_KEYS.coupon, COUPON_CODE);
    } else {
      localStorage.removeItem(STORAGE_KEYS.coupon);
    }
  } catch {
    // The app still works without persistent coupon storage.
  }
}

// =========================================
// 6. TOAST NOTIFICATION
// =========================================

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// =========================================
// 7. RESTAURANT RENDERING
// =========================================

function renderRestaurants() {
  const container = $("#restaurantGrid");

  container.innerHTML = restaurants.map((restaurant) => {
    const restaurantFoods = foods.filter(
      (food) => food.restaurant === restaurant.name
    );

    const preview = restaurantFoods.slice(0, 2).map((food) => `
      <div class="menu-preview-item">
        <span>${escapeHTML(food.name)}</span>
        <strong>${formatPrice(food.price)}</strong>
      </div>
    `).join("");

    return `
      <article class="restaurant-card">

        <div class="restaurant-cover">
          <img
            src="${escapeHTML(restaurant.image)}"
            alt="${escapeHTML(restaurant.name)} food"
            loading="lazy"
          >

          <span class="restaurant-cuisine-badge">
            ${escapeHTML(restaurant.cuisine)}
          </span>
        </div>

        <div class="restaurant-info">

          <div class="restaurant-title-row">
            <h3>${escapeHTML(restaurant.name)}</h3>
            <span class="restaurant-rating">
              ★ ${restaurant.rating.toFixed(1)}
            </span>
          </div>

          <div class="restaurant-meta">
            <span>🕒 ${escapeHTML(restaurant.time)}</span>
            <span>🍽️ ${restaurantFoods.length} dishes</span>
          </div>

          <p class="restaurant-description">
            ${escapeHTML(restaurant.description)}
          </p>

          <div class="restaurant-menu-preview">
            <h4>Menu highlights</h4>
            ${preview}
          </div>

          <div class="restaurant-actions">
            <button
              type="button"
              data-action="view-restaurant"
              data-restaurant="${escapeHTML(restaurant.name)}"
            >
              View full menu
            </button>

            <button
              type="button"
              data-action="quick-add"
              data-food-id="${restaurantFoods[0]?.id || ""}"
            >
              + Quick add
            </button>
          </div>

        </div>
      </article>
    `;
  }).join("");
}

// =========================================
// 8. FOOD CARD RENDERING
// =========================================

function getFilteredFoods() {
  let result = [...foods];

  if (activeCategory !== "All") {
    result = result.filter(
      (food) => food.category === activeCategory
    );
  }

  if (activeRestaurant) {
    result = result.filter(
      (food) => food.restaurant === activeRestaurant
    );
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();

    result = result.filter((food) => {
      return (
        food.name.toLowerCase().includes(query) ||
        food.restaurant.toLowerCase().includes(query) ||
        food.category.toLowerCase().includes(query) ||
        food.description.toLowerCase().includes(query)
      );
    });
  }

  switch (sortOption) {
    case "price-low":
      result.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      result.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;

    case "name":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;

    default:
      break;
  }

  return result;
}

function renderFoods() {
  const grid = $("#foodGrid");
  const emptyState = $("#emptyState");
  const resultsCount = $("#resultsCount");

  const filteredFoods = getFilteredFoods();

  if (filteredFoods.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");

    grid.innerHTML = filteredFoods.map((food) => `
      <article class="food-card">

        <div class="food-image">
          <img
            src="${escapeHTML(food.image)}"
            alt="${escapeHTML(food.name)}"
            loading="lazy"
          >

          <span class="food-tag">
            ${escapeHTML(food.tag)}
          </span>

          <span class="food-rating">
            ★ ${food.rating.toFixed(1)}
          </span>
        </div>

        <div class="food-details">

          <span class="food-restaurant">
            ${escapeHTML(food.restaurant)}
          </span>

          <h3>${escapeHTML(food.name)}</h3>

          <p class="food-description">
            ${escapeHTML(food.description)}
          </p>

          <div class="food-bottom">

            <div>
              <span class="food-price">
                ${formatPrice(food.price)}
              </span>

              <span class="food-category-label">
                ${escapeHTML(food.category)}
              </span>
            </div>

            <button
              class="add-button"
              type="button"
              data-action="add-food"
              data-food-id="${food.id}"
              aria-label="Add ${escapeHTML(food.name)} to cart"
              title="Add to cart"
            >
              +
            </button>

          </div>
        </div>

      </article>
    `).join("");
  }

  const suffix = activeRestaurant
    ? ` from ${activeRestaurant}`
    : "";

  resultsCount.textContent =
    `Showing ${filteredFoods.length} of ${foods.length} dishes${suffix}`;

  $("#clearSearch").classList.toggle("visible", searchQuery.length > 0);
}

function refreshFoodDisplay() {
  renderFoods();
  updateCategoryButtons();
}

function updateCategoryButtons() {
  $$(".category-btn").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.category === activeCategory
    );
  });
}

// =========================================
// 9. FILTER AND SEARCH EVENTS
// =========================================

$("#categoryList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;
  activeRestaurant = "";

  refreshFoodDisplay();
});

$("#searchInput").addEventListener("input", (event) => {
  searchQuery = event.target.value.trim();
  renderFoods();
});

$("#clearSearch").addEventListener("click", () => {
  $("#searchInput").value = "";
  searchQuery = "";
  renderFoods();
  $("#searchInput").focus();
});

$("#sortSelect").addEventListener("change", (event) => {
  sortOption = event.target.value;
  renderFoods();
});

function resetFilters() {
  activeCategory = "All";
  activeRestaurant = "";
  searchQuery = "";
  sortOption = "featured";

  $("#searchInput").value = "";
  $("#sortSelect").value = "featured";

  refreshFoodDisplay();

  showToast("All filters have been reset.");
}

$("#resetFilters").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);

// =========================================
// 10. RESTAURANT MENU BUTTONS
// =========================================

$("#restaurantGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");

  if (!button) return;

  const action = button.dataset.action;

  if (action === "view-restaurant") {
    activeRestaurant = button.dataset.restaurant;
    activeCategory = "All";
    searchQuery = "";

    $("#searchInput").value = "";
    refreshFoodDisplay();

    $("#menu").scrollIntoView({ behavior: "smooth" });

    showToast(`Showing the menu for ${activeRestaurant}.`);
  }

  if (action === "quick-add") {
    addToCart(button.dataset.foodId);
  }
});

// =========================================
// 11. ADD TO CART
// =========================================

function addToCart(foodId) {
  const food = findFood(foodId);

  if (!food) {
    showToast("Sorry, this dish could not be found.");
    return;
  }

  const existing = cart.find(
    (item) => item.id === food.id
  );

  if (existing) {
    if (existing.quantity >= 99) {
      showToast("Maximum quantity reached.");
      return;
    }

    existing.quantity += 1;
  } else {
    cart.push({
      id: food.id,
      quantity: 1
    });
  }

  saveCart();
  renderCart();

  showToast(`${food.name} added to your cart.`);
}

$("#foodGrid").addEventListener("click", (event) => {
  const button = event.target.closest('[data-action="add-food"]');

  if (!button) return;

  addToCart(button.dataset.foodId);
});

// =========================================
// 12. CART TOTALS
// =========================================

function getCartSubtotal() {
  return cart.reduce((total, item) => {
    const food = findFood(item.id);

    return food
      ? total + food.price * item.quantity
      : total;
  }, 0);
}

function getDiscount() {
  if (!couponApplied) return 0;

  return Math.round(getCartSubtotal() * COUPON_RATE);
}

function getDeliveryFee() {
  return cart.length > 0 ? DELIVERY_FEE : 0;
}

function getCartTotal() {
  return Math.max(
    0,
    getCartSubtotal() + getDeliveryFee() - getDiscount()
  );
}

function getCartItemCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// =========================================
// 13. RENDER CART
// =========================================

function renderCart() {
  const itemsContainer = $("#cartItems");
  const emptyState = $("#cartEmpty");
  const summary = $("#cartSummary");

  const itemCount = getCartItemCount();

  $("#cartCount").textContent = itemCount;
  $("#drawerCartCount").textContent = `(${itemCount})`;

  if (cart.length === 0) {
    itemsContainer.innerHTML = "";

    emptyState.classList.remove("hidden");
    summary.classList.add("hidden");

    couponApplied = false;
    saveCoupon();

    updateCartSummary();

    return;
  }

  emptyState.classList.add("hidden");
  summary.classList.remove("hidden");

  itemsContainer.innerHTML = cart.map((item) => {
    const food = findFood(item.id);

    if (!food) return "";

    return `
      <article class="cart-item">

        <img
          src="${escapeHTML(food.image)}"
          alt="${escapeHTML(food.name)}"
        >

        <div>

          <h3>${escapeHTML(food.name)}</h3>

          <span class="cart-item-restaurant">
            ${escapeHTML(food.restaurant)}
          </span>

          <p class="cart-item-price">
            ${formatPrice(food.price * item.quantity)}
          </p>

          <div class="cart-item-controls">

            <div class="quantity-control">
              <button
                type="button"
                data-cart-action="decrease"
                data-food-id="${food.id}"
                aria-label="Decrease quantity"
              >−</button>

              <span>${item.quantity}</span>

              <button
                type="button"
                data-cart-action="increase"
                data-food-id="${food.id}"
                aria-label="Increase quantity"
              >+</button>
            </div>

            <button
              class="remove-item"
              type="button"
              data-cart-action="remove"
              data-food-id="${food.id}"
            >
              Remove
            </button>

          </div>
        </div>
      </article>
    `;
  }).join("");

  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = getCartSubtotal();
  const discount = getDiscount();
  const delivery = getDeliveryFee();
  const total = getCartTotal();

  $("#subtotal").textContent = formatPrice(subtotal);
  $("#deliveryFee").textContent = formatPrice(delivery);
  $("#discountAmount").textContent = `−${formatPrice(discount)}`;
  $("#totalAmount").textContent = formatPrice(total);
  $("#checkoutTotal").textContent = formatPrice(total);

  $("#discountRow").classList.toggle(
    "hidden",
    !couponApplied || discount === 0
  );

  if (couponApplied) {
    $("#couponInput").value = COUPON_CODE;
    $("#couponMessage").textContent = "✓ 10% discount applied!";
  } else {
    $("#couponMessage").textContent = "";
  }
}

// =========================================
// 14. CART QUANTITY CONTROLS
// =========================================

$("#cartItems").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");

  if (!button) return;

  const foodId = Number(button.dataset.foodId);
  const action = button.dataset.cartAction;

  const item = cart.find((entry) => entry.id === foodId);

  if (!item) return;

  if (action === "increase") {
    if (item.quantity >= 99) {
      showToast("Maximum quantity reached.");
      return;
    }

    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;

    if (item.quantity <= 0) {
      cart = cart.filter((entry) => entry.id !== foodId);
    }
  }

  if (action === "remove") {
    cart = cart.filter((entry) => entry.id !== foodId);
    showToast("Item removed from cart.");
  }

  saveCart();
  renderCart();
});

$("#clearCart").addEventListener("click", () => {
  if (cart.length === 0) return;

  cart = [];
  couponApplied = false;

  saveCart();
  saveCoupon();
  renderCart();

  showToast("Your cart has been cleared.");
});

// =========================================
// 15. CART DRAWER
// =========================================

function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#cartOverlay").classList.add("active");

  $("#cartDrawer").setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartOverlay").classList.remove("active");

  $("#cartDrawer").setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#cartOverlay").addEventListener("click", closeCart);

$("#continueShopping").addEventListener("click", () => {
  closeCart();
  $("#menu").scrollIntoView({ behavior: "smooth" });
});

// =========================================
// 16. COUPON CODE
// =========================================

function applyCoupon() {
  const enteredCode = $("#couponInput").value.trim().toUpperCase();

  if (cart.length === 0) {
    showToast("Add a dish to your cart first.");
    return;
  }

  if (enteredCode === COUPON_CODE) {
    couponApplied = true;

    saveCoupon();
    updateCartSummary();

    showToast("Coupon applied! You saved 10%.");
  } else {
    couponApplied = false;

    saveCoupon();
    updateCartSummary();

    $("#couponMessage").textContent =
      "Invalid code. Try FOODIE10.";

    $("#couponMessage").style.color = "#df4c4c";

    showToast("Please enter a valid coupon code.");
  }
}

$("#applyCoupon").addEventListener("click", applyCoupon);

$("#couponInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    applyCoupon();
  }
});

$("#copyCoupon").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(COUPON_CODE);
    showToast("FOODIE10 copied to clipboard!");
  } catch {
    const input = document.createElement("textarea");

    input.value = COUPON_CODE;
    input.style.position = "fixed";
    input.style.opacity = "0";

    document.body.appendChild(input);
    input.select();

    const copied = document.execCommand("copy");

    input.remove();

    showToast(
      copied
        ? "FOODIE10 copied to clipboard!"
        : "Use coupon code FOODIE10."
    );
  }
});

// =========================================
// 17. CHECKOUT MODAL
// =========================================

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  if (
    !$("#cartDrawer").classList.contains("open") &&
    !$$(".modal-overlay.open").length
  ) {
    document.body.style.overflow = "";
  }
}

$("#checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your cart is empty.");
    return;
  }

  closeCart();

  $("#checkoutTotal").textContent = formatPrice(getCartTotal());

  openModal($("#checkoutModal"));
});

$("#closeCheckout").addEventListener("click", () => {
  closeModal($("#checkoutModal"));
});

$("#checkoutModal").addEventListener("click", (event) => {
  if (event.target === $("#checkoutModal")) {
    closeModal($("#checkoutModal"));
  }
});

// =========================================
// 18. PLACE DEMO ORDER
// =========================================

$("#checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (cart.length === 0) {
    closeModal($("#checkoutModal"));
    showToast("Your cart is empty.");
    return;
  }

  const customerName = $("#customerName").value.trim();
  const phone = $("#customerPhone").value.trim();
  const address = $("#customerAddress").value.trim();

  if (!customerName || !phone || !address) {
    showToast("Please complete all checkout fields.");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    showToast("Enter a valid 10-digit phone number.");
    return;
  }

  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const orderTotal = getCartTotal();

  $("#orderId").textContent = `FD-${orderNumber}`;

  $("#successMessage").textContent =
    `Thank you, ${customerName}! Your demo order total is ${formatPrice(orderTotal)}. This is a simulation only; no actual order or payment was created.`;

  closeModal($("#checkoutModal"));

  cart = [];
  couponApplied = false;

  saveCart();
  saveCoupon();
  renderCart();

  $("#checkoutForm").reset();

  openModal($("#successModal"));
});

$("#finishOrder").addEventListener("click", () => {
  closeModal($("#successModal"));

  $("#menu").scrollIntoView({ behavior: "smooth" });

  showToast("Thanks for trying Foodie Pro!");
});

$("#successModal").addEventListener("click", (event) => {
  if (event.target === $("#successModal")) {
    closeModal($("#successModal"));
  }
});

// =========================================
// 19. DARK MODE
// =========================================

function applyTheme(theme) {
  const darkMode = theme === "dark";

  document.body.classList.toggle("dark-mode", darkMode);

  $("#themeToggle").textContent = darkMode ? "☀️" : "🌙";

  $("#themeToggle").setAttribute(
    "aria-label",
    darkMode ? "Switch to light mode" : "Switch to dark mode"
  );
}

function loadTheme() {
  try {
    return localStorage.getItem(STORAGE_KEYS.theme) || "light";
  } catch {
    return "light";
  }
}

$("#themeToggle").addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode")
    ? "light"
    : "dark";

  applyTheme(nextTheme);

  try {
    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  } catch {
    // Theme still changes for the current session.
  }
});

// =========================================
// 20. MOBILE NAVIGATION
// =========================================

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#navLinks");
  const isOpen = nav.classList.toggle("open");

  $("#menuToggle").textContent = isOpen ? "×" : "☰";

  $("#menuToggle").setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

$("#navLinks").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    $("#navLinks").classList.remove("open");
    $("#menuToggle").textContent = "☰";
  }
});

// =========================================
// 21. NEWSLETTER DEMO
// =========================================

$("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = $("#newsletterEmail").value.trim();

  if (!email) {
    showToast("Please enter your email address.");
    return;
  }

  showToast("Thanks! Newsletter signup demo completed.");

  $("#newsletterForm").reset();
});

// =========================================
// 22. FOOTER CATEGORY LINKS
// =========================================

$$("[data-footer-category]").forEach((link) => {
  link.addEventListener("click", () => {
    activeCategory = link.dataset.footerCategory;
    activeRestaurant = "";
    searchQuery = "";

    $("#searchInput").value = "";

    refreshFoodDisplay();
  });
});

// =========================================
// 23. ANNOUNCEMENT BAR
// =========================================

$("#closeAnnouncement").addEventListener("click", () => {
  $(".announcement").style.display = "none";
});

// =========================================
// 24. KEYBOARD SUPPORT
// =========================================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();

    closeModal($("#checkoutModal"));
    closeModal($("#successModal"));

    $("#navLinks").classList.remove("open");
    $("#menuToggle").textContent = "☰";
  }
});

// =========================================
// 25. CURRENT YEAR
// =========================================

$("#currentYear").textContent = new Date().getFullYear();

// =========================================
// 26. INITIALIZE APP
// =========================================

function initApp() {
  applyTheme(loadTheme());

  renderRestaurants();
  renderFoods();
  renderCart();

  console.log("Foodie Pro initialized successfully!");
}

initApp();
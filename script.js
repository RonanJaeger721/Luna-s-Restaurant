const phoneNumber = "263771727990";

const menuItems = [
  {
    id: "granola-mango-bowl",
    category: "breakfast",
    name: "granola mango bowl",
    description: "Granola, honey yoghurt, mango sorbet, berries and maple syrup.",
    price: 8
  },
  {
    id: "lunas-acai-bowl",
    category: "breakfast",
    name: "Luna's acai smoothie bowl",
    description: "Acai smoothie, banana, strawberry, blueberry, kiwi, granola and peanut butter.",
    price: 9
  },
  {
    id: "brioche-french-toast",
    category: "breakfast",
    name: "brioche french toast",
    description: "Vanilla cream, fresh berries and mixed berry compote.",
    price: 10
  },
  {
    id: "english-breakfast",
    category: "breakfast",
    name: "english breakfast",
    description: "Eggs your way on toast with sausage, bacon, beans, mushrooms, tomato and sauteed potatoes.",
    price: 12
  },
  {
    id: "steak-breakfast",
    category: "breakfast",
    name: "steak breakfast",
    description: "Eggs your way on toast, steak, beans, mushrooms, tomato, onion and potatoes.",
    price: 14
  },
  {
    id: "breakfast-burger",
    category: "breakfast",
    name: "breakfast burger",
    description: "Brioche bun, beef patty, bacon, onion jam, cheddar, yum sauce, fried egg and fries.",
    price: 13
  },
  {
    id: "chunky-avo",
    category: "breakfast",
    name: "chunky avo",
    description: "Toasted sourdough, crushed avocado, poached eggs, cherry tomatoes, nuts and feta.",
    price: 10
  },
  {
    id: "shakshouka-wors",
    category: "breakfast",
    name: "shakshouka & wors",
    description: "Tomato and red pepper relish, poached eggs, boerewors, feta and homemade pita bread.",
    price: 10
  },
  {
    id: "tempura-prawns",
    category: "dinner",
    name: "tempura prawns",
    description: "Crisp tempura prawns with miso aioli.",
    price: 11
  },
  {
    id: "japanese-milk-buns",
    category: "dinner",
    name: "Japanese milk buns",
    description: "Warm buns with olive tapenade and olive oil.",
    price: 5
  },
  {
    id: "salt-pepper-squid",
    category: "dinner",
    name: "salt & pepper squid",
    description: "Served with tartar sauce.",
    price: 11
  },
  {
    id: "smoked-brisket-croquettes",
    category: "dinner",
    name: "smoked brisket croquettes",
    description: "With sauerkraut and horseradish mayo.",
    price: 11
  },
  {
    id: "poke-bowl",
    category: "dinner",
    name: "poke bowl",
    description: "Brown rice, edamame, cucumber, capsicum, wakame, mango, avocado and ponzu dressing.",
    price: 12
  },
  {
    id: "buddha-bowl",
    category: "dinner",
    name: "Buddha bowl",
    description: "Curried cauliflower, roasted butternut, quinoa, beetroot hummus, avocado fries and kimchi.",
    price: 12
  },
  {
    id: "chicken-parmi",
    category: "dinner",
    name: "chicken parmi",
    description: "Breaded chicken breast with marinara sauce, bacon, mozzarella and fries.",
    price: 14
  },
  {
    id: "rump-steak",
    category: "dinner",
    name: "rump steak",
    description: "350g steak with fries, mash or rice and grilled veg.",
    price: 22
  },
  {
    id: "seafood-platter",
    category: "dinner",
    name: "seafood platter",
    description: "Grilled prawns, grilled hake, salt and pepper squid, chips, rice, lemon butter and tartar.",
    price: 32
  },
  {
    id: "full-rack-ribs",
    category: "dinner",
    name: "full rack sticky BBQ pork ribs",
    description: "1kg sticky BBQ pork ribs with fries and side salad.",
    price: 32
  },
  {
    id: "half-rack-ribs",
    category: "dinner",
    name: "half rack sticky BBQ pork ribs",
    description: "500g sticky BBQ pork ribs with fries and side salad.",
    price: 22
  },
  {
    id: "lunas-burger",
    category: "dinner",
    name: "Luna's burger",
    description: "Brioche bun, beef patty, bacon, onion jam, avocado, burger sauce and fries.",
    price: 14
  },
  {
    id: "mozambican-prawn-curry",
    category: "dinner",
    name: "Mozambican prawn curry",
    description: "Spicy Mozambique sauce, crispy string potatoes and rice.",
    price: 16
  },
  {
    id: "seafood-linguine",
    category: "dinner",
    name: "garlic & chilli seafood linguine",
    description: "Parmesan, garlic bread and seafood pasta.",
    price: 18
  },
  {
    id: "espresso",
    category: "drinks",
    name: "espresso",
    description: "Classic Luna's coffee menu espresso.",
    price: 1
  },
  {
    id: "cappuccino",
    category: "drinks",
    name: "cappuccino",
    description: "Hot coffee from the Luna's drinks menu.",
    price: 3
  },
  {
    id: "lunas-passion-tonic",
    category: "drinks",
    name: "Luna's passion homemade tonic",
    description: "Passion fruit, orange, mango, lime, mint and sparkling water.",
    price: 5
  },
  {
    id: "berry-passion-mojito",
    category: "drinks",
    name: "berry passion mojito",
    description: "Strawberry, passion fruit, grenadine, lemon, lime, mint and sparkling water.",
    price: 5
  },
  {
    id: "green-goodness",
    category: "drinks",
    name: "green goodness smoothie",
    description: "Avocado, spinach, flaxseeds, green apple and coconut water.",
    price: 6
  },
  {
    id: "negroni",
    category: "drinks",
    name: "negroni",
    description: "Cocktail from Luna's beverage list.",
    price: 8
  },
  {
    id: "lychee-mojito",
    category: "drinks",
    name: "lychee mojito",
    description: "Refreshing cocktail from the Luna's drinks list.",
    price: 8
  },
  {
    id: "espresso-martini",
    category: "drinks",
    name: "espresso martini",
    description: "Coffee cocktail from Luna's beverage menu.",
    price: 8
  },
  {
    id: "chocolate-luna-cake",
    category: "desserts",
    name: "chocolate Luna cake",
    description: "Glossy chocolate cake inspired by the Luna's dessert photo.",
    price: 6
  },
  {
    id: "waffles",
    category: "desserts",
    name: "waffles",
    description: "Caramel sauce, cream cheese frosting and candied nuts.",
    price: 9
  },
  {
    id: "classic-shake",
    category: "desserts",
    name: "classic shake",
    description: "Vanilla, strawberry or chocolate brownie.",
    price: 6
  },
  {
    id: "granola-dessert-bowl",
    category: "desserts",
    name: "mango sorbet bowl",
    description: "Granola, mango sorbet, berries, yoghurt and maple syrup.",
    price: 8
  }
];

const state = {
  filter: "all",
  order: new Map()
};

const menuList = document.querySelector("#menu-list");
const orderItems = document.querySelector("#order-items");
const orderTotal = document.querySelector("#order-total");
const tabs = document.querySelectorAll("[data-filter]");
const menuDropdown = document.querySelector(".menu-dropdown");
const menuToggle = document.querySelector(".menu-toggle");

function formatPrice(value) {
  return Number(value).toLocaleString("en", { maximumFractionDigits: 2 });
}

function renderMenu() {
  const visibleItems = state.filter === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === state.filter);

  menuList.innerHTML = visibleItems.map((item) => `
    <article class="menu-item" data-category="${item.category}">
      <div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="menu-meta">
        <span class="price">${formatPrice(item.price)}</span>
        <button class="add-button" type="button" data-add="${item.id}" aria-label="Add ${item.name}">+</button>
      </div>
    </article>
  `).join("");
}

function renderOrder() {
  const entries = [...state.order.values()];

  if (!entries.length) {
    orderItems.className = "order-items empty";
    orderItems.textContent = "No items yet. Add a dish or drink from the menu.";
    orderTotal.textContent = "0";
    return;
  }

  orderItems.className = "order-items";
  orderItems.innerHTML = entries.map(({ item, qty }) => `
    <div class="order-line">
      <div>
        <strong>${item.name}</strong>
        <span>${qty} x ${formatPrice(item.price)}</span>
      </div>
      <button class="remove-button" type="button" data-remove="${item.id}" aria-label="Remove ${item.name}">-</button>
    </div>
  `).join("");

  const total = entries.reduce((sum, entry) => sum + (entry.item.price * entry.qty), 0);
  orderTotal.textContent = formatPrice(total);
}

function setFilter(filter) {
  state.filter = filter;
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === filter));
  renderMenu();
}

function closeSiteMenu() {
  if (!menuDropdown || !menuToggle) return;
  menuDropdown.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleSiteMenu() {
  if (!menuDropdown || !menuToggle) return;
  const isOpen = menuDropdown.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

menuList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  const item = menuItems.find((entry) => entry.id === button.dataset.add);
  const current = state.order.get(item.id);
  state.order.set(item.id, { item, qty: current ? current.qty + 1 : 1 });
  renderOrder();
});

orderItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;

  const current = state.order.get(button.dataset.remove);
  if (!current) return;

  if (current.qty <= 1) {
    state.order.delete(button.dataset.remove);
  } else {
    state.order.set(button.dataset.remove, { item: current.item, qty: current.qty - 1 });
  }

  renderOrder();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setFilter(tab.dataset.filter));
});

document.querySelectorAll("[data-filter-link]").forEach((link) => {
  link.addEventListener("click", () => {
    setFilter(link.dataset.filterLink);
    closeSiteMenu();
  });
});

if (menuToggle) {
  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleSiteMenu();
  });
}

document.addEventListener("click", (event) => {
  if (!menuDropdown || menuDropdown.contains(event.target)) return;
  closeSiteMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSiteMenu();
});

document.querySelectorAll(".dropdown-panel a").forEach((link) => {
  link.addEventListener("click", closeSiteMenu);
});

document.querySelector("#send-order").addEventListener("click", () => {
  const entries = [...state.order.values()];
  const name = document.querySelector("#customer-name").value.trim();
  const note = document.querySelector("#order-note").value.trim();

  if (!entries.length) {
    alert("Please add at least one item before sending an order.");
    return;
  }

  const lines = entries.map(({ item, qty }) => `- ${qty} x ${item.name} (${formatPrice(item.price)} each)`);
  const total = entries.reduce((sum, entry) => sum + (entry.item.price * entry.qty), 0);
  const message = [
    "Hi Luna's, I would like to place an order.",
    name ? `Name: ${name}` : "",
    "",
    ...lines,
    "",
    `Menu total: ${formatPrice(total)}`,
    note ? `Note: ${note}` : ""
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
});

document.querySelector("#booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "Hi Luna's, I would like to request a booking.",
    `Name: ${form.get("name")}`,
    `Date: ${form.get("date")}`,
    `Time: ${form.get("time")}`,
    `Guests: ${form.get("guests")}`,
    `Preferred area: ${form.get("area")}`,
    form.get("message") ? `Message: ${form.get("message")}` : ""
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
});

renderMenu();
renderOrder();

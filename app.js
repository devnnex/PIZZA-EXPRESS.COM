
// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573022246472'; // <- número del negocio para recibir pedidos por WhatsApp
const DELIVERY_FEE = 0; // tarifa por defecto de domicilio

// ---------- Carta ----------
const pizzaSizeDefinitions = [
  { key: 'personal', label: 'Personal - 4 porciones' },
  { key: 'normal', label: 'Normal - 8 porciones' },
  { key: 'mediana', label: 'Mediana - 12 porciones' },
  { key: 'familiar', label: 'Familiar - 16 porciones' },
  { key: 'mega', label: 'Mega La Super J.J - 20 porciones' }
];

const pizzaBorderExtras = [
  { name: 'Borde de queso', price: 7000 },
  { name: 'Borde de bocadillo', price: 7000 }
];

function pizzaSizes(id, image, prices) {
  return pizzaSizeDefinitions.map((size, index) => ({
    id: `${id}-${size.key}`,
    label: size.label,
    price: prices[index],
    image
  }));
}

const products = [
  // PIZZAS TRADICIONALES
  {
    id: 'trad-jamon-queso',
    category: 'Pizzas Tradicionales',
    title: 'Jamón y Queso',
    price: 10000,
    desc: 'Jamón, queso mozzarella y salsa napolitana.',
    ingredients: ['Jamón', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-pollo-jamon.png',
    sizes: pizzaSizes('trad-jamon-queso', 'images/pizza-pollo-jamon.png', [10000, 20000, 30000, 58000, 115000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'trad-hawaiana',
    category: 'Pizzas Tradicionales',
    title: 'Hawaiana',
    price: 10000,
    desc: 'Piña, jamón, queso mozzarella y salsa napolitana.',
    ingredients: ['Piña', 'Jamón', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-hawaiana.png',
    sizes: pizzaSizes('trad-hawaiana', 'images/pizza-hawaiana.png', [10000, 20000, 30000, 58000, 115000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'trad-pollo',
    category: 'Pizzas Tradicionales',
    title: 'Pollo',
    price: 10000,
    desc: 'Pollo, queso mozzarella y salsa napolitana.',
    ingredients: ['Pollo', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-pollo-jamon.png',
    sizes: pizzaSizes('trad-pollo', 'images/pizza-pollo-jamon.png', [10000, 20000, 30000, 58000, 115000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'trad-salami',
    category: 'Pizzas Tradicionales',
    title: 'Salami',
    price: 10000,
    desc: 'Salami, queso mozzarella y salsa napolitana.',
    ingredients: ['Salami', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-salami.png',
    sizes: pizzaSizes('trad-salami', 'images/pizza-salami.png', [10000, 20000, 30000, 58000, 115000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'trad-cebolla',
    category: 'Pizzas Tradicionales',
    title: 'Cebolla',
    price: 10000,
    desc: 'Cebolla, queso mozzarella y salsa napolitana.',
    ingredients: ['Cebolla', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-vegetariana.png',
    sizes: pizzaSizes('trad-cebolla', 'images/pizza-vegetariana.png', [10000, 20000, 30000, 58000, 115000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'trad-pimenton',
    category: 'Pizzas Tradicionales',
    title: 'Pimentón',
    price: 10000,
    desc: 'Pimentón, queso mozzarella y salsa napolitana.',
    ingredients: ['Pimentón', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-vegetariana.png',
    sizes: pizzaSizes('trad-pimenton', 'images/pizza-vegetariana.png', [10000, 20000, 30000, 58000, 115000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'trad-maiz',
    category: 'Pizzas Tradicionales',
    title: 'Maíz',
    price: 10000,
    desc: 'Maíz, queso mozzarella y salsa napolitana.',
    ingredients: ['Maíz', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-vegetariana.png',
    sizes: pizzaSizes('trad-maiz', 'images/pizza-vegetariana.png', [10000, 20000, 30000, 58000, 115000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'trad-champinones',
    category: 'Pizzas Tradicionales',
    title: 'Champiñones',
    price: 10000,
    desc: 'Champiñón, queso mozzarella y salsa napolitana.',
    ingredients: ['Champiñón', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-pollo-champinon.png',
    sizes: pizzaSizes('trad-champinones', 'images/pizza-pollo-champinon.png', [10000, 20000, 30000, 58000, 115000]),
    extras: pizzaBorderExtras
  },

  // PIZZAS ESPECIALES
  {
    id: 'esp-peperoni',
    category: 'Pizzas Especiales',
    title: 'Peperoni',
    price: 15000,
    desc: 'Peperoni, queso mozzarella y salsa napolitana.',
    ingredients: ['Peperoni', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-pepperoni.png',
    sizes: pizzaSizes('esp-peperoni', 'images/pizza-pepperoni.png', [15000, 23000, 35000, 60000, 120000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'esp-tocineta',
    category: 'Pizzas Especiales',
    title: 'Tocineta',
    price: 15000,
    desc: 'Tocineta, queso mozzarella y salsa napolitana.',
    ingredients: ['Tocineta', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-carnes-frias.png',
    sizes: pizzaSizes('esp-tocineta', 'images/pizza-carnes-frias.png', [15000, 23000, 35000, 60000, 120000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'esp-mexicana',
    category: 'Pizzas Especiales',
    title: 'Mexicana',
    price: 15000,
    desc: 'Carne molida, cebolla, pimentón, queso mozzarella y salsa napolitana.',
    ingredients: ['Carne molida', 'Cebolla', 'Pimentón', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-mexicana.png',
    sizes: pizzaSizes('esp-mexicana', 'images/pizza-mexicana.png', [15000, 23000, 35000, 60000, 120000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'esp-3-carnes',
    category: 'Pizzas Especiales',
    title: '3 Carnes',
    price: 15000,
    desc: 'Jamón, pollo, salami, queso mozzarella y salsa napolitana.',
    ingredients: ['Jamón', 'Pollo', 'Salami', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-carnes-frias.png',
    sizes: pizzaSizes('esp-3-carnes', 'images/pizza-carnes-frias.png', [15000, 23000, 35000, 60000, 120000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'esp-mixta',
    category: 'Pizzas Especiales',
    title: 'Mixta',
    price: 15000,
    desc: 'Carne molida, pollo, queso mozzarella y salsa napolitana.',
    ingredients: ['Carne molida', 'Pollo', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-especial.png',
    sizes: pizzaSizes('esp-mixta', 'images/pizza-especial.png', [15000, 23000, 35000, 60000, 120000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'esp-pizza-perro',
    category: 'Pizzas Especiales',
    title: 'Pizza Perro',
    price: 18000,
    desc: 'Chorizo, butifarra, papa ripio, salsa tártara, salsa piña, doble queso, queso mozzarella y salsa napolitana.',
    ingredients: ['Chorizo', 'Butifarra', 'Papa ripio', 'Salsa tártara', 'Salsa piña', 'Doble queso', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-ranchera.png',
    sizes: pizzaSizes('esp-pizza-perro', 'images/pizza-ranchera.png', [18000, 25000, 38000, 67000, 125000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'esp-pizza-jj',
    category: 'Pizzas Especiales',
    title: 'Pizza JJ',
    price: 18000,
    desc: 'Jamón, peperoni, pollo, tocineta, cebolla, pimentón, maíz, queso mozzarella y salsa napolitana.',
    ingredients: ['Jamón', 'Peperoni', 'Pollo', 'Tocineta', 'Cebolla', 'Pimentón', 'Maíz', 'Queso mozzarella', 'Salsa napolitana'],
    image: 'images/pizza-casa.png',
    sizes: pizzaSizes('esp-pizza-jj', 'images/pizza-casa.png', [18000, 25000, 38000, 67000, 125000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'esp-criolla',
    category: 'Pizzas Especiales',
    title: 'Pizza Criolla',
    price: 18000,
    desc: 'Carne desmechada, chorizo y maíz.',
    ingredients: ['Carne desmechada', 'Chorizo', 'Maíz'],
    image: 'images/pizza-ranchera.png',
    sizes: pizzaSizes('esp-criolla', 'images/pizza-ranchera.png', [18000, 25000, 38000, 67000, 125000]),
    extras: pizzaBorderExtras
  },
  {
    id: 'esp-3-estaciones',
    category: 'Pizzas Especiales',
    title: 'Pizza 3 Estaciones',
    price: 18000,
    desc: 'Ingredientes al gusto.',
    ingredients: ['Ingredientes al gusto'],
    image: 'images/pizza-especial.png',
    sizes: pizzaSizes('esp-3-estaciones', 'images/pizza-especial.png', [18000, 25000, 38000, 67000, 125000]),
    extras: pizzaBorderExtras
  },

  // PANCEROTY
  {
    id: 'panceroty-jj',
    category: 'Panceroty',
    title: 'Panceroty JJ',
    price: 15000,
    desc: 'Jamón, pollo y 3 carnes.',
    ingredients: ['Jamón', 'Pollo', '3 carnes'],
    image: 'images/panzerotti-express.png'
  },

  // LASAGNA
  {
    id: 'lasagna-pollo',
    category: 'Lasagna',
    title: 'Lasagna de Pollo',
    price: 12000,
    desc: 'Lasagna de pollo.',
    ingredients: ['Pollo', 'Queso', 'Salsa'],
    image: 'images/lasagna-mixta.png'
  },
  {
    id: 'lasagna-carne',
    category: 'Lasagna',
    title: 'Lasagna de Carne',
    price: 12000,
    desc: 'Lasagna de carne.',
    ingredients: ['Carne', 'Queso', 'Salsa'],
    image: 'images/lasagna-mixta.png'
  },
  {
    id: 'lasagna-mixta',
    category: 'Lasagna',
    title: 'Lasagna Mixta',
    price: 15000,
    desc: 'Lasagna mixta de pollo y carne.',
    ingredients: ['Pollo', 'Carne', 'Queso', 'Salsa'],
    image: 'images/lasagna-mixta.png'
  },

  // AREPAS
  {
    id: 'arepa-tumbarrancho-pollo',
    category: 'Arepas',
    title: 'Tumbarrancho de Pollo',
    price: 7000,
    desc: 'Pollo, mortadela, queso, verduras y salsa.',
    ingredients: ['Pollo', 'Mortadela', 'Queso', 'Verduras', 'Salsa'],
    image: 'images/panzerotti-hawaiano.png'
  },
  {
    id: 'arepa-tumbarrancho-carne',
    category: 'Arepas',
    title: 'Tumbarrancho de Carne',
    price: 7000,
    desc: 'Carne, mortadela, queso, verduras y salsa.',
    ingredients: ['Carne', 'Mortadela', 'Queso', 'Verduras', 'Salsa'],
    image: 'images/panzerotti-ranchero.png'
  },
  {
    id: 'arepa-tumbarrancho-mixto',
    category: 'Arepas',
    title: 'Tumbarrancho Mixto',
    price: 10000,
    desc: 'Pollo, carne, mortadela, queso, verduras y salsa.',
    ingredients: ['Pollo', 'Carne', 'Mortadela', 'Queso', 'Verduras', 'Salsa'],
    image: 'images/panzerotti-express.png'
  },
  {
    id: 'arepa-cabimera-especial',
    category: 'Arepas',
    title: 'Cabimera Especial',
    price: 20000,
    desc: 'Pechuga a la plancha, chuleta, chuleta ahumada, carne desmechada, tocineta, queso, huevo, verduras y salsa.',
    ingredients: ['Pechuga a la plancha', 'Chuleta', 'Chuleta ahumada', 'Carne desmechada', 'Tocineta', 'Queso', 'Huevo', 'Verduras', 'Salsa'],
    image: 'images/panzerotti-express.png'
  }
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'Pizzas Tradicionales';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}
// ---------- Render productos ----------
function renderProducts(cat) { 
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => 
    p.category === cat && 
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  catalogEl.innerHTML = '';

  if (items.length === 0) {
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', () => openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}


// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {

  const p = products.find(x => x.id === id);
  if (!p) return;

  // ===== TAMAÑO SELECCIONADO =====
  let selectedSize = p.sizes
    ? p.sizes[0]
    : { id: p.id, price: p.price, image: p.image, label: "" };

  // ===== OVERLAY =====
  const overlay = document.createElement("div");
  overlay.className = "product-overlay";

  overlay.innerHTML = `
    <div class="product-sheet">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>

      <div class="modal-body">
        <div class="image-wrap">
          <img id="product-img" src="${selectedSize.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

        ${p.sizes ? `
  <h3 class="option-title">Selecciona tamaño</h3>

  <div class="sizes-container">
    ${p.sizes.map(s => `
      <label class="size-chip">
        <input 
          type="radio" 
          name="size" 
          value="${s.id}" 
          ${s.id === selectedSize.id ? "checked" : ""}
        >
        <span class="chip-title">${s.label}</span>
        <span class="chip-price">$${numberWithCommas(s.price)}</span>
      </label>
    `).join("")}
  </div>
` : ""}


          ${p.extras?.length ? `
            <h3>Adiciones</h3>
            <div class="extras-list">
              ${p.extras.map(e => `
                <label>
                  <input type="checkbox"
                         data-key="${e.name}"
                         data-price="${e.price}">
                  <span>${e.name}</span>
                  <span class="extra-controls">
                    <button class="minus-extra">−</button>
                    <span class="extra-qty">0</span>
                    <button class="plus-extra">+</button>
                  </span>
                  <small>+$${numberWithCommas(e.price)}</small>
                </label>
              `).join("")}
            </div>
          ` : ""}

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? "Actualizar" : "Agregar"}
            <span class="price">$${numberWithCommas(selectedSize.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // ===== CERRAR =====
  overlay.querySelector(".close").onclick = () => overlay.remove();
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };

  // ===== VARIABLES =====
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // 🔐 ESTADO ROBUSTO DE EXTRAS
  const extrasState = {};
  // { "Tocineta": { qty: 3, price: 3000 } }

  // ===== EDICIÓN =====
  if (cartIndex !== null) {
    const item = cart[cartIndex];

    if (p.sizes) {
      selectedSize = p.sizes.find(s => s.id === item.sizeId) || p.sizes[0];
      overlay.querySelector("#product-img").src = selectedSize.image;
      overlay.querySelector(`input[value="${selectedSize.id}"]`).checked = true;
    }

    qty = item.qty;
    qtyEl.textContent = qty;

    if (item.extras?.length) {
      item.extras.forEach(e => {
        extrasState[e.name] = { qty: e.qty, price: e.price };
      });

      extrasInputs.forEach(input => {
        const key = input.dataset.key;
        if (extrasState[key]) {
          input.checked = true;
          input.closest("label").querySelector(".extra-qty").textContent =
            extrasState[key].qty;
        }
      });
    }
  }

  // ===== PRECIO FINAL (CORREGIDO) =====
  function updatePrice() {
    let extrasTotal = 0;

    Object.values(extrasState).forEach(e => {
      extrasTotal += e.price * e.qty;
    });

    // 🔑 CLAVE: el producto se multiplica, los extras NO
    const total = (selectedSize.price * qty) + extrasTotal;

    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  updatePrice();

  // ===== CAMBIO DE TAMAÑO =====
  overlay.querySelectorAll("input[name='size']").forEach(radio => {
    radio.onchange = e => {
      selectedSize = p.sizes.find(s => s.id === e.target.value);
      overlay.querySelector("#product-img").src = selectedSize.image;
      updatePrice();
    };
  });

  // ===== CANTIDAD =====
  overlay.querySelector(".plus").onclick = () => {
    qty++;
    qtyEl.textContent = qty;
    updatePrice();
  };

  overlay.querySelector(".minus").onclick = () => {
    if (qty > 1) {
      qty--;
      qtyEl.textContent = qty;
      updatePrice();
    }
  };

  // ===== CHECKBOX EXTRAS =====
  extrasInputs.forEach(input => {
    const key = input.dataset.key;
    const price = Number(input.dataset.price);
    const qtyEl = input.closest("label").querySelector(".extra-qty");

    input.onchange = () => {
      if (input.checked) {
        extrasState[key] = { qty: 1, price };
        qtyEl.textContent = 1;
      } else {
        delete extrasState[key];
        qtyEl.textContent = 0;
      }
      updatePrice();
    };
  });

  // ===== + EXTRA =====
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    btn.onclick = () => {
      const label = btn.closest("label");
      const input = label.querySelector("input");
      const key = input.dataset.key;
      const price = Number(input.dataset.price);
      const qtyEl = label.querySelector(".extra-qty");

      if (!extrasState[key]) {
        extrasState[key] = { qty: 0, price };
        input.checked = true;
      }

      extrasState[key].qty++;
      qtyEl.textContent = extrasState[key].qty;
      updatePrice();
    };
  });

  // ===== − EXTRA =====
  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    btn.onclick = () => {
      const label = btn.closest("label");
      const input = label.querySelector("input");
      const key = input.dataset.key;
      const qtyEl = label.querySelector(".extra-qty");

      if (!extrasState[key]) return;

      extrasState[key].qty--;

      if (extrasState[key].qty <= 0) {
        delete extrasState[key];
        input.checked = false;
        qtyEl.textContent = 0;
      } else {
        qtyEl.textContent = extrasState[key].qty;
      }

      updatePrice();
    };
  });

  // ===== AGREGAR / ACTUALIZAR =====
  overlay.querySelector(".add-btn").onclick = () => {

    const extras = Object.entries(extrasState).map(([name, e]) => ({
      name,
      price: e.price,
      qty: e.qty
    }));

    const item = {
      productId: p.id,
      sizeId: selectedSize.id,
      title: selectedSize.label ? `${p.title} (${selectedSize.label})` : p.title,
      price: selectedSize.price,
      qty,
      image: selectedSize.image,
      extras
    };

    if (cartIndex !== null) {
      cart[cartIndex] = item;
    } else {
      addToCart(item);
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove("hidden");
  };
}







// ---------- Carrito ----------

// Agregar producto al carrito
function addToCart(item) {
  // Si ya existe el mismo producto con las mismas adiciones, solo aumentar cantidad
  const existing = cart.find(c => 
    c.productId === item.productId && 
    JSON.stringify(c.extras) === JSON.stringify(item.extras)
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  persistCart();
  refreshCartUI();
  updateCartBadge();
}

// Guardar en localStorage
function persistCart() {
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

// Actualizar contador del ícono del carrito
// 1. Modifica tu función actual para que actualice AMBOS contadores
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  
  // Contador del header (el que ya tienes)
  if(cartCountEl) cartCountEl.textContent = count;
  
  // Nuevo contador de la burbuja flotante
  const floatingCountEl = document.querySelector('.bubble-count');
  if(floatingCountEl) floatingCountEl.textContent = count;
}

// 2. Lógica para mostrar/ocultar la burbuja al hacer scroll
const floatingCart = document.getElementById('floating-cart');
const headerCart = document.getElementById('open-cart'); // Tu carrito original del header

window.addEventListener('scroll', () => {
  const headerCartPos = headerCart.getBoundingClientRect().bottom;

  if (headerCartPos < 0) {
    // Si el carrito del header ya no se ve, muestra la burbuja
    floatingCart.classList.remove('hidden');
  } else {
    // Si el header es visible, oculta la burbuja
    floatingCart.classList.add('hidden');
  }
});

// 3. Hacer que el botón flotante también abra el carrito
document.getElementById('open-cart-floating').addEventListener('click', () => {
  cartDrawer.classList.remove('hidden');
  cartDrawer.setAttribute('aria-hidden', 'false');
});

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🍔</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {

    // ===== TOTAL DE EXTRAS (NO SE MULTIPLICA POR qty) =====
    const extrasTotal =
      item.extras?.reduce((sum, e) => sum + (e.price * e.qty), 0) || 0;

    // 🔑 CLAVE: producto * cantidad + extras
    const itemTotal = (item.price * item.qty) + extrasTotal;

    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras
          .map(e =>
            `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`
          )
          .join('<br>')
      : '';

    const div = document.createElement('div');
    div.className = 'cart-item';

    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        ${extrasText ? `<small>${extrasText}</small>` : ''}
        <div class="qty-controls">
          <button class="minus">−</button>
          <span>${item.qty}</span>
          <button class="plus">+</button>
        </div>
      </div>
      <div class="price">
        <span>$${numberWithCommas(itemTotal)}</span>
        <button class="remove-btn" title="Eliminar producto">🗑️</button>
      </div>
    `;

    // ===== CONTROL DE CANTIDAD =====
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty++;
      persistCart();
      refreshCartUI();
    });

    div.querySelector('.minus').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(idx, 1);
      }
      persistCart();
      refreshCartUI();
    });

    // ===== ELIMINAR =====
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // ===== EDITAR =====
    div.addEventListener('click', (e) => {
      if (
        !e.target.classList.contains('minus') &&
        !e.target.classList.contains('plus') &&
        !e.target.classList.contains('remove-btn')
      ) {
        cartDrawer.classList.add('hidden');
        openProductModal(item.productId, idx);
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal + DELIVERY_FEE)}`;
  updateCartBadge();
}















// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------

// ---------- Checkout ----------
function openCheckout() {
  if (cart.length === 0) { 
    alert('El carrito está vacío.'); 
    return; 
  }

  // 🔹 Recalcular subtotal actual (incluyendo extras)
// 🔥 Recalcular subtotal REAL (incluye extras)
let subtotal = 0;

cart.forEach(item => {
  const extrasTotal =
    item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;

  const itemTotal = (item.price * item.qty) + extrasTotal;
  subtotal += itemTotal;
});



  const delivery = 0; // por defecto
  const total = subtotal + delivery;

  // 🔹 Actualizar DOM inicial
  document.getElementById('cart-subtotal').textContent = `$${numberWithCommas(subtotal)}`;
  document.getElementById('cart-delivery').textContent = `$${numberWithCommas(delivery)}`;
  document.getElementById('cart-total').textContent = `$${numberWithCommas(total)}`;
  document.getElementById('cart-total-checkout').textContent = `$${numberWithCommas(total)}`;

  // 🔹 Reset formulario
  checkoutForm.reset();
  document.getElementById('address-label').classList.add('hidden');
  document.getElementById('envio-row').classList.add('hidden');

  // 🔹 Mostrar modal
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');

  // 🔹 Recalcular al cambiar método (recoger/domicilio)
  const radios = checkoutForm.querySelectorAll('input[name="method"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
      const addressLabel = document.getElementById('address-label');
      const envioRow = document.getElementById('envio-row');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalCheckoutEl = document.getElementById('cart-total-checkout');

      const DELIVERY_FEE = 0;
      const delivery = (method === 'domicilio' && subtotal > 0) ? DELIVERY_FEE : 0;
      const totalUpdated = subtotal + delivery;

      // Mostrar/ocultar campos
      addressLabel.classList.toggle('hidden', method !== 'domicilio');
      envioRow.classList.toggle('hidden', method !== 'domicilio');

      // Actualizar montos
      deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
      totalCheckoutEl.textContent = `$${numberWithCommas(totalUpdated)}`;
    });
  });
}


checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
});

backToCartBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  cartDrawer.classList.remove('hidden');
});

// === Calcular totales del checkout ===
function updateCheckoutTotals() {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const envioRow = document.getElementById('envio-row');
  const subtotalEl = document.getElementById('cart-subtotal-checkout');
  const deliveryEl = document.getElementById('cart-delivery-checkout');
  const totalEl = document.getElementById('cart-total-checkout');

  const DELIVERY_FEE = 0;

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🔥 CALCULAR SUBTOTAL EXACTO (CON EXTRAS)
let subtotal = 0;

cart.forEach(item => {
  const extrasTotal =
    item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;

  const itemTotal = (item.price * item.qty) + extrasTotal;
  subtotal += itemTotal;
});

  // Envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // Actualizar valores visibles
  subtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
  totalEl.textContent = `$${numberWithCommas(total)}`;
}



checkoutForm.addEventListener('change', updateCheckoutTotals);






// URL del endpoint de Google Apps Script (base de datos de pedidos)
//const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbwm_1k9_4u68gAgUuSbvOXA5jfq1aIMJIaaFNDiB9PKa0yFBrZhhhMVQQQ-Qc22jeEb/exec";


// Envío por WhatsApp
// ✅ Escucha del formulario de checkout
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';


  
  // 🔎 Validación de barrio obligatorio en domicilio
if (method === 'domicilio') {
  const addressLower = address.toLowerCase();
  const hasBarrio = 
    addressLower.includes('barrio') ||
    addressLower.includes('barr.') ||
    addressLower.includes('br.');

  if (!hasBarrio) {
    Swal.fire({
      icon: 'warning',
      title: 'Debes indicar el barrio',
      text: 'Por favor agrega el barrio en la dirección.',
      confirmButtonColor: '#e91e63'
    });
    return;
  }
}

  let textParts = [];

  // Cabecera
  textParts.push('🧾 *Nuevo Pedido - Pizza Express🍕✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;

cart.forEach(item => {
  // Calcular precio de extras individualmente
  const extras = item.extras || [];
  const extrasLines = extras
    .map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`)
    .join('\n');

  const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

  // 🔑 FIX: NO multiplicar extras por la cantidad del producto
  const itemTotal = (item.price * item.qty) + extrasSum;
  subtotal += itemTotal;

  // Mostrar producto base
  textParts.push(
    `${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`
  );

  if (extrasLines) textParts.push(extrasLines);

  // Toppings removidos
  if (item.removed && item.removed.length) {
    textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
  }
});

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Resumen de totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // Construir URL para WhatsApp
  const bp = String(BUSINESS_PHONE || '').replace(/\D/g, '');
  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const msg = encodeURIComponent(textParts.join('\n'));
  const waUrl = `https://wa.me/${bp}?text=${msg}`;

   // 🟢 1. REDIRECCIONAR INMEDIATAMENTE (NO BLOQUEABLE)
  window.location.href = waUrl;
 

  // 🟡 2. ENVIAR A SHEETS EN SEGUNDO PLANO
  // const orderData = {
  //   fecha: new Date().toLocaleString(),
  //   nombre: clientName,
  //   telefono: clientPhone,
  //   metodo: method,
  //   pago: payment,
  //   direccion: address,
  //   notas: notes,
  //   total: total,
  //   carrito: cart.map(i => ({
  //     producto: i.title,
  //     cantidad: i.qty,
  //     precio: i.price,
  //     extras: i.extras?.map(e => `${e.qty}x ${e.name}`).join(', ') || ''
  //   }))
  // };

  // fetch(GOOGLE_SHEET_API, {
  //   method: "POST",
  //   mode: "no-cors",
  //   body: JSON.stringify(orderData),
  //   headers: { "Content-Type": "application/json" },
  //   keepalive: true // 🔑 importante para que no se cancele al redireccionar
  // });

});






// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 0; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});


// --- FORM MULTIPASO (compatible con checkout actual) ---
const form = document.getElementById("checkout-form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextStep1 = document.getElementById("next-step1");
const backStep2 = document.getElementById("back-step2");
const clientSummary = document.getElementById("client-summary");

if (nextStep1) {
  nextStep1.addEventListener("click", () => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mostrar resumen
    clientSummary.innerHTML = `<strong>${name} </strong><span>${phone}</span>`;

    // Animación de transición
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backStep2) {
  backStep2.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}



const checkoutOverlay = document.getElementById("checkout-modal");
const btnConfirmOrder = document.getElementById("confirm-order"); // botón en el carrito
const btnBackToCart = document.getElementById("back-to-cart");

btnConfirmOrder?.addEventListener("click", () => {
  checkoutOverlay.classList.remove("hidden");
});

btnBackToCart?.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});


// También cerrar si se toca fuera del panel
checkoutOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutOverlay) {
    checkoutOverlay.classList.remove("show");
  }
});


// ============Descargar QR=================
document.addEventListener("click", (e) => {
  // Usa closest para soportar clicks sobre el SVG interno de FontAwesome
  const btn = e.target.closest && e.target.closest(".qr-download");
  if (!btn) return;

  const imgPath = btn.dataset.img;
  if (!imgPath) {
    console.warn("qr-download sin data-img");
    return;
  }

  // helper para descargar
  const downloadImage = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Si SweetAlert2 no está disponible, fallback a confirm nativo
  if (typeof Swal === "undefined") {
    console.warn("SweetAlert2 (Swal) no disponible. Usando confirm nativo.");
    const ok = confirm(
      "Puedes pagar escaneando nuestros códigos QR de Nequi o Bancolombia.\n\nTambién puedes descargar los QR. ¿Descargar ahora?"
    );
    if (ok) downloadImage(imgPath);
    return;
  }

  // SweetAlert2 disponible -> mostrar alerta antes de descargar
  Swal.fire({
    icon: "info",
    title: "Pago con QR",
    html: `
      Puedes pagar escaneando nuestros códigos QR de <strong>Nequi</strong> o <strong>Bancolombia</strong>.<br><br>
      También puedes <strong>descargar los QR</strong> dando clic en el icono de descarga.
    `,
    showCancelButton: true,
    confirmButtonText: "Descargar",
    cancelButtonText: "Cancelar",
    background: "#0a0a0a",             // fondo negro
    color: "#ffffff",                   // texto blanco
    confirmButtonColor: "rgb(230, 213, 12)", // botón amarillo neón
    cancelButtonColor: "#555555",       // cancel gris oscuro
    iconColor: "rgb(230, 213, 12)"      // icono amarillo neón
  }).then(result => {
    if (result.isConfirmed) downloadImage(imgPath);
  });
});



// ============Fin de codigo de Descarga QR=================













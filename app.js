
// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573042591610'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 0; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
  //PIZZAS
{
  id: 'pz1',
  category: 'Pizzas',
  title: 'Hawaiana',
  price: 14000,
  desc: 'Pizza hawaiana clásica.',
  ingredients: ['Piña','Jamón','Queso'],
  image: 'images/pizza-hawaiana.png',
  sizes: [
    { id:'pz1-mini', label:'Mini 20cm', price:14000, image:'images/pizza-hawaiana.png'},
    { id:'pz1-small', label:'Small 30cm', price:27000, image:'images/pizza-hawaiana.png'},
    { id:'pz1-medium', label:'Medium 40cm', price:45000, image:'images/pizza-hawaiana.png'},
    { id:'pz1-grande', label:'Grande 50cm', price:90000, image:'images/pizza-hawaiana.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz2',
  category:'Pizzas',
  title:'Bocadillo Queso',
  price:14000,
  desc:'Pizza dulce de bocadillo con queso.',
  ingredients:['Bocadillo','Queso'],
  image:'images/pizza-bocadillo.png',
  sizes:[
    {id:'pz2-mini',label:'Mini 20cm',price:14000,image:'images/pizza-bocadillo.png'},
    {id:'pz2-small',label:'Small 30cm',price:25000,image:'images/pizza-bocadillo.png'},
    {id:'pz2-medium',label:'Medium 40cm',price:40000,image:'images/pizza-bocadillo.png'},
    {id:'pz2-grande',label:'Grande 50cm',price:65000,image:'images/pizza-bocadillo.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz3',
  category:'Pizzas',
  title:'Napolitana',
  price:14000,
  desc:'Pizza napolitana clásica.',
  ingredients:['Salsa napolitana','Mozzarella','Tomate','Albahaca','Aceite de oliva'],
  image:'images/pizza-napolitana.png',
  sizes:[
    {id:'pz3-mini',label:'Mini 20cm',price:14000,image:'images/pizza-napolitana.png'},
    {id:'pz3-small',label:'Small 30cm',price:25000,image:'images/pizza-napolitana.png'},
    {id:'pz3-medium',label:'Medium 40cm',price:40000,image:'images/pizza-napolitana.png'},
    {id:'pz3-grande',label:'Grande 50cm',price:70000,image:'images/pizza-napolitana.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz4',
  category:'Pizzas',
  title:'Carnes Frías',
  price:16000,
  desc:'Pizza con mix de carnes.',
  ingredients:['Salsa napolitana','Salami','Cábano','Tocineta','Queso'],
  image:'images/pizza-carnes-frias.png',
  sizes:[
    {id:'pz4-mini',label:'Mini 20cm',price:16000,image:'images/pizza-carnes-frias.png'},
    {id:'pz4-small',label:'Small 30cm',price:30000,image:'images/pizza-carnes-frias.png'},
    {id:'pz4-medium',label:'Medium 40cm',price:60000,image:'images/pizza-carnes-frias.png'},
    {id:'pz4-grande',label:'Grande 50cm',price:100000,image:'images/pizza-carnes-frias.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz5',
  category:'Pizzas',
  title:'Pollo Jamón',
  price:16000,
  desc:'Pizza de pollo con jamón.',
  ingredients:['Salsa napolitana','Pollo','Jamón','Queso'],
  image:'images/pizza-pollo-jamon.png',
  sizes:[
    {id:'pz5-mini',label:'Mini 20cm',price:16000,image:'images/pizza-pollo-jamon.png'},
    {id:'pz5-small',label:'Small 30cm',price:30000,image:'images/pizza-pollo-jamon.png'},
    {id:'pz5-medium',label:'Medium 40cm',price:55000,image:'images/pizza-pollo-jamon.png'},
    {id:'pz5-grande',label:'Grande 50cm',price:97000,image:'images/pizza-pollo-jamon.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz6',
  category:'Pizzas',
  title:'Pepperoni',
  price:16000,
  desc:'Pizza clásica de pepperoni.',
  ingredients:['Salsa napolitana','Pepperoni','Queso'],
  image:'images/pizza-pepperoni.png',
  sizes:[
    {id:'pz6-mini',label:'Mini 20cm',price:16000,image:'images/pizza-pepperoni.png'},
    {id:'pz6-small',label:'Small 30cm',price:30000,image:'images/pizza-pepperoni.png'},
    {id:'pz6-medium',label:'Medium 40cm',price:50000,image:'images/pizza-pepperoni.png'},
    {id:'pz6-grande',label:'Grande 50cm',price:85000,image:'images/pizza-pepperoni.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz7',
  category:'Pizzas',
  title:'Salami Americano',
  price:22000,
  desc:'Pizza con salami y vegetales.',
  ingredients:['Salsa napolitana','Salami','Cebolla','Pimentón','Queso'],
  image:'images/pizza-salami.png',
  sizes:[
    {id:'pz7-mini',label:'Mini 20cm',price:22000,image:'images/pizza-salami.png'},
    {id:'pz7-small',label:'Small 30cm',price:35000,image:'images/pizza-salami.png'},
    {id:'pz7-medium',label:'Medium 40cm',price:55000,image:'images/pizza-salami.png'},
    {id:'pz7-grande',label:'Grande 50cm',price:100000,image:'images/pizza-salami.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz8',
  category:'Pizzas',
  title:'Pollo Champiñón',
  price:16000,
  desc:'Pizza de pollo con champiñones.',
  ingredients:['Salsa napolitana','Pollo','Champiñón','Queso'],
  image:'images/pizza-pollo-champinon.png',
  sizes:[
    {id:'pz8-mini',label:'Mini 20cm',price:16000,image:'images/pizza-pollo-champinon.png'},
    {id:'pz8-small',label:'Small 30cm',price:32000,image:'images/pizza-pollo-champinon.png'},
    {id:'pz8-medium',label:'Medium 40cm',price:55000,image:'images/pizza-pollo-champinon.png'},
    {id:'pz8-grande',label:'Grande 50cm',price:100000,image:'images/pizza-pollo-champinon.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
}
,
{
  id:'pz9',
  category:'Pizzas',
  title:'Especial',
  price:22000,
  desc:'Pizza especial con mix de carnes.',
  ingredients:['Salsa napolitana','Salami','Cábano','Tocineta','Pollo','Queso'],
  image:'images/pizza-especial.png',
  sizes:[
    {id:'pz9-mini',label:'Mini 20cm',price:22000,image:'images/pizza-especial.png'},
    {id:'pz9-small',label:'Small 30cm',price:37000,image:'images/pizza-especial.png'},
    {id:'pz9-medium',label:'Medium 40cm',price:70000,image:'images/pizza-especial.png'},
    {id:'pz9-grande',label:'Grande 50cm',price:120000,image:'images/pizza-especial.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz10',
  category:'Pizzas',
  title:'Mexicana',
  price:22000,
  desc:'Pizza estilo mexicano picante.',
  ingredients:['Salsa napolitana','Carne molida','Jalapeño','Pimentón','Pico de gallo','Queso'],
  image:'images/pizza-mexicana.png',
  sizes:[
    {id:'pz10-mini',label:'Mini 20cm',price:22000,image:'images/pizza-mexicana.png'},
    {id:'pz10-small',label:'Small 30cm',price:37000,image:'images/pizza-mexicana.png'},
    {id:'pz10-medium',label:'Medium 40cm',price:65000,image:'images/pizza-mexicana.png'},
    {id:'pz10-grande',label:'Grande 50cm',price:105000,image:'images/pizza-mexicana.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz11',
  category:'Pizzas',
  title:'Ranchera',
  price:25000,
  desc:'Pizza ranchera con carne y maíz.',
  ingredients:['Salsa napolitana','Carne molida','Cebolla','Tocineta','Maíz tierno','Queso'],
  image:'images/pizza-ranchera.png',
  sizes:[
    {id:'pz11-mini',label:'Mini 20cm',price:25000,image:'images/pizza-ranchera.png'},
    {id:'pz11-small',label:'Small 30cm',price:40000,image:'images/pizza-ranchera.png'},
    {id:'pz11-medium',label:'Medium 40cm',price:68000,image:'images/pizza-ranchera.png'},
    {id:'pz11-grande',label:'Grande 50cm',price:110000,image:'images/pizza-ranchera.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz12',
  category:'Pizzas',
  title:'Vegetariana',
  price:25000,
  desc:'Pizza con vegetales frescos.',
  ingredients:['Salsa napolitana','Cebolla','Pimentón','Tomate','Aceitunas','Champiñón','Orégano','Queso'],
  image:'images/pizza-vegetariana.png',
  sizes:[
    {id:'pz12-mini',label:'Mini 20cm',price:25000,image:'images/pizza-vegetariana.png'},
    {id:'pz12-small',label:'Small 30cm',price:45000,image:'images/pizza-vegetariana.png'},
    {id:'pz12-medium',label:'Medium 40cm',price:65000,image:'images/pizza-vegetariana.png'},
    {id:'pz12-grande',label:'Grande 50cm',price:100000,image:'images/pizza-vegetariana.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz13',
  category:'Pizzas',
  title:'De la Casa',
  price:25000,
  desc:'Pizza premium con pollo y camarones.',
  ingredients:['Salsa napolitana','Pollo','Camarón','Cábano','Salami','Cebolla','Pimentón','Queso'],
  image:'images/pizza-casa.png',
  sizes:[
    {id:'pz13-mini',label:'Mini 20cm',price:25000,image:'images/pizza-casa.png'},
    {id:'pz13-small',label:'Small 30cm',price:45000,image:'images/pizza-casa.png'},
    {id:'pz13-medium',label:'Medium 40cm',price:80000,image:'images/pizza-casa.png'},
    {id:'pz13-grande',label:'Grande 50cm',price:135000,image:'images/pizza-casa.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
},
{
  id:'pz14',
  category:'Pizzas',
  title:'Camarones',
  price:27000,
  desc:'Pizza de camarones especial.',
  ingredients:['Salsa napolitana','Cebolla','Pimentón','Cábano','Tocineta','Camarón','Queso'],
  image:'images/pizza-camarones.png',
  sizes:[
    {id:'pz14-mini',label:'Mini 20cm',price:27000,image:'images/pizza-camarones.png'},
    {id:'pz14-small',label:'Small 30cm',price:46000,image:'images/pizza-camarones.png'},
    {id:'pz14-medium',label:'Medium 40cm',price:72000,image:'images/pizza-camarones.png'},
    {id:'pz14-grande',label:'Grande 50cm',price:120000,image:'images/pizza-camarones.png'}
  ],
  extras:[{name:'Borde de queso Mini',price:5000},{name:'Borde de queso Small',price:8000}]
}
,

//PANZEROTTIS
{
  id:'pzrt1',
  category:'Panzerottis',
  title:'Hawaiano',
  price:16000,
  desc:'Panzerotti hawaiano.',
  ingredients:['Piña','Jamón','Queso'],
  image:'images/panzerotti-hawaiano.png'
},
{
  id:'pzrt2',
  category:'Panzerottis',
  title:'Express',
  price:18000,
  desc:'Panzerotti de pollo y champiñón.',
  ingredients:['Pollo','Champiñón','Jamón','Queso'],
  image:'images/panzerotti-express.png'
},
{
  id:'pzrt3',
  category:'Panzerottis',
  title:'Ranchero',
  price:18000,
  desc:'Panzerotti ranchero.',
  ingredients:['Carne molida','Cábano','Cebolla','Pimentón','Queso'],
  image:'images/panzerotti-ranchero.png'
},

//ESPECIALES
{
  id:'esp1',
  category:'Especiales',
  title:'Lasagna Mixta',
  price:21000,
  desc:'Lasaña mixta de carne y pollo.',
  ingredients:['Carne','Pollo','Queso','Salsa napolitana'],
  image:'images/lasagna-mixta.png'
},

//BEBIDAS
{
  id:'beb1',
  category:'Bebidas',
  title:'Gaseosa 1.5L',
  price:8000,
  desc:'Gaseosa presentación 1.5 litros.',
  ingredients:['Gaseosa'],
  image:'images/gaseosa-15.png'
},
{
  id:'beb2',
  category:'Bebidas',
  title:'Gaseosa Pet 400ml',
  price:4000,
  desc:'Gaseosa personal 400ml.',
  ingredients:['Gaseosa'],
  image:'images/gaseosa-400.png'
},
{
  id:'beb3',
  category:'Bebidas',
  title:'Hit Pet 500ml',
  price:3500,
  desc:'Jugo Hit 500ml.',
  ingredients:['Jugo Hit'],
  image:'images/hit-500.png'
},
{
  id:'beb4',
  category:'Bebidas',
  title:'Soda',
  price:4000,
  desc:'Soda refrescante.',
  ingredients:['Soda'],
  image:'images/soda.png'
},
{
  id:'beb5',
  category:'Bebidas',
  title:'Coronita',
  price:5000,
  desc:'Cerveza Coronita.',
  ingredients:['Cerveza'],
  image:'images/coronita.png'
},
{
  id:'beb6',
  category:'Bebidas',
  title:'Agua',
  price:3000,
  desc:'Agua embotellada.',
  ingredients:['Agua'],
  image:'images/agua.png'
},
{
  id:'beb7',
  category:'Bebidas',
  title:'Michelada',
  price:2500,
  desc:'Preparación michelada.',
  ingredients:['Michelada'],
  image:'images/michelada.png'
}
,

//ADICIONALES
{
  id:'add1',
  category:'Adicionales',
  title:'Piña',
  price:4000,
  desc:'Porción adicional de piña.',
  ingredients:['Piña'],
  image:'images/adicional-pina.png'
},
{
  id:'add2',
  category:'Adicionales',
  title:'Jamón',
  price:2000,
  desc:'Porción adicional de jamón.',
  ingredients:['Jamón'],
  image:'images/adicional-jamon.png'
},
{
  id:'add3',
  category:'Adicionales',
  title:'Salami',
  price:4000,
  desc:'Porción adicional de salami.',
  ingredients:['Salami'],
  image:'images/adicional-salami.png'
},
{
  id:'add4',
  category:'Adicionales',
  title:'Cábano',
  price:4000,
  desc:'Porción adicional de cábano.',
  ingredients:['Cábano'],
  image:'images/adicional-cabano.png'
},
{
  id:'add5',
  category:'Adicionales',
  title:'Tocineta',
  price:3000,
  desc:'Porción adicional de tocineta.',
  ingredients:['Tocineta'],
  image:'images/adicional-tocineta.png'
},
{
  id:'add6',
  category:'Adicionales',
  title:'Pollo Desmechado',
  price:6000,
  desc:'Porción adicional de pollo desmechado.',
  ingredients:['Pollo desmechado'],
  image:'images/adicional-pollo.png'
},
{
  id:'add7',
  category:'Adicionales',
  title:'Carne Molida',
  price:6000,
  desc:'Porción adicional de carne molida.',
  ingredients:['Carne molida'],
  image:'images/adicional-carne.png'
},
{
  id:'add8',
  category:'Adicionales',
  title:'Pepperoni',
  price:5000,
  desc:'Porción adicional de pepperoni.',
  ingredients:['Pepperoni'],
  image:'images/adicional-pepperoni.png'
},
{
  id:'add9',
  category:'Adicionales',
  title:'Bocadillo',
  price:3000,
  desc:'Porción adicional de bocadillo.',
  ingredients:['Bocadillo'],
  image:'images/adicional-bocadillo.png'
},
{
  id:'add10',
  category:'Adicionales',
  title:'Tomate',
  price:3000,
  desc:'Porción adicional de tomate.',
  ingredients:['Tomate'],
  image:'images/adicional-tomate.png'
},
{
  id:'add11',
  category:'Adicionales',
  title:'Jalapeño',
  price:3000,
  desc:'Porción adicional de jalapeño.',
  ingredients:['Jalapeño'],
  image:'images/adicional-jalapeno.png'
},
{
  id:'add12',
  category:'Adicionales',
  title:'Maíz',
  price:3000,
  desc:'Porción adicional de maíz.',
  ingredients:['Maíz'],
  image:'images/adicional-maiz.png'
}
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'Pizzas';

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
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = count;
}

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
// const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbwm_1k9_4u68gAgUuSbvOXA5jfq1aIMJIaaFNDiB9PKa0yFBrZhhhMVQQQ-Qc22jeEb/exec";


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
 /* const orderData = {
    fecha: new Date().toLocaleString(),
    nombre: clientName,
    telefono: clientPhone,
    metodo: method,
    pago: payment,
    direccion: address,
    notas: notes,
    total: total,
    carrito: cart.map(i => ({
      producto: i.title,
      cantidad: i.qty,
      precio: i.price,
      extras: i.extras?.map(e => `${e.qty}x ${e.name}`).join(', ') || ''
    }))
  };

  fetch(GOOGLE_SHEET_API, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(orderData),
    headers: { "Content-Type": "application/json" },
    keepalive: true // 🔑 importante para que no se cancele al redireccionar
  }); */

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













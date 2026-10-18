"use strict";

const $ = selector => document.querySelector(selector);

const products = [
  {id:1,name:"Aceite Diana 760 ml",category:"Víveres",description:"Aceite Diana de 760 ml. Catálogo Costa Norte.",price:2.50,emoji:"🫒",image:"./img/products/aceite.jpg"},
  {id:2,name:"Azúcar Cafetín 4 g",category:"Víveres",description:"Sobres de azúcar Cafetín; caja de 200 unidades.",price:1.80,emoji:"🍚",image:"./img/products/azucar-kaly-real.jpg"},
  {id:3,name:"Sal evaporada Bahía 1 kg",category:"Víveres",description:"Sal evaporada Bahía. Presentación de 1 kg.",price:3.20,emoji:"🧂",image: "./img/products/sal-bahia-real.jpg"},
  {id:4,name:"Harina panadera Aveiro 45 kg",category:"Víveres",description:"Saco de harina panadera Aveiro de 45 kg.",price:1.40,emoji:"🌾",image:"./img/products/harina.jpg"},
  {id:5,name:"Harina Kaly Premium Blanca 1 kg",category:"Víveres",description:"Harina blanca Kaly Premium; paquete de 20 unidades.",price:1.25,emoji:"🌾",image: "./img/products/harina-kaly-real.jpg"},
  {id:6,name:"Harina Kaly Premium Amarilla",category:"Víveres",description:"Harina Kaly Premium amarilla.",price:1.75,emoji:"🌽",image:"./img/products/harina-amarilla.jpg"},
  {id:7,name:"Arroz Kaly Tradicional 900 g",category:"Víveres",description:"Arroz Kaly Tradicional de 900 g.",price:2.10,emoji:"🍚",image:"./img/products/arroz-kaly.jpg"},
  {id:8,name:"Arroz Kaly Superior 900 g",category:"Víveres",description:"Arroz Kaly Superior de 900 g.",price:4.50,emoji:"🍚",image:"./img/products/arroz-superior.svg"},
  {id:9,name:"Margarina Mavesa 250 g",category:"Víveres",description:"Margarina Mavesa de 250 g; caja de 24 unidades.",price:1.10,emoji:"🧈",image:"./img/products/margarina.jpg"},
  {id:10,name:"Margarina Mavesa 500 g",category:"Víveres",description:"Margarina Mavesa de 500 g; caja de 12 unidades.",price:1.60,emoji:"🧈",image:"./img/products/margarina.jpg"},
  {id:11,name:"Mayonesa Mavesa 445 g",category:"Víveres",description:"Mayonesa Mavesa de 445 g; caja de 12 unidades.",price:0.90,emoji:"🥫",image:"./img/products/mayonesa.jpg"},
  {id:12,name:"Salsa de tomate Pampero 198 g",category:"Víveres",description:"Salsa de tomate Pampero de 198 g; caja de 24 unidades.",price:3.80,emoji:"🍅",image:"./img/products/salsa-tomate.jpg"},
  {id:13,name:"Aceite de palma en cuñete 18 L",category:"Víveres",description:"Aceite de palma en presentación de 18 litros.",price:18.00,emoji:"🫒",image:"./img/products/aceite.jpg"},
  {id:14,name:"Azúcar 1 kg",category:"Víveres",description:"Azúcar; presentación de 1 kg, paquete de 20 unidades.",price:1.80,emoji:"🍚",image:"./img/products/azucar-kaly-real.jpg"},
  {id:15,name:"Sal fina 1 kg",category:"Víveres",description:"Sal fina de 1 kg; paquete de 20 unidades.",price:1.00,emoji:"🧂",image:"./img/products/sal-bahia-real.jpg"},
  {id:16,name:"Sal gruesa 1 kg",category:"Víveres",description:"Sal gruesa de 1 kg; paquete de 20 unidades.",price:1.00,emoji:"🧂",image:"./img/products/sal-bahia-real.jpg"},
  {id:17,name:"Sal parrillera 1 kg",category:"Víveres",description:"Sal parrillera de 1 kg; paquete de 20 unidades.",price:1.20,emoji:"🧂",image:"./img/products/sal-bahia-real.jpg"},
  {id:18,name:"Mostaza preparada galón",category:"Víveres",description:"Mostaza preparada en presentación galón.",price:3.78,emoji:"🟡",image:"./img/products/mostaza.svg"},
  {id:19,name:"Mayonesa preparada galón",category:"Víveres",description:"Mayonesa preparada en presentación galón.",price:3.44,emoji:"🥫",image:"./img/products/mayonesa.jpg"},
  {id:20,name:"Salsa de tomate preparada galón",category:"Víveres",description:"Salsa de tomate preparada en presentación galón.",price:3.90,emoji:"🍅",image:"./img/products/salsa-tomate.jpg"},
  {id:21,name:"Mostaza Premium galón",category:"Víveres",description:"Mostaza Premium en presentación galón.",price:3.79,emoji:"🟡",image:"./img/products/mostaza.svg"},
  {id:22,name:"Mayonesa en bolsa galón",category:"Víveres",description:"Mayonesa en bolsa, presentación galón.",price:3.35,emoji:"🥫",image:"./img/products/mayonesa.jpg"},
  {id:23,name:"Ketchup en bolsa galón",category:"Víveres",description:"Ketchup en bolsa, presentación galón.",price:3.85,emoji:"🍅",image:"./img/products/salsa-tomate.jpg"},
  {id:24,name:"Harina Kaly Blanca almohada",category:"Víveres",description:"Harina Kaly blanca, presentación tipo almohada.",price:1.25,emoji:"🌾",image:"./img/products/harina-kaly-real.jpg"},
  {id:25,name:"Arroz Kaly Premium",category:"Víveres",description:"Arroz Kaly Premium.",price:2.50,emoji:"🍚",image:"./img/products/arroz-kaly.jpg"},
  {id:26,name:"Arroz Kaly Turmalina",category:"Víveres",description:"Arroz Kaly Turmalina.",price:2.50,emoji:"🍚",image:"./img/products/arroz-kaly.jpg"},
  {id:27,name:"Azúcar Finura Kaly",category:"Víveres",description:"Azúcar Finura Kaly.",price:2.00,emoji:"🍚",image: "./img/products/azucar-kaly-real.jpg"},
  {id:28,name:"Leche entera en polvo",category:"Víveres",description:"Leche entera en polvo del catálogo.",price:4.00,emoji:"🥛",image:"./img/products/leche.svg"},
  {id:29,name:"Ketchup Pampero 175 g",category:"Víveres",description:"Ketchup Pampero de 175 g; caja de 24 unidades.",price:1.50,emoji:"🍅",image:"./img/products/salsa-tomate.jpg"},
  {id:30,name:"Mayonesa Mavesa 4,2 kg",category:"Víveres",description:"Mayonesa Mavesa en presentación de 4,2 kg.",price:8.00,emoji:"🥫",image:"./img/products/mayonesa.jpg"},
  {id:31,name:"Sazonatodo",category:"Víveres",description:"Sazonador del catálogo Costa Norte.",price:1.50,emoji:"🧂",image:"./img/products/sazonador.jpg"},
  {id:32,name:"Cubo de caldo Maggi de pollo",category:"Víveres",description:"Caldo Maggi sabor pollo.",price:1.00,emoji:"🍲",image:"./img/products/caldo-maggi-pollo-35g.jpg"},
  {id:33,name:"Cubo de caldo Maggi de costilla",category:"Víveres",description:"Caldo Maggi sabor costilla.",price:1.00,emoji:"🍲",image:"./img/products/caldo-maggi-pollo-35g.jpg"},
  {id:34,name:"Atún en trozos EconomyPack",category:"Víveres",description:"Atún en trozos al natural o en aceite, según presentación.",price:2.50,emoji:"🐟",image:"./img/products/atun-newpesca-170g.jpg"},
  {id:35,name:"Ensalada de atún EconomyPack",category:"Víveres",description:"Ensalada de atún EconomyPack.",price:2.50,emoji:"🐟",image:"./img/products/atun-newpesca-170g.jpg"},
  {id:36,name:"Paté de atún tradicional",category:"Víveres",description:"Paté de atún tradicional.",price:1.80,emoji:"🐟",image:"./img/products/atun-newpesca-170g.jpg"},
  {id:37,name:"Paté de atún con aceitunas",category:"Víveres",description:"Paté de atún con aceitunas.",price:1.80,emoji:"🐟",image:"./img/products/atun-newpesca-170g.jpg"},
  {id:38,name:"Paté de atún ligeramente picante",category:"Víveres",description:"Paté de atún ligeramente picante.",price:1.80,emoji:"🐟",image:"./img/products/atun-newpesca-170g.jpg"},
  {id:39,name:"Salmón con aceite de girasol",category:"Víveres",description:"Salmón en aceite de girasol.",price:3.50,emoji:"🐟",image:"./img/products/salmon.svg"},
  {id:40,name:"Salmón en trozos",category:"Víveres",description:"Salmón en trozos.",price:3.50,emoji:"🐟",image:"./img/products/salmon.svg"},
  {id:41,name:"Salmón en trozos ahumado",category:"Víveres",description:"Salmón en trozos ahumado.",price:3.80,emoji:"🐟",image:"./img/products/salmon.svg"},
  {id:42,name:"Mejillones en agua",category:"Víveres",description:"Mejillones conservados en agua.",price:2.50,emoji:"🦪",image:"./img/products/mariscos.svg"},
  {id:43,name:"Mejillones en aceite de girasol",category:"Víveres",description:"Mejillones en aceite de girasol.",price:2.80,emoji:"🦪",image:"./img/products/mariscos.svg"},
  {id:44,name:"Mejillones en escabeche",category:"Víveres",description:"Mejillones en escabeche.",price:2.80,emoji:"🦪",image:"./img/products/mariscos.svg"},
  {id:45,name:"Surtido de mariscos",category:"Víveres",description:"Surtido de mariscos en conserva.",price:3.50,emoji:"🦐",image:"./img/products/mariscos.svg"},
  {id:46,name:"Jamón endiablado Underwood",category:"Víveres",description:"Jamón endiablado Underwood.",price:2.00,emoji:"🥫",image: "./img/products/diablitos-underwood-real.webp"},
  {id:47,name:"Jamón endiablado Rico Jam",category:"Víveres",description:"Jamón endiablado Rico Jam.",price:1.80,emoji:"🥫",image:"./img/products/diablitos-underwood-real.webp"},
  {id:48,name:"Salsa napolitana con queso",category:"Víveres",description:"Salsa napolitana con queso.",price:2.00,emoji:"🍝",image:"./img/products/salsa-tomate.jpg"},
  {id:49,name:"Salsa boloñesa con carne",category:"Víveres",description:"Salsa boloñesa con carne.",price:2.50,emoji:"🍝",image:"./img/products/salsa-tomate.jpg"},
  {id:50,name:"Salsa Diablitos",category:"Víveres",description:"Salsa Diablitos.",price:2.00,emoji:"🥫",image:"./img/products/diablitos-underwood-real.webp"},
  {id:51,name:"Mermelada Secretos de la Abuela",category:"Víveres",description:"Mermelada Secretos de la Abuela.",price:2.00,emoji:"🍓",image:"./img/products/mermelada.svg"},
  {id:52,name:"Ketchup con Diablito",category:"Víveres",description:"Salsa de tomate ketchup con Diablito.",price:2.00,emoji:"🍅",image:"./img/products/salsa-tomate.jpg"},
  {id:53,name:"Atún Secretos de la Abuela en agua",category:"Víveres",description:"Atún en agua Secretos de la Abuela.",price:2.20,emoji:"🐟",image:"./img/products/atun-newpesca-170g.jpg"},
  {id:54,name:"Atún Secretos de la Abuela en aceite",category:"Víveres",description:"Atún en aceite Secretos de la Abuela.",price:2.20,emoji:"🐟",image:"./img/products/atun-newpesca-170g.jpg"},
  {id:55,name:"Velas número 1 paquete x5",category:"Limpieza",description:"Velas número 1, paquete de cinco unidades.",price:1.50,emoji:"🕯️",image:"./img/products/velas.svg"},
  {id:56,name:"Velas número 1 a granel",category:"Limpieza",description:"Velas número 1 a granel.",price:1.00,emoji:"🕯️",image:"./img/products/velas.svg"},
  {id:57,name:"Velón N4C",category:"Limpieza",description:"Velón N4C.",price:2.00,emoji:"🕯️",image:"./img/products/velas.svg"},
  {id:58,name:"Velón N5",category:"Limpieza",description:"Velón N5.",price:2.50,emoji:"🕯️",image:"./img/products/velas.svg"},
  {id:59,name:"Detergente en polvo Línea Radiante",category:"Limpieza",description:"Detergente en polvo Línea Radiante.",price:3.00,emoji:"🧺",image:"./img/products/detergente.png"},
  {id:60,name:"Cloro blanqueador",category:"Limpieza",description:"Cloro blanqueador.",price:1.50,emoji:"🧴",image:"./img/products/detergente.png"},
  {id:61,name:"Desinfectante multiuso 1 L",category:"Limpieza",description:"Desinfectante multiuso de 1 litro; caja de 12 unidades.",price:2.00,emoji:"🧴",image:"./img/products/detergente.png"},
  {id:62,name:"Lavaplatos en crema 450 g",category:"Limpieza",description:"Lavaplatos en crema de 450 g; caja de 24 unidades.",price:1.50,emoji:"🧽",image:"./img/products/detergente.png"},
  {id:63,name:"Lavaplatos en crema 250 g",category:"Limpieza",description:"Lavaplatos en crema de 250 g; caja de 36 unidades.",price:1.00,emoji:"🧽",image:"./img/products/detergente.png"},
  {id:64,name:"Detergente líquido 500 ml",category:"Limpieza",description:"Detergente líquido de 500 ml; caja de 12 unidades.",price:2.00,emoji:"🧴",image:"./img/products/detergente.png"},
  {id:65,name:"Jabón azul 200 g",category:"Limpieza",description:"Jabón azul 3N de 200 g; caja de 24 unidades.",price:1.00,emoji:"🧼",image:"./img/products/jabon.jpg"},
  {id:66,name:"Jabón azul 150 g",category:"Limpieza",description:"Jabón azul 3N de 150 g; caja de 36 unidades.",price:0.80,emoji:"🧼",image:"./img/products/jabon.jpg"},
  {id:67,name:"Escoba 3 N",category:"Limpieza",description:"Escoba 3 N; presentación de 12 unidades.",price:3.00,emoji:"🧹",image:"./img/products/detergente.png"},
  {id:68,name:"Barra dermolimpiadora 160 g",category:"Cuidado Personal",description:"Barra dermolimpiadora de 160 g.",price:2.00,emoji:"🧼",image:"./img/products/jabon.jpg"},
  {id:69,name:"Jabón de espuma 400 ml",category:"Cuidado Personal",description:"Jabón de espuma de 400 ml; caja de 12 unidades.",price:2.00,emoji:"🧴",image:"./img/products/jabon.jpg"},
  {id:70,name:"Gel de ducha 500 ml",category:"Cuidado Personal",description:"Gel de ducha de 500 ml; caja de 12 unidades.",price:2.50,emoji:"🧴",image:"./img/products/jabon.jpg"},
  {id:71,name:"Gel de ducha 300 ml",category:"Cuidado Personal",description:"Gel de ducha de 300 ml; caja de 12 unidades.",price:2.00,emoji:"🧴",image:"./img/products/jabon.jpg"},
  {id:72,name:"Jabón de tocador 125 g",category:"Cuidado Personal",description:"Jabón de tocador de 125 g; caja de 72 unidades.",price:1.00,emoji:"🧼",image:"./img/products/jabon.jpg"},
  {id:73,name:"Toallas íntimas",category:"Cuidado Personal",description:"Toallas íntimas; caja de 12 unidades.",price:2.00,emoji:"🌸",image:"./img/products/sin-foto.svg"},
  {id:74,name:"Gel de baño 330 ml",category:"Cuidado Personal",description:"Gel de baño de 330 ml; caja de 12 unidades.",price:2.00,emoji:"🧴",image:"./img/products/jabon.jpg"},
  {id:75,name:"Toallas húmedas",category:"Cuidado Personal",description:"Toallas húmedas; presentación de 15 unidades, caja de 12.",price:1.50,emoji:"🧻",image:"./img/products/sin-foto.svg"},
  {id:76,name:"Shampoo para bebé 330 ml",category:"Cuidado Personal",description:"Shampoo para bebé de 330 ml; caja de 12 unidades.",price:2.50,emoji:"🧴",image:"./img/products/shampoo.jpg"},
  {id:77,name:"Papel higiénico Sutil 2 rollos",category:"Limpieza",description:"Papel higiénico Sutil, paquete de 2 rollos.",price:1.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:78,name:"Papel higiénico Sutil 4 rollos",category:"Limpieza",description:"Papel higiénico Sutil, paquete de 4 rollos.",price:2.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:79,name:"Papel higiénico Sutil 12 rollos",category:"Limpieza",description:"Papel higiénico Sutil, paquete de 12 rollos.",price:5.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:80,name:"Papel higiénico Jazmín 4 rollos",category:"Limpieza",description:"Papel higiénico Jazmín, paquete de 4 rollos.",price:2.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:81,name:"Papel higiénico Pétalo 4 rollos",category:"Limpieza",description:"Papel higiénico Pétalo, paquete de 4 rollos.",price:2.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:82,name:"Papel higiénico Ecology 4 rollos",category:"Limpieza",description:"Papel higiénico Ecology, paquete de 4 rollos.",price:2.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:83,name:"Toalla de cocina Sutil 2 rollos",category:"Limpieza",description:"Toalla de cocina Sutil, paquete de 2 rollos.",price:2.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:84,name:"Toalla Maracay Industrial Clase A",category:"Limpieza",description:"Toalla industrial Maracay Clase A.",price:4.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:85,name:"Toalla Maracay Industrial Clase C",category:"Limpieza",description:"Toalla industrial Maracay Clase C.",price:3.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:86,name:"Servilletas Fuente de Soda Clase B",category:"Limpieza",description:"Servilletas Fuente de Soda Clase B.",price:2.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:87,name:"Servilletas Gardenia",category:"Limpieza",description:"Servilletas Gardenia.",price:1.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:88,name:"Servilletas Gardenia Pétalo 2 rollos",category:"Limpieza",description:"Servilletas Gardenia Pétalo, presentación indicada en catálogo.",price:2.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:89,name:"Pañuelos faciales",category:"Limpieza",description:"Pañuelos faciales.",price:1.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:90,name:"Toalla Brilux institucional en rollo",category:"Limpieza",description:"Toalla Brilux en rollo institucional.",price:4.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:91,name:"Toalla Brilux intercalada",category:"Limpieza",description:"Toalla Brilux intercalada.",price:4.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:92,name:"Toalla Brilux Service intercalada",category:"Limpieza",description:"Toalla Brilux Service intercalada.",price:4.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:93,name:"Servilletas Brilux para dispensador",category:"Limpieza",description:"Servilletas Brilux para dispensador.",price:3.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:94,name:"Papel higiénico institucional Brilux doble hoja",category:"Limpieza",description:"Papel higiénico institucional Brilux doble hoja.",price:5.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:95,name:"Papel higiénico institucional Brilux hoja sencilla",category:"Limpieza",description:"Papel higiénico institucional Brilux hoja sencilla.",price:4.00,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"},
  {id:96,name:"Papel higiénico Tessa 4 rollos",category:"Limpieza",description:"Papel higiénico Tessa, paquete de 4 rollos.",price:2.50,emoji:"🧻",image:"./img/products/papel-sutil-200-hojas.jpg"}
];

const money = value => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(value);
const CART_STORAGE_KEY = "costa-norte-cart";

function loadSavedCart() {
    try {
        const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "{}");
        return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
    } catch {
        return {};
    }
}

let cart = loadSavedCart();
let activeCategory = "Todos";
let toastTimer;

const grid = $("#product-grid");
const drawer = $("#cart-drawer");
const overlay = $("#overlay");
const modal = $("#checkout-modal");

function notify(message){
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"),2600);
}

function renderProducts(){
  const query = $("#search").value.trim().toLocaleLowerCase("es");
  const visible = products.filter(product => {
    const categoryMatches = activeCategory === "Todos" || product.category === activeCategory;
    const queryMatches = `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase("es").includes(query);
    return categoryMatches && queryMatches;
  });

  const variantFamilies = [
    {name:"Margarina Mavesa",ids:[9,10]},
    {name:"Lavaplatos en crema",ids:[62,63]},
    {name:"Jabón azul",ids:[65,66]},
    {name:"Gel de ducha",ids:[70,71]},
    {name:"Papel higiénico Sutil",ids:[77,78,79]}
  ];

  const familyFor = product => variantFamilies.find(family => family.ids.includes(product.id));
  const rendered = new Set();

  const cards = visible.map(product => {
    const family = familyFor(product);
    const key = family ? `family-${family.name}` : `product-${product.id}`;

    if (rendered.has(key)) return "";
    rendered.add(key);

    const variants = family
      ? family.ids.map(id => products.find(item => item.id === id)).filter(Boolean)
      : [];

    return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.remove();this.parentElement.insertAdjacentHTML('beforeend','<span class=&quot;product-image-fallback&quot;>${product.emoji}</span>')">
        <span class="product-badge">PRECIO REF.</span>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        ${family ? `
          <label class="variant-label" for="variant-${product.id}">PresentaciÃ³n</label>
          <select class="variant-select" id="variant-${product.id}" data-variant-select>
            ${variants.map(variant => `<option value="${variant.id}" ${variant.id === product.id ? "selected" : ""}>${variant.name} Â· ${money(variant.price)}</option>`).join("")}
          </select>
        ` : ""}
        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button class="add-button" data-add="${product.id}" aria-label="Agregar ${product.name} al carrito">Agregar</button>
        </div>
      </div>
    </article>`;
  }).join("");

  $("#catalog-count").textContent = rendered.size;
  $("#no-results").hidden = rendered.size > 0;
  grid.innerHTML = cards;
}

const demoOffers = [
  {id:1, price:1.99},
  {id:5, price:0.99},
  {id:8, price:3.60},
  {id:11, price:0.69}
];

function renderOffers(){
  const container = $("#offer-products");
  container.innerHTML = demoOffers.map(offer => {
    const product = products.find(item => item.id === offer.id);
    if(!product) return "";
    const discount = Math.round((1 - offer.price / product.price) * 100);
    return `
      <article class="offer-card">
        <div class="offer-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="offer-discount">-${discount}%</span>
        </div>
        <div class="offer-info">
          <span class="offer-demo-label">OFERTA DEMO</span>
          <h3>${product.name}</h3>
          <div class="offer-prices">
            <span class="offer-old-price">${money(product.price)}</span>
            <strong>${money(offer.price)}</strong>
          </div>
          <button type="button" class="offer-view-button" data-offer-id="${product.id}">Ver producto Ã¢â€ â€”</button>
        </div>
      </article>`;
  }).join("");
}
function getCartEntries(){
  return Object.entries(cart).filter(([,quantity]) => quantity > 0);
}

function getCartTotal(){
  return getCartEntries().reduce((total,[id,quantity]) => {
    const product = products.find(item => item.id === Number(id));
    return total + (product ? product.price * quantity : 0);
  },0);
}

function getCartCount(){
  return getCartEntries().reduce((total,[,quantity]) => total + quantity,0);
}

function updateCart(){
  const entries = getCartEntries();
  const count = getCartCount();
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // El carrito sigue funcionando aunque el navegador no permita guardarlo.
  }
  $("#cart-count").textContent = count;
  $("#drawer-count").textContent = `(${count})`;
  $("#cart-total").textContent = money(getCartTotal());

  if(!entries.length){
    $("#cart-items").innerHTML = '<div class="empty-cart">Tu carrito todavÃƒÂ­a estÃƒÂ¡ vacÃƒÂ­o.<br>Explora el catÃƒÂ¡logo y agrega tus favoritos.</div>';
    return;
  }

  $("#cart-items").innerHTML = entries.map(([id,quantity]) => {
    const product = products.find(item => item.id === Number(id));
    if(!product) return "";
    return `<article class="cart-item">
      <div class="cart-thumb"><img src="${product.image}" alt="" onerror="this.remove();this.parentElement.textContent='${product.emoji}'"></div>
      <div><h3>${product.name}</h3><small>${money(product.price)} por unidad</small><div class="quantity"><button data-change="${product.id}" data-delta="-1" aria-label="Quitar uno">Ã¢Ë†â€™</button><span>${quantity}</span><button data-change="${product.id}" data-delta="1" aria-label="Agregar uno">+</button></div></div>
      <span class="cart-line-total">${money(product.price * quantity)}</span>
    </article>`;
  }).join("");
}

function openDrawer(){
  drawer.classList.add("visible");
  overlay.classList.add("visible");
  document.body.classList.add("no-scroll");
  $("#close-cart").focus();
}

function closeDrawer(){
  drawer.classList.remove("visible");
  if(modal.hidden){
    overlay.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  }
}

function closeAll(){
  closeDrawer();
  modal.hidden = true;
  overlay.classList.remove("visible");
  document.body.classList.remove("no-scroll");
}

function chooseCategory(category){
  activeCategory = category;
  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active",button.dataset.filter === category);
  });
  $("#search").value = "";
  renderProducts();
  $("#catalogo").scrollIntoView({behavior:"smooth"});
  $("#mobile-nav").hidden = true;
  $("#mobile-menu-button").setAttribute("aria-expanded","false");
}

$("#filters").addEventListener("click",event => {
  const button = event.target.closest("[data-filter]");
  if(button) chooseCategory(button.dataset.filter);
});

document.querySelectorAll("[data-jump]").forEach(button => {
  button.addEventListener("click",() => {
    const category = button.dataset.jump;
    const valid = products.some(product => product.category === category);
    chooseCategory(valid ? category : "Todos");
    $(".nav-dropdown").classList.remove("open");
    $("#departments-toggle").setAttribute("aria-expanded","false");
  });
});

$("#search").addEventListener("input",renderProducts);
$("#focus-search").addEventListener("click",() => {
  $("#catalogo").scrollIntoView({behavior:"smooth"});
  setTimeout(() => $("#search").focus(),350);
});

document.addEventListener("keydown",event => {
  if(event.key === "/" && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)){
    event.preventDefault();
    $("#catalogo").scrollIntoView({behavior:"smooth"});
    setTimeout(() => $("#search").focus(),350);
  }
  if(event.key === "Escape"){
    closeAll();
    $(".nav-dropdown").classList.remove("open");
    $("#departments-toggle").setAttribute("aria-expanded","false");
    $("#mobile-nav").hidden = true;
    $("#mobile-menu-button").setAttribute("aria-expanded","false");
  }
});

$("#departments-toggle").addEventListener("click",() => {
  const dropdown = $(".nav-dropdown");
  const open = dropdown.classList.toggle("open");
  $("#departments-toggle").setAttribute("aria-expanded",String(open));
});

document.addEventListener("click",event => {
  if(!event.target.closest(".nav-dropdown")){
    $(".nav-dropdown").classList.remove("open");
    $("#departments-toggle").setAttribute("aria-expanded","false");
  }
});

$("#mobile-menu-button").addEventListener("click",() => {
  const nav = $("#mobile-nav");
  nav.hidden = !nav.hidden;
  $("#mobile-menu-button").setAttribute("aria-expanded",String(!nav.hidden));
});

$("#mobile-nav").addEventListener("click",event => {
  if(event.target.closest("a")){
    $("#mobile-nav").hidden = true;
    $("#mobile-menu-button").setAttribute("aria-expanded","false");
  }
});

// Actualiza la tarjeta cuando se selecciona otra presentaciÃ³n.
grid.addEventListener("change", event => {
  const select = event.target.closest("[data-variant-select]");
  if (!select) return;

  const product = products.find(item => item.id === Number(select.value));
  const card = select.closest(".product-card");
  if (!product || !card) return;

  card.dataset.productId = product.id;
  card.querySelector(".product-category").textContent = product.category;
  card.querySelector("h3").textContent = product.name;
  card.querySelector(".product-description").textContent = product.description;
  card.querySelector(".product-price").textContent = money(product.price);

  const image = card.querySelector(".product-image img");
  if (image) {
    image.alt = product.name;
    image.src = product.image;
  }

  const addButton = card.querySelector("[data-add]");
  addButton.dataset.add = product.id;
  addButton.setAttribute("aria-label", `Agregar ${product.name} al carrito`);
});

grid.addEventListener("click",event => {
  const button = event.target.closest("[data-add]");
  if(!button) return;
  const id = Number(button.dataset.add);
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
  notify("Producto agregado al carrito");
});

$("#offer-products").addEventListener("click",event => {
  const button = event.target.closest("[data-offer-id]");
  if(!button) return;
  const product = products.find(item => item.id === Number(button.dataset.offerId));
  if(!product) return;
  chooseCategory(product.category);
  const card = document.querySelector(`.product-card[data-product-id="${product.id}"]`);
  if(card){
    card.classList.add("offer-highlight");
    card.scrollIntoView({behavior:"smooth",block:"center"});
    setTimeout(() => card.classList.remove("offer-highlight"), 2500);
  }
});
$("#cart-items").addEventListener("click",event => {
  const button = event.target.closest("[data-change]");
  if(!button) return;
  const id = Number(button.dataset.change);
  cart[id] = (cart[id] || 0) + Number(button.dataset.delta);
  if(cart[id] <= 0) delete cart[id];
  updateCart();
});

$("#open-cart").addEventListener("click",openDrawer);
$("#close-cart").addEventListener("click",closeDrawer);
$("#continue-shopping").addEventListener("click",closeAll);
overlay.addEventListener("click",closeAll);

$("#checkout-button").addEventListener("click",() => {
  if(!getCartCount()){
    notify("Agrega productos antes de continuar");
    return;
  }
  modal.hidden = false;
  $("#order-result").hidden = true;
  $("#order-result").replaceChildren();
  document.body.classList.add("no-scroll");
});

$("#close-checkout").addEventListener("click",() => {
  modal.hidden = true;
  if(!drawer.classList.contains("visible")){
    overlay.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  }
});

$("#delivery").addEventListener("change",event => {
  const needsAddress = event.target.value === "Delivery";
  $("#address-label").hidden = !needsAddress;
  $("#address").required = needsAddress;
});

$("#checkout-form").addEventListener("submit",event => {
  event.preventDefault();
  if(!getCartCount()){
    notify("Tu carrito estÃ¡ vacÃ­o");
    return;
  }

  const form = new FormData(event.target);
  const lines = getCartEntries().map(([id,quantity]) => {
    const product = products.find(item => item.id === Number(id));
    return `- ${product.name} x ${quantity}: ${money(product.price * quantity)}`;
  });

  const summary = [
    "SOLICITUD DE PEDIDO â€” DISTRIBUIDORA COSTA NORTE",
    "",
    `Cliente: ${form.get("customer")}`,
    `TelÃƒÂ©fono: ${form.get("phone")}`,
    `Entrega: ${form.get("delivery")}`,
    form.get("delivery") === "Delivery" ? `DirecciÃƒÂ³n: ${form.get("address")}` : "",
    `MÃƒÂ©todo de pago preferido: ${form.get("payment")}`,
    "",
    "PRODUCTOS",
    ...lines,
    "",
    `TOTAL ESTIMADO: ${money(getCartTotal())}`,
    "",
    "Solicitud de demostraciÃ³n: precios, disponibilidad y condiciones pendientes de confirmaciÃ³n.",
    "No se ha procesado ningÃºn pago ni se ha enviado el pedido automÃ¡ticamente."
  ].filter(Boolean).join("\n");

  const result = $("#order-result");
  result.replaceChildren();

  const summaryBox = document.createElement("div");
  summaryBox.className = "order-summary";
  summaryBox.textContent = summary;
  result.appendChild(summaryBox);

  const copyButton = document.createElement("button");
  copyButton.className = "button button-pink full-button";
  copyButton.type = "button";
  copyButton.textContent = "Copiar resumen del pedido";
  copyButton.addEventListener("click",async() => {
    try{
      await navigator.clipboard.writeText(summary);
      notify("Resumen copiado");
    }catch{
      const range = document.createRange();
      range.selectNodeContents(summaryBox);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      notify("Selecciona el texto y cÃ³pialo");
    }
  });
  result.appendChild(copyButton);

  const emailLink = document.createElement("a");
  emailLink.className = "button button-dark full-button";
  emailLink.style.marginTop = "10px";
  emailLink.href = `mailto:costanorte.ve@gmail.com?subject=${encodeURIComponent("Solicitud de pedido Costa Norte")}&body=${encodeURIComponent(summary)}`;
  emailLink.textContent = "Enviar solicitud por correo â†—";
  result.appendChild(emailLink);

  result.hidden = false;
  result.scrollIntoView({behavior:"smooth",block:"nearest"});
});

$("#year").textContent = new Date().getFullYear();
renderOffers();
renderProducts();
updateCart();





"use strict";

const $ = selector => document.querySelector(selector);

const products = [
  {id:1,name:"Arroz blanco",category:"Víveres",description:"Un básico para tu despensa.",price:2.50,emoji:"🍚",image:"./img/products/arroz.png"},
  {id:2,name:"Pasta larga",category:"Víveres",description:"Ideal para tus recetas favoritas.",price:1.80,emoji:"🍝",image:"./img/products/pasta.png"},
  {id:3,name:"Aceite vegetal",category:"Víveres",description:"Un esencial para cocinar.",price:3.20,emoji:"🫒",image:"./img/products/aceite.jpg"},
  {id:4,name:"Harina de maíz",category:"Víveres",description:"Para tus preparaciones diarias.",price:1.40,emoji:"🌽",image:"./img/products/harina.jpg"},
  {id:5,name:"Galletas dulces",category:"Confitería",description:"Un antojo para cualquier momento.",price:1.25,emoji:"🍪",image:"./img/products/galletas.jpg"},
  {id:6,name:"Chocolate",category:"Confitería",description:"Un toque dulce para tu día.",price:1.75,emoji:"🍫",image:"./img/products/chocolate.png"},
  {id:7,name:"Caramelos surtidos",category:"Confitería",description:"Color y sabor para compartir.",price:2.10,emoji:"🍬",image:"./img/products/caramelos.png"},
  {id:8,name:"Shampoo",category:"Cuidado personal",description:"Un básico de cuidado diario.",price:4.50,emoji:"🧴",image:"./img/products/shampoo.jpg"},
  {id:9,name:"Jabón personal",category:"Cuidado personal",description:"Para tu rutina de cada día.",price:1.10,emoji:"🧼",image:"./img/products/jabon.jpg"},
  {id:10,name:"Bebida refrescante",category:"Bebidas",description:"Una opción para acompañar tus comidas.",price:1.60,emoji:"🥤",image:"./img/products/bebida.png"},
  {id:11,name:"Agua mineral",category:"Bebidas",description:"Una alternativa para hidratarte.",price:0.90,emoji:"💧",image:"./img/products/agua.jpg"},
  {id:12,name:"Detergente",category:"Limpieza",description:"Un producto esencial para el hogar.",price:3.80,emoji:"🫧",image:"./img/products/detergente.png"}
];

const money = value => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(value);
let cart = {};
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

  $("#catalog-count").textContent = visible.length;
  $("#no-results").hidden = visible.length > 0;

  grid.innerHTML = visible.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.remove();this.parentElement.insertAdjacentHTML('beforeend','<span class=&quot;product-image-fallback&quot;>${product.emoji}</span>')">
        <span class="product-badge">COSTA NORTE</span>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom"><span class="product-price">${money(product.price)}</span><button class="add-button" data-add="${product.id}" aria-label="Agregar ${product.name} al carrito">+</button></div>
      </div>
    </article>`).join("");
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
  $("#cart-count").textContent = count;
  $("#drawer-count").textContent = `(${count})`;
  $("#cart-total").textContent = money(getCartTotal());

  if(!entries.length){
    $("#cart-items").innerHTML = '<div class="empty-cart">Tu carrito todavía está vacío.<br>Explora el catálogo y agrega tus favoritos.</div>';
    return;
  }

  $("#cart-items").innerHTML = entries.map(([id,quantity]) => {
    const product = products.find(item => item.id === Number(id));
    if(!product) return "";
    return `<article class="cart-item">
      <div class="cart-thumb"><img src="${product.image}" alt="" onerror="this.remove();this.parentElement.textContent='${product.emoji}'"></div>
      <div><h3>${product.name}</h3><small>${money(product.price)} por unidad</small><div class="quantity"><button data-change="${product.id}" data-delta="-1" aria-label="Quitar uno">−</button><span>${quantity}</span><button data-change="${product.id}" data-delta="1" aria-label="Agregar uno">+</button></div></div>
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

grid.addEventListener("click",event => {
  const button = event.target.closest("[data-add]");
  if(!button) return;
  const id = Number(button.dataset.add);
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
  notify("Producto agregado al carrito");
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
    notify("Tu carrito está vacío");
    return;
  }

  const form = new FormData(event.target);
  const lines = getCartEntries().map(([id,quantity]) => {
    const product = products.find(item => item.id === Number(id));
    return `- ${product.name} x ${quantity}: ${money(product.price * quantity)}`;
  });

  const summary = [
    "SOLICITUD DE PEDIDO — DISTRIBUIDORA COSTA NORTE",
    "",
    `Cliente: ${form.get("customer")}`,
    `Teléfono: ${form.get("phone")}`,
    `Entrega: ${form.get("delivery")}`,
    form.get("delivery") === "Delivery" ? `Dirección: ${form.get("address")}` : "",
    `Método de pago preferido: ${form.get("payment")}`,
    "",
    "PRODUCTOS",
    ...lines,
    "",
    `TOTAL ESTIMADO: ${money(getCartTotal())}`,
    "",
    "Solicitud de demostración: precios, disponibilidad y condiciones pendientes de confirmación.",
    "No se ha procesado ningún pago ni se ha enviado el pedido automáticamente."
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
      notify("Selecciona el texto y cópialo");
    }
  });
  result.appendChild(copyButton);

  const emailLink = document.createElement("a");
  emailLink.className = "button button-dark full-button";
  emailLink.style.marginTop = "10px";
  emailLink.href = `mailto:costanorte.ve@gmail.com?subject=${encodeURIComponent("Solicitud de pedido Costa Norte")}&body=${encodeURIComponent(summary)}`;
  emailLink.textContent = "Enviar solicitud por correo ↗";
  result.appendChild(emailLink);

  result.hidden = false;
  result.scrollIntoView({behavior:"smooth",block:"nearest"});
});

$("#year").textContent = new Date().getFullYear();
renderProducts();
updateCart();




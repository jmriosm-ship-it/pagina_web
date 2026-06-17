// ---------- BASE DE DATOS DE 100 PRODUCTOS ----------
const generateProducts = () => {
  const categories = ['teclado', 'mouse', 'audio', 'monitor', 'componente'];
  const baseData = {
    teclado: {
      names: ['Apex Pro X', 'COMBO / 3 EN 1 ADVANCE PRO - TDAGGER', 'COMBO / 3 EN 1 ZERO WHITE USB - ULTIMATE PRO', 'COMBO / 2 EN 1 RGB ESSENCIAL USB S101 - REDRAGON', 'COMBO / 2 EN 1 ESSENTIALS RGB ADVANCED PINK - REDRAGON', 'ORNATA V1 RGB BAJO PERFIL " EXIBIHICION " - RAZER', 'MECANICO RAINBOW DARK NIGH 104 - SEIN', 'K55 CORE RGB SEMI MECANICO - CORSAIR', 'K100 MECANICO RGB OPTICO - CORSAIR' , 'HARPE PRO RGB - REDRAGON'],
      specs: ['Switches ópticos magnéticos', 'PBT Double-shot + RGB', 'Switches ultra-silenciosos', 'Chasis de fibra de carbono', 'Estilo vintage táctil', 'Iluminación acrílica transparente', 'Layout 65% ergonómico', 'Latencia cero 2.4Ghz', 'Estructura de aluminio aeronáutico', 'Switches intercambiables Hot-Swap'],
      imgs: [
        // CAMBIA ESTOS LINKS POR LOS TUYOS CUANDO QUIERAS, BRO:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtAmzSLCgVENwp__6Nq4CTJsEUUf8Ake0GA&s',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/74700461/resize/300/300?1773563386',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47689844/resize/300/300?1713223261',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/23470258/resize/300/300?1650271333',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/76377176/resize/300/300?1778141224',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/30722333/resize/300/300?1673027902',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/76901431/resize/300/300?1779472218',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59802733/resize/300/300?1738605506',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59300422/resize/300/300?1745507467',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16280439/resize/300/300?1657709659'
      ]
    },
    mouse: {
      names: ['BLAZE Y RGB BLACK INALAMBRICO - KLIM', 'BLAZE PRO INALAMBRICO WHITE RGB - KLIM', 'MOUSE DARK ICONIC RGB - GAME NOTE', 'MOUSE RAPTOR HOLE RGB USB - HVT', 'MOUSE RGB ASHOKA - STAR WARS', 'DARTH VADER EDICION SPECIAL - STAR WARS', 'BLAKE RGB BLACK EDITION RGB', 'BLAKE RGB SAKURA PINK - FANTECH', 'IMPERIAL LITE RGB WHITE - TDAGGER', 'IMPERIAL LITE RGB BLACK - TDAGGER'],
      specs: ['Sensor PixArt 26,000 DPI', 'Estructura ultraliviana 49g', 'Diseño vertical ergonómico', 'Switches ópticos 100M clics', 'Carcasa de magnesio aeroespacial', 'Diseño perforado ventilado', 'Batería de larga duración 150h', 'Clics completamente silenciosos', 'Base de teflón puro PTFE', 'Tasa de sondeo de 4000Hz'],
      imgs: [
        // CAMBIA ESTOS LINKS POR LOS TUYOS CUANDO QUIERAS, BRO:
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/76377283/resize/300/300?1778142389',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/76377262/resize/300/300?1778142273',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/75880429/resize/300/300?1776459548',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59472286/resize/300/300?1737738836',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/44782194/resize/300/300?1706126394',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/44754386/resize/300/300?1706039693',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/30500923/resize/300/300?1704272320',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/27031621/resize/300/300?1704272326',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/76344315/resize/300/300?1778036013',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/76344307/resize/300/300?1778036228'
      ]
    },
    audio: {
      names: ['ASTRONIX INALAMBRICAS RGB MULTIPLATAFORMA - ULTIMATE PRO', 'SONIDO Z407 + SOWOOFER 2.1 - LOGI', 'G560 120W BLUETOOTH RGB GAMING - LOGI', 'GROGU STAR WARS 7.1 USB- PRIMUS', 'AHSOKA 7.1 RGB STARWARS - PRIMUS', 'FUXI BLACK 3.5MM / MULTIPLATAFORMA - GAME NOTE', 'VALOR GAMING MULTIPLATAFORMA WHITE - FANTECH', 'EG335 MULTIPLATAFORMA NEGRAS / BLANCAS / MENTA - LOGI', 'Vibe ANC', 'G535 INALAMBRICA BLACK - LOGI'],
      specs: ['Audio espacial 7.1 certificado', 'Drivers de neodimio 50mm', 'Latencia ultra baja 15ms', 'Micrófono de condensador premium', 'Cancelación activa de ruido ANC', 'Amplificador DAC integrado USB', 'Patrón de captación cardioide', 'Almohadillas de gel refrigerante', 'Conexión simultánea dual-band', 'Respuesta de frecuencia plana'],
      imgs: [
        // CAMBIA ESTOS LINKS POR LOS TUYOS CUANDO QUIERAS, BRO:
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/69318034/resize/300/300?1762229532',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/44033443/resize/300/300?1704347241',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/66055345/resize/300/300?1780642964',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/65403160/resize/300/300?1752600249',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/49374805/resize/300/300?1717425746',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/75880547/resize/300/300?1776459846',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/30570401/resize/300/300?1672336609',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/29729954/resize/300/300?1704274768',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/28933375/resize/300/300?1718124848',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/74984573/resize/300/300?1774124954',
      ]
    },
    monitor: {
      names: ['MSI 24" FHD 1080P ( RAPID IPS-180HZ-1MS)', 'MSI 27" GAMING CURVO VA ( FHD - 280HZ - 0,5MS )', 'MSI GAMING 27" (170HZ - 1MS - 2K QHD)', 'MSI 27" PRO GAMING ( FHD - 1MS - 144HZ )', 'Specter Pro 240Hz', 'SAMSUNG 34" VIEW INFINTY CURVO WQHD - SAMSUNG', 'AOC 24" FAST IPS FHD (0,5ms-200Hz) PIVOT G4HE', 'ASUS 24" TUF IPS FHD (1MS - 146HZ)', 'ASUS 24" TUF FAST IPS FHD PIVOT ( 0.3MS - 240HZ )', 'OLED ASUS 27" ROG STRIX QHD 2K (0,03m-240Hz)'],
      specs: ['Frecuencia 165Hz · 1ms curvo', 'Panel IPS · Color 99% sRGB', 'Relación de aspecto 21:9 UW', 'Tecnología OLED · Negros puros', 'Tasa extrema 240Hz para esports', 'Resolución UHD 4K cristalina', 'G-Sync + FreeSync Premium', 'Soporte ergonómico ajustable', 'HDR600 dinámico ultra brillante', 'Curvatura agresiva 1000R'],
      imgs: [
        // CAMBIA ESTOS LINKS POR LOS TUYOS CUANDO QUIERAS, BRO:
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/74488815/resize/300/300?1773174177',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/74492157/resize/300/300?1773177229',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/76344085/resize/300/300?1778034961',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/74651897/resize/300/300?1773395161',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/77264464/resize/300/300?1780293179',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/74498638/resize/300/300?1773224019',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/67494772/resize/300/300?1757575599',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/77318286/resize/300/300?1780387312',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/55273496/resize/300/300?1757056369',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48888781/resize/300/300?1716014253'
      ]
    },
    componente: {
      names: ['✔️ RTX 5090 LIQUID + PANTALLA LIGHTNING Z 32GBS - MSI', ' RTX 5090 TUF GAMING OC 32GBS - ASUS TUF', 'RTX 5080 GAMING WINDF OC RGB X3 16GBS - GIGABYTE', 'RTX 5080 INSPIRE 16GBS 3X OC - MSI', ' RTX 5070 TI GAMING OC WINDFORCE 16GBS - GIGABYTE', 'RADEON RX 9070 XT TUF GAMING OC 16GBS - ASUS', ' RADEON RX 9070 XT OC 3X PRIME 16GBS - ASUS', 'RTX 5060 TI GAMING OC 16GBS - GIGABYTE', ' RTX 5060 TI PRIME 3 FANS OC 16GBS - ASUS', 'RTX 5060 TI VENTUS 3X OC 16GBS - MSI'],
      specs: ['Arquitectura avanzada v3', '24 núcleos híbridos inteligentes', 'Bloque de refrigeración líquida ARGB', 'RAM DDR5 velocidad extrema 7200Mhz', 'Certificación 80 Plus Platinum', 'Velocidad lectura hasta 7500MB/s', 'Chipset premium overcloking', 'Ventanas de vidrio templado dual', 'Compuesto de micropartículas de plata', 'Arquitectura gráfica de alto impacto'],
      imgs: [
        // CAMBIA ESTOS LINKS POR LOS TUYOS CUANDO QUIERAS, BRO:
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/75457344/resize/300/300?1777685695',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/62338961/resize/300/300?1744225027',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/60102523/resize/300/300?1739418432',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/60430871/resize/300/300?1740243562',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/66320960/resize/300/300?1754763159',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/61045268/resize/300/300?1741299928',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/73419463/resize/300/300?1771309265',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/69908743/resize/300/300?1763619879',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/73419421/resize/300/300?1771309011',
        'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/63578776/resize/300/300?1747631974'
      ]
    }
  };

  const list = [];
  let currentId = 1;

  for (let i = 0; i < 100; i++) {
    const cat = categories[i % categories.length];
    const pool = baseData[cat];
    const baseIndex = Math.floor(i / categories.length) % 10;
    
    const name = `${pool.names[baseIndex]} v${Math.floor(i / 15) + 1}`;
    const specs = pool.specs[baseIndex];
    const img = pool.imgs[baseIndex];
    const price = Math.floor(Math.random() * (1500000 - 80000) + 80000);
    const hasOld = Math.random() > 0.6;
    const oldPrice = hasOld ? Math.floor(price * 1.25) : null;
    const tag = Math.random() > 0.85 ? 'hot' : (Math.random() > 0.85 ? 'new' : null);

    list.push({ id: currentId++, cat, name, specs, price, oldPrice, tag, img });
  }
  return list;
};

const PRODUCTS = generateProducts();
const fmt = n => '$' + n.toLocaleString('es-CO');

// ---------- ESTADO GLOBAL ----------
let cart = JSON.parse(localStorage.getItem('nexus_cart') || '[]');
let currentFilter = 'all';
let activeModalProductId = null;

function saveCart(){ localStorage.setItem('nexus_cart', JSON.stringify(cart)); }

// ---------- EFECTO DE SEGUIMIENTO DEL MOUSE ----------
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--mouse-x', `${x}%`);
  document.documentElement.style.setProperty('--mouse-y', `${y}%`);
});

// ---------- CREAR PARTÍCULAS ----------
const particlesContainer = document.getElementById('particlesContainer');
for(let i = 0; i < 20; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.width = particle.style.height = `${Math.random() * 4 + 2}px`;
  particle.style.animationDelay = `${Math.random() * 10}s`;
  particlesContainer.appendChild(particle);
}

// ---------- RENDERIZAR TARJETAS EN LA GRILLA ----------
const grid = document.getElementById('grid');

function renderProducts(){
  const items = currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === currentFilter);
  grid.innerHTML = items.map((p, i) => `
    <div class="card" data-id="${p.id}" style="animation-delay: ${Math.min(i * 0.01, 0.4)}s">
      ${p.tag ? `<span class="tag ${p.tag}">${p.tag === 'hot' ? 'Top Venta' : 'Nuevo'}</span>` : ''}
      <div class="card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="card-cat">${p.cat}</div>
      <h3>${p.name}</h3>
      <div class="specs">${p.specs}</div>
      <div class="card-footer">
        <div class="price">
          ${fmt(p.price)}
          ${p.oldPrice ? `<small>${fmt(p.oldPrice)}</small>` : ''}
        </div>
        <button class="add-btn" data-id="${p.id}">+</button>
      </div>
    </div>
  `).join('');
}

// ---------- MANEJO DE FILTROS CIBERNÉTICOS ----------
document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.cat;
  renderProducts();
});

// ---------- MODAL DETALLE DE PRODUCTO ----------
const productModal = document.getElementById('productModal');

function openProductModal(product) {
  activeModalProductId = product.id;
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalCat').textContent = `// ID SISTEMA: #${product.id} // CAT: ${product.cat}`;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDesc').textContent = `${product.specs}. Este dispositivo de hardware cuenta con calibración de precisión avanzada y ha sido validado bajo pruebas de carga térmica en los laboratorios Nexus Core para el máximo nivel competitivo estructural.`;
  document.getElementById('modalPrice').textContent = fmt(product.price);
  productModal.classList.add('show');
}

function closeProductModal() { productModal.classList.remove('show'); }
document.getElementById('modalClose').addEventListener('click', closeProductModal);
productModal.addEventListener('click', e => { if(e.target === productModal) closeProductModal(); });

document.getElementById('modalBuyBtn').addEventListener('click', () => {
  if(!activeModalProductId) return;
  const product = PRODUCTS.find(p => p.id === activeModalProductId);
  if(product) {
    addToCart(product);
    showToast(`${product.name} ingresado a la orden`);
    closeProductModal();
  }
});

// ---------- CLICS EN LAS TARJETAS (AÑADIR O DETALLE) ----------
grid.addEventListener('click', e => {
  const btn = e.target.closest('.add-btn');
  if(btn) {
    e.stopPropagation();
    const id = Number(btn.dataset.id);
    const product = PRODUCTS.find(p => p.id === id);
    addToCart(product);
    btn.classList.add('added');
    setTimeout(() => btn.classList.remove('added'), 400);
    flyToCart(btn);
    showToast(`${product.name} agregado`);
    return;
  }
  
  const card = e.target.closest('.card');
  if(card) {
    const id = Number(card.dataset.id);
    const product = PRODUCTS.find(p => p.id === id);
    if(product) openProductModal(product);
  }
});

// ANIMACIÓN DE PARTICULA VOLANDO AL CARRITO
function flyToCart(originEl){
  const cartBtn = document.getElementById('cartBtn');
  const startRect = originEl.getBoundingClientRect();
  const endRect = cartBtn.getBoundingClientRect();
  const dot = document.createElement('div');
  dot.className = 'fly-dot';
  dot.style.left = startRect.left + startRect.width/2 - 6 + 'px';
  dot.style.top = startRect.top + startRect.height/2 - 6 + 'px';
  document.body.appendChild(dot);
  const dx = endRect.left + endRect.width/2 - (startRect.left + startRect.width/2);
  const dy = endRect.top + endRect.height/2 - (startRect.top + startRect.height/2);
  dot.animate([
    { transform: 'translate(0,0) scale(1)', opacity: 1 },
    { transform: `translate(${dx*0.5}px, ${dy - 60}px) scale(1.3)`, opacity: 1, offset: 0.6 },
    { transform: `translate(${dx}px, ${dy}px) scale(0.2)`, opacity: 0 }
  ], { duration: 550, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => dot.remove();
}

function addToCart(product){
  const existing = cart.find(i => i.id === product.id);
  if(existing) existing.qty++; else cart.push({...product, qty:1});
  saveCart(); renderCart(); bumpCount();
}

// ---------- LOGICA DEL CARRITO DRAWER ----------
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');

function renderCart(){
  const totalQty = cart.reduce((s,i) => s + i.qty, 0);
  cartCountEl.textContent = totalQty;

  if(cart.length === 0){
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:32px; opacity:0.3;">📦</div>
        <div>Matriz Vacía</div>
        <div style="font-size:12px; color:var(--text-dim);">No hay hardware seleccionado</div>
      </div>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}">
        <div class="ci-info">
          <div class="ci-cat">// ${item.cat}</div>
          <h4>${item.name}</h4>
          <div class="ci-controls">
            <div class="qty-control">
              <button class="qty-minus" data-id="${item.id}">−</button>
              <span>${item.qty}</span>
              <button class="qty-plus" data-id="${item.id}">+</button>
            </div>
            <div class="ci-price">${fmt(item.price * item.qty)}</div>
          </div>
          <button class="remove-btn" data-id="${item.id}">Remover</button>
        </div>
      </div>
    `).join('');
  }

  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 0 ? (subtotal > 800000 ? 0 : 25000) : 0;
  const total = subtotal + shipping;

  document.getElementById('subtotal').textContent = fmt(subtotal);
  document.getElementById('shipping').textContent = shipping === 0 ? (subtotal > 0 ? 'Remoto Gratis' : '$0') : fmt(shipping);
  document.getElementById('total').textContent = fmt(total);
  document.getElementById('checkoutBtn').disabled = cart.length === 0;
}

function bumpCount(){
  cartCountEl.classList.remove('bump');
  void cartCountEl.offsetWidth;
  cartCountEl.classList.add('bump');
}

cartItemsEl.addEventListener('click', e => {
  const id = Number(e.target.dataset.id);
  if(!id) return;
  if(e.target.classList.contains('qty-plus')){
    cart.find(i => i.id === id).qty++;
    saveCart(); renderCart();
  }
  if(e.target.classList.contains('qty-minus')){
    const item = cart.find(i => i.id === id);
    item.qty--;
    if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
    saveCart(); renderCart();
  }
  if(e.target.classList.contains('remove-btn')){
    cart = cart.filter(i => i.id !== id);
    saveCart(); renderCart();
  }
});

// ---------- ENRUTADORES DEL PANEL LATERAL ----------
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

function openDrawer(){ drawer.classList.add('open'); overlay.classList.add('show'); }
function closeDrawer(){ drawer.classList.remove('open'); overlay.classList.remove('show'); }

document.getElementById('cartBtn').addEventListener('click', openDrawer);
document.getElementById('closeBtn').addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeDrawer(); closeProductModal(); } });

// ---------- NOTIFICACIONES TOAST ----------
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  toast.className = 'toast show';
  toast.textContent = msg;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = 'toast'; }, 2000);
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
  showToast('⚡ Matriz procesada. ¡Orden completa!');
  cart = []; saveCart(); renderCart();
  setTimeout(closeDrawer, 800);
});

// ---------- ARRANQUE INICIAL DEL SISTEMA ----------
renderProducts();
renderCart();
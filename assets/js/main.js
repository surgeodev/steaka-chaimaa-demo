const MENU = {
  tacos: [
    { name: "Tacos Poulet", price: 45, img: "menu/tacospoulet.webp" },
    { name: "Tacos Viande Hachée", price: 45, img: "menu/tacosviandehache.webp", desc: "Recette classique, sauce blanche" },
    { name: "Tacos Nuggets", price: 48, img: "menu/tacosnuggets.webp" },
    { name: "Tacos Cordon Bleu", price: 48, img: "menu/tacoscordonbleu.webp" },
    { name: "Tacos Mixte", price: 50, img: "menu/tacosmixte.webp" },
    { name: "Tacos Steaka", price: 55, img: "menu/tacossteaka.webp", desc: "Notre spécialité maison", badge: "Signature" }
  ],
  sandwichs: [
    { name: "Chika", price: 45, img: "menu/chika.webp" },
    { name: "Tornade Viande Hachée", price: 45, img: "menu/tacoscordonbleu.webp" },
    { name: "Cordon Bleu", price: 45, img: "menu/sandiwchcordeubleu.webp" },
    { name: "Cury", price: 45, img: "menu/sandwichcury.webp" },
    { name: "Tortillas Mixte", price: 45, img: "menu/sandwichtortilla.webp" },
    { name: "Chef", price: 45, img: "menu/sandwichchef.webp" },
    { name: "Swiss", price: 45, img: "menu/sandwichmixte.webp" },
    { name: "Spécial", price: 45, img: "menu/sandwichspecial.webp" },
    { name: "Tornade Fish", price: 45, img: "menu/TornadeFish.webp" },
    { name: "Tornade Nuggets", price: 45, img: "menu/TornadeNuggets.webp" }
  ],
  salades: [
    { name: "Salade Poulet", price: 37, img: "menu/saladepouletv2.webp", desc: "Laitue, cœur de palmier, poulet, œuf, soja, maïs, fromage" },
    { name: "Salade Maison", price: 40, img: "menu/salademaisonv2.webp", desc: "Maïs, cœur de palmier, thon, anchois, sauce samouraï" },
    { name: "Salade César", price: 40, img: "menu/saladecesarv2.webp", desc: "Poulet, fromage, jumbo de dinde, maïs" },
    { name: "Salade Exotique", price: 48, img: "menu/saladeexotiquev2.webp", desc: "Jumbo de dinde, amandes, ananas, raisins secs" }
  ],
  plats: [
    { name: "Nuggets", price: 45, img: "menu/platnuggets.webp", desc: "Pâtes légumes sautés + boisson + frites" },
    { name: "Chicken", price: 45, img: "menu/platchicekn.webp", desc: "Pâtes légumes sautés + boisson + frites" },
    { name: "Fish", price: 50, img: "menu/platfish.webp", desc: "Pâtes légumes sautés + boisson + frites" },
    { name: "Mixte", price: 60, img: "menu/platmixte.webp", desc: "Pâtes légumes sautés + boisson + frites", badge: "Le plus complet" }
  ],
  pates: [
    { name: "Poulet", price: 40, img: "menu/patesboulet.webp" },
    { name: "Carbonara", price: 40, img: "menu/patescarbonara.webp" },
    { name: "Bolonaise", price: 40, img: "menu/patebolonaise.webp" },
    { name: "Fruit de Mer", price: 55, img: "menu/platfruitdemer.webp" },
    { name: "4 Fromages", price: 55, img: "menu/pates4fromage.webp" }
  ],
  pizzas: [
    { name: "Pizza Thon", price: 45, img: "menu/pizzathon.webp" },
    { name: "Pizza Végétarienne", price: 45, img: "menu/pizzavegetarienne.webp" },
    { name: "Pizza Quatre Saisons", price: 50, img: "menu/pizzaquatre.webp" },
    { name: "Pizza Fruit de Mer", price: 55, img: "menu/pizzafruitdemer.webp" }
  ],
  formules: [
    { name: "Formule 1 — Chicken", price: 32, img: "menu/forumule1chken.webp", desc: "Chicken + frites + boisson offerte", badge: "Boisson + frites offertes" },
    { name: "Formule 1 — Viande Hachée", price: 32, img: "menu/formule1viandehachee.webp", desc: "Viande hachée + frites + boisson offerte", badge: "Boisson + frites offertes" },
    { name: "Formule 2 — Chicken", price: 40, img: "menu/formule2chicken.webp", desc: "2 chickens + frites + boisson offerte", badge: "Boisson + frites offertes" },
    { name: "Formule 3 — Cordon Bleu", price: 67, img: "menu/formule3cordonbleu.webp", desc: "3 cordons bleus + frites + boisson offerte", badge: "Boisson + frites offertes" }
  ],
  gratins: [
    { name: "Gratin Thon", price: 38, img: "menu/gratinthon.webp" },
    { name: "Gratin Poulet", price: 40, img: "menu/gratinpoulet.webp" },
    { name: "Gratin Viande Hachée", price: 40, img: "menu/gratinfiandehadche.webp" },
    { name: "Gratin 4 Fromages", price: 50, img: "menu/gratin4fromage.webp" },
    { name: "Cosamia Poulet", price: 40, img: "menu/cosamiyapoulet.webp" },
    { name: "Cosamia Viande Hachée", price: 43, img: "menu/cosamiaviandehachee.webp" }
  ],
  shawarma: [
    { name: "Shawarma", price: null, img: "menu/1-shawarmanormal-min.webp" },
    { name: "Shawarma Fromage", price: null, img: "menu/8-tacoschawarmafrite-min.webp" },
    { name: "Plat Shawarma", price: null, img: "menu/6-platchawrma-min.webp" }
  ],
  jus: [
    { name: "Jus d'Orange", price: 20, img: "menu/jusdorange.webp" },
    { name: "Jus d'Avocat", price: 20, img: "menu/jusavocat.webp" },
    { name: "Monjuto", price: 20, img: "menu/monjuto.webp", desc: "Citron avocat" },
    { name: "Jus Chef Simo", price: 25, img: "menu/juschef.webp", badge: "Notre signature" }
  ],
  specials: [
    { name: "Couscous", price: 45, img: "menu/couscous.webp", desc: "Avec lben gratuit, chaque vendredi", badge: "Chaque vendredi" },
    { name: "Rfisa", price: 40, img: "menu/rfisa.webp", desc: "Chaque vendredi" },
    { name: "Fruits frais", price: 40, img: "menu/Fruits.webp" }
  ]
};

const grid = document.getElementById("menuGrid");

function render(cat) {
  grid.innerHTML = "";
  (MENU[cat] || []).forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.style.animationDelay = (i * 40) + "ms";
    const price = item.price ? `<span class="menu-card-price">${item.price} DH</span>` : `<span class="menu-card-price">Sur place</span>`;
    const badge = item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : "";
    const desc = item.desc ? `<p class="menu-card-desc">${item.desc}</p>` : "";
    card.innerHTML = `
      <div class="menu-card-img"><img src="assets/img/${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="menu-card-body">
        <div class="menu-card-title"><h3>${item.name}</h3>${price}</div>
        ${desc}${badge}
      </div>`;
    grid.appendChild(card);
  });
}

document.getElementById("tabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  render(tab.dataset.cat);
});

render("tacos");

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggle.classList.toggle("open");
});
nav.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
  });
});

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const pos = window.scrollY + 120;
  let current = "accueil";
  sections.forEach(sec => {
    if (pos >= sec.offsetTop) current = sec.id;
  });
  document.querySelectorAll(".nav-link").forEach(l => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
});

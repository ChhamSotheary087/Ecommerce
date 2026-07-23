const products = [
  {
    id: 1,
    name: "Classic Beige Trench Coat",
    price: 249.99,
    oldPrice: 299.99,
    discountBadge: "Save 17%",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    category: "Jackets",
    brand: "Aura",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black"],
    gender: "women",
    rating: 4.8,
    reviewsCount: 124,
    isNew: true,
    isBestSeller: true,
    description:
      "A timeless outerwear staple crafted from water-repellent cotton gabardine. Featuring a double-breasted silhouette, tailored collar, storm flap, and a belted waist to define your silhouette. Designed for effortlessly elegant layering.",
    features: [
      "Water-repellent cotton blend fabric",
      "Double-breasted front button closure",
      "Adjustable waist belt and cuff straps",
      "Deep button-through welt pockets",
      "Fully lined with luxury satin fabric",
    ],
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 189.0,
    oldPrice: 220.0,
    discountBadge: "Sale",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    category: "Watches",
    brand: "Chronos",
    sizes: ["OS"],
    colors: ["Black", "Brown", "White"],
    gender: "unisex",
    rating: 4.9,
    reviewsCount: 88,
    isNew: false,
    isBestSeller: true,
    description:
      "Sleek and minimalist timepiece featuring a genuine Italian leather strap, stainless steel case, and scratch-resistant sapphire crystal glass. Perfect for both business meetings and casual evenings out.",
    features: [
      "Swiss quartz movement",
      "316L stainless steel case (40mm)",
      "Genuine Italian leather band (interchangeable)",
      "Water-resistant up to 5 ATM / 50m",
      "Scratch-resistant sapphire crystal face",
    ],
  },
  {
    id: 3,
    name: "Silk Evening Slip Dress",
    price: 320.0,
    oldPrice: 380.0,
    discountBadge: "Premium",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    category: "Dresses",
    brand: "Velour",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Emerald", "Black", "Champagne"],
    gender: "women",
    rating: 4.7,
    reviewsCount: 65,
    isNew: true,
    isBestSeller: false,
    description:
      "Cut on the bias for a fluid, figure-skimming drape, this dress is crafted from heavy-weight sandwashed silk. Features adjustable delicate spaghetti straps, a cowl neckline, and a subtle side slit.",
    features: [
      "100% premium sandwashed silk mulberry",
      "Adjustable shoulder straps for custom fit",
      "Flattering cowl neckline and midi length",
      "Side-seam slit for movement",
      "Dry clean only",
    ],
  },
  {
    id: 4,
    name: "Oversized Knit Hoodie",
    price: 89.99,
    oldPrice: 110.0,
    discountBadge: "Hot",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
    category: "Hoodies",
    brand: "Apex",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Beige", "Gray", "Taupe"],
    gender: "unisex",
    rating: 4.5,
    reviewsCount: 142,
    isNew: false,
    isBestSeller: false,
    description:
      "The ultimate luxury loungewear. Knitted from a heavy cotton-bouclé blend, this hoodie features drop shoulders, a double-lined hood, and a generous boxy fit for cozy street elegance.",
    features: [
      "Heavy cotton-blend bouclé knit fabric",
      "Double-lined hood without drawcords for clean look",
      "Dropped shoulders and ribbed trims",
      "Front kangaroo pocket",
      "Relaxed, oversized silhouette",
    ],
  },
  {
    id: 5,
    name: "Premium Suede Chelsea Boots",
    price: 199.99,
    oldPrice: 249.99,
    discountBadge: "Best Price",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80",
    category: "Shoes",
    brand: "Heritage",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Brown", "Black"],
    gender: "men",
    rating: 4.8,
    reviewsCount: 96,
    isNew: false,
    isBestSeller: true,
    description:
      "Handcrafted from genuine Italian suede with a water-repellent coating. Features elasticated side gores, a durable leather sole with rubber grip panels, and a cushioned footbed for all-day comfort.",
    features: [
      "Premium Italian suede leather upper",
      "Water-repellent nanotech coating",
      "Durable leather sole with rubber traction pods",
      "Genuine leather lining and cushioned insole",
      "Elasticated side panels and heel pull tabs",
    ],
  },
  {
    id: 6,
    name: "Classic Organic Cotton T-Shirt",
    price: 39.99,
    oldPrice: null,
    discountBadge: null,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
    category: "T-Shirts",
    brand: "Aura",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Gray"],
    gender: "unisex",
    rating: 4.6,
    reviewsCount: 310,
    isNew: false,
    isBestSeller: true,
    description:
      "An everyday essential refined. Crafted from 100% GOTS-certified organic cotton, with a ribbed crew neck and double-needle topstitching. Remarkably soft, breathable, and holds its shape wash after wash.",
    features: [
      "100% GOTS-certified organic cotton",
      "Medium weight (180 GSM) jersey fabric",
      "Reinforced shoulder-to-shoulder taping",
      "Ribbed crewneck collar",
      "Pre-shrunk to minimize shrinkage",
    ],
  },
  {
    id: 7,
    name: "Slim Fit Stretch Denim Jeans",
    price: 79.99,
    oldPrice: 99.99,
    discountBadge: "Sale",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    category: "Jeans",
    brand: "Heritage",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    gender: "men",
    rating: 4.4,
    reviewsCount: 185,
    isNew: false,
    isBestSeller: false,
    description:
      "Engineered from mid-weight denim with 2% elastane for just the right amount of stretch. Tailored through the hip and thigh with a slim leg profile. Hand-sanded for a subtle lived-in look.",
    features: [
      "98% Cotton, 2% Elastane premium stretch denim",
      "Slim fit through the leg with 14-inch leg opening",
      "Classic 5-pocket styling",
      "Genuine copper hardware and zip fly",
      "Sustainably washed using water-saving methods",
    ],
  },
  {
    id: 8,
    name: "Leather Crossbody Handbag",
    price: 149.99,
    oldPrice: null,
    discountBadge: "New",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    category: "Bags",
    brand: "Velour",
    sizes: ["OS"],
    colors: ["Black", "Taupe", "Burgundy"],
    gender: "women",
    rating: 4.7,
    reviewsCount: 74,
    isNew: true,
    isBestSeller: false,
    description:
      "Crafted from fine pebbled leather with a gold-tone chain link accent. Compact yet organized, it features dual interior compartments, a secure magnet flap closure, and a detachable strap to transform into a clutch.",
    features: [
      "Full-grain pebbled calfskin leather",
      "Polished gold-tone metal hardware",
      "Adjustable and detachable leather shoulder strap",
      "Dual interior card slots and zippered wall pocket",
      "Magnetic snap-button flap closure",
    ],
  },
  {
    id: 9,
    name: "Modern Square Sunglasses",
    price: 59.99,
    oldPrice: 79.99,
    discountBadge: "-25%",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    category: "Sunglasses",
    brand: "Chronos",
    sizes: ["OS"],
    colors: ["Black", "Tortoise"],
    gender: "unisex",
    rating: 4.5,
    reviewsCount: 92,
    isNew: false,
    isBestSeller: false,
    description:
      "Bold square sunglasses constructed from high-grade lightweight acetate. Fitted with 100% UVA/UVB protective lenses that offer crisp clarity and reduce glare on bright sunny days.",
    features: [
      "Premium lightweight acetate frame",
      "100% UVA/UVB protection (UV400 block)",
      "Polarized scratch-resistant polycarbonate lenses",
      "Robust 5-barrel metal hinges",
      "Includes luxury leather case and microfiber cleaning cloth",
    ],
  },
  {
    id: 10,
    name: "Retro Urban Sneakers",
    price: 120.0,
    oldPrice: null,
    discountBadge: null,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    category: "Sneakers",
    brand: "Apex",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    colors: ["Beige", "White", "Gray"],
    gender: "unisex",
    rating: 4.8,
    reviewsCount: 205,
    isNew: true,
    isBestSeller: true,
    description:
      "A sporty-chic design combining premium suede panels with breathable mesh. Features a lightweight EVA midsole for exceptional bounce and a studded rubber tread for excellent traction.",
    features: [
      "Premium cow suede and sandwich mesh panels",
      "Lightweight shock-absorbing EVA midsole",
      "Ortholite comfort foam cushioned insole",
      "Durable studded rubber outsole",
      "Reflective safety accents for low light visibility",
    ],
  },
  {
    id: 11,
    name: "Cashmere Crewneck Sweater",
    price: 159.99,
    oldPrice: 199.99,
    discountBadge: "Cashmere",
    image:
      "https://images.unsplash.com/photo-1574164904299-3a102b110380?w=600&q=80",
    category: "Hoodies",
    brand: "Aura",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Navy", "Black"],
    gender: "men",
    rating: 4.9,
    reviewsCount: 112,
    isNew: true,
    isBestSeller: true,
    description:
      "Woven from exceptionally soft 12-gauge grade-A Mongolian cashmere. This sweater offers incredible warmth and a lightweight feel. Styled in a timeless crewneck cut with ribbed finishes.",
    features: [
      "100% Grade-A Mongolian cashmere (2-ply)",
      "Densely knitted in 12-gauge yarn for durability",
      "Classic ribbed crewneck, cuffs, and hem",
      "Super soft, luxurious touch with no itchiness",
      "Naturally thermo-regulating fibers",
    ],
  },
  {
    id: 12,
    name: "Linen Summer Day Dress",
    price: 110.0,
    oldPrice: null,
    discountBadge: null,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    category: "Dresses",
    brand: "Velour",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Sage", "Beige"],
    gender: "women",
    rating: 4.6,
    reviewsCount: 48,
    isNew: false,
    isBestSeller: false,
    description:
      "Made from eco-friendly pure linen, this dress keeps you cool and stylish. Features a button-down front, handy side-seam pockets, and an optional tie belt to cinch the waist.",
    features: [
      "100% Belgian flax linen fabric",
      "Natural coconut shell button-through front",
      "Relaxed fit with adjustable self-tie waist belt",
      "Side-seam hidden pockets",
      "Breathable, moisture-wicking weave",
    ],
  },
  {
    id: 13,
    name: "Suede Leather Bomber Jacket",
    price: 279.99,
    oldPrice: 349.99,
    discountBadge: "-20%",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    category: "Jackets",
    brand: "Heritage",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Brown", "Black"],
    gender: "men",
    rating: 4.8,
    reviewsCount: 77,
    isNew: true,
    isBestSeller: false,
    description:
      "A smart-casual statement jacket, crafted from ultra-supple goat suede leather. Finished with ribbed knit cuffs and collar, premium silver-tone metal zippers, and internal utility pockets.",
    features: [
      "100% genuine goat suede leather shell",
      "Soft rib-knit collar, cuffs, and bottom band",
      "Heavy-duty YKK double-front zipper closure",
      "Two exterior zip welt pockets and two interior chest pockets",
      "Luxury satin lining",
    ],
  },
  {
    id: 14,
    name: "Distressed Boyfriend Jeans",
    price: 89.99,
    oldPrice: null,
    discountBadge: null,
    image:
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&q=80",
    category: "Jeans",
    brand: "Heritage",
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Blue", "White"],
    gender: "women",
    rating: 4.3,
    reviewsCount: 119,
    isNew: false,
    isBestSeller: false,
    description:
      "A relaxed, slouchy fit denim designed to sit low on the hips. Details include light fading, whiskering, and strategic hand-distressed rips for a cool, laid-back weekend aesthetic.",
    features: [
      "100% rigid organic cotton denim",
      "Mid-rise, relaxed boyfriend leg profile",
      "Deconstructed shredding and repair stitching",
      "Frayed button fly and raw cuffs",
      "Wash cold, hang dry recommended",
    ],
  },
  {
    id: 15,
    name: "Classic Leather Loafers",
    price: 169.99,
    oldPrice: null,
    discountBadge: null,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80",
    category: "Shoes",
    brand: "Heritage",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black", "Brown"],
    gender: "men",
    rating: 4.7,
    reviewsCount: 53,
    isNew: false,
    isBestSeller: false,
    description:
      "Constructed using traditional moccasin styling, these loafers feature a hand-sewn leather upper, calfskin lining, and a flexible rubber driving sole. Perfect for smart-casual wear.",
    features: [
      "Full-grain calfskin leather upper",
      "Hand-stitched detailing at apron toe",
      "Breathable, anti-microbial leather lining",
      "Cushioned memory foam arch support",
      "Split-rubber driving outsole for flexibility and grip",
    ],
  },
  {
    id: 16,
    name: "Gold Chronograph Watch",
    price: 450.0,
    oldPrice: 550.0,
    discountBadge: "Elite",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80",
    category: "Watches",
    brand: "Chronos",
    sizes: ["OS"],
    colors: ["Gold"],
    gender: "unisex",
    rating: 5.0,
    reviewsCount: 42,
    isNew: true,
    isBestSeller: true,
    description:
      "An elegant chronograph stopwatch, featuring a 24k gold-plated stainless steel bracelet, triple sub-dials, date display window, and luminescent hand markings for low light visibility.",
    features: [
      "24k gold-plated stainless steel body and links",
      "Precision Japanese solar chronograph movement",
      "Sapphire crystal crystal with anti-reflective coating",
      "Tachymeter bezel and date-day calendar sub-dials",
      "Secure fold-over safety deployment clasp",
    ],
  },
  {
    id: 17,
    name: "Canvas & Leather Duffle Bag",
    price: 129.99,
    oldPrice: null,
    discountBadge: null,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    category: "Bags",
    brand: "Apex",
    sizes: ["OS"],
    colors: ["Tan", "Olive", "Black"],
    gender: "unisex",
    rating: 4.6,
    reviewsCount: 135,
    isNew: false,
    isBestSeller: false,
    description:
      "The ideal weekend travel bag. Built from high-density heavy canvas and reinforced with thick full-grain leather straps. Includes a spacious main cabin, shoe compartment, and padded laptop slot.",
    features: [
      "20oz heavy-duty waxed water-resistant canvas",
      "Genuine full-grain crazy horse leather trim",
      "Dedicated side-entry shoe compartment",
      "Heavy-duty rustproof brass metal zippers",
      "Reinforced luggage trolley sleeve on the back",
    ],
  },
  {
    id: 18,
    name: "Classic Aviator Sunglasses",
    price: 89.99,
    oldPrice: null,
    discountBadge: null,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    category: "Sunglasses",
    brand: "Chronos",
    sizes: ["OS"],
    colors: ["Gold", "Silver", "Black"],
    gender: "unisex",
    rating: 4.7,
    reviewsCount: 104,
    isNew: false,
    isBestSeller: false,
    description:
      "The iconic pilot frame, re-engineered. Features a thin, lightweight metallic frame, adjustable silicone nose pads, and polarized green lenses that eliminate reflections and block 100% of blue light.",
    features: [
      "Ultralight titanium alloy frame",
      "Polarized G-15 impact-resistant glass lenses",
      "Anti-reflective interior coating",
      "Adjustable soft silicone nose cushions",
      "Sturdy double-bridge brow design",
    ],
  },
  {
    id: 19,
    name: "Performance Knit Sneakers",
    price: 139.99,
    oldPrice: null,
    discountBadge: "Hot",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&q=80",
    category: "Sneakers",
    brand: "Apex",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black", "Gray", "White"],
    gender: "men",
    rating: 4.5,
    reviewsCount: 89,
    isNew: false,
    isBestSeller: false,
    description:
      "Engineered for active lifestyles. Features a fully-knitted single-piece upper that hugs the foot like a sock, combined with a thick carbon-infused foam sole for explosive energy return.",
    features: [
      "Breathable engineered-mesh sockliner upper",
      "Carbon-fiber plate embedded in foam midsole",
      "High-durability carbon rubber outsole patches",
      "Heel cushioning pad for tendon support",
      "Machine washable on cold cycle",
    ],
  },
  {
    id: 20,
    name: "Premium Cotton Pique Polo",
    price: 49.99,
    oldPrice: 59.99,
    discountBadge: "Sale",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
    category: "T-Shirts",
    brand: "Aura",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Black", "Burgundy"],
    gender: "men",
    rating: 4.4,
    reviewsCount: 167,
    isNew: false,
    isBestSeller: false,
    description:
      "A tailored pique knit polo shirt made from fine combed Supima cotton. Designed with a structured collar that won't curl, a three-button placket, and side vents for classic movement.",
    features: [
      "100% premium long-staple Supima cotton",
      "Breathable double-pique textured knit",
      "Rib-knit collar and arm cuffs that resist stretching",
      "Classic 3-button placket with real mother-of-pearl buttons",
      "Tailored fit with athletic chest cut",
    ],
  },
];

let cart = JSON.parse(localStorage.getItem("sovann_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("sovann_wishlist")) || [];
let couponApplied = JSON.parse(localStorage.getItem("sovann_coupon")) || null;
let shopSortBy = "featured";
let activeStep = 1;

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showToast(message, type = "success") {
  let toast = document.getElementById("toast-box");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-box";
    toast.className =
      "toast-notification fixed bottom-6 right-6 z-[1000] px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 text-white transition-luxury";
    document.body.appendChild(toast);
  }

  if (type === "success") {
    toast.className =
      "toast-notification fixed bottom-6 right-6 z-[1000] px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 text-white bg-neutral-900 border border-neutral-800 transition-luxury show";
    toast.innerHTML = `
      <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span class="text-sm font-medium tracking-wide">${message}</span>
    `;
  } else {
    toast.className =
      "toast-notification fixed bottom-6 right-6 z-[1000] px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 text-white bg-red-900 border border-red-800 transition-luxury show";
    toast.innerHTML = `
      <svg class="w-5 h-5 text-red-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      <span class="text-sm font-medium tracking-wide">${message}</span>
    `;
  }

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

function updateGlobalCounters() {
  const cartCounters = document.querySelectorAll(".cart-badge-count");
  const wishlistCounters = document.querySelectorAll(".wishlist-badge-count");

  const totalCartQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCounters.forEach((el) => {
    el.textContent = totalCartQty;
    if (totalCartQty > 0) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  wishlistCounters.forEach((el) => {
    el.textContent = wishlist.length;
    if (wishlist.length > 0) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
}

function addToCart(
  productId,
  quantity = 1,
  size = null,
  color = null,
  bypassAlert = false,
) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const chosenSize =
    size || (product.sizes.length > 0 ? product.sizes[0] : "OS");
  const chosenColor =
    color || (product.colors.length > 0 ? product.colors[0] : "Default");

  const existingIndex = cart.findIndex(
    (item) =>
      item.id === productId &&
      item.size === chosenSize &&
      item.color === chosenColor,
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: chosenSize,
      color: chosenColor,
      quantity: quantity,
    });
  }

  localStorage.setItem("sovann_cart", JSON.stringify(cart));
  updateGlobalCounters();

  if (!bypassAlert) {
    showToast(
      `Added ${quantity}x ${product.name} (${chosenSize}, ${chosenColor}) to your cart!`,
      "success",
    );
  }
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = products.find((p) => p.id === productId);
  if (!product) return false;
  let added = false;

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed ${product.name} from Wishlist`, "success");
  } else {
    wishlist.push(productId);
    showToast(`Added ${product.name} to Wishlist`, "success");
    added = true;
  }

  localStorage.setItem("sovann_wishlist", JSON.stringify(wishlist));
  updateGlobalCounters();
  return added;
}

function renderProductsToGrid(items, targetGrid) {
  targetGrid.innerHTML = "";

  if (items.length === 0) {
    targetGrid.innerHTML = `<div class="col-span-full text-center text-gray-400 py-12">No products found.</div>`;
    return;
  }

  items.forEach((product) => {
    const isLoved = wishlist.includes(product.id);
    const starHTML = Array.from({ length: 5 }, (_, i) => {
      return i < Math.floor(product.rating)
        ? `<svg class="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`
        : `<svg class="w-4 h-4 text-gray-200 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.837-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>`;
    }).join("");

    const discountTag = product.discountBadge
      ? `<span class="absolute top-4 left-4 z-10 bg-neutral-900 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">${product.discountBadge}</span>`
      : "";

    const oldPriceHTML = product.oldPrice
      ? `<span class="text-sm line-through text-gray-400 font-normal">$${product.oldPrice.toFixed(2)}</span>`
      : "";

    const card = document.createElement("div");
    card.className =
      "group relative flex flex-col justify-between bg-white rounded-2xl p-3 border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden";
    card.innerHTML = `
      <div class="relative w-full aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden mb-4 hover-zoom">
        ${discountTag}
        <button class="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md text-neutral-400 hover:text-red-500 transition-luxury wishlist-toggle-btn" data-id="${product.id}">
          <svg class="w-5 h-5 ${isLoved ? "fill-red-500 text-red-500" : "fill-none"}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
        <a href="product.html?id=${product.id}" class="block w-full h-full">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        </a>
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button class="w-full py-2.5 bg-neutral-950 text-white rounded-full text-xs font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-luxury add-to-cart-quick-btn" data-id="${product.id}">
            Add to Cart
          </button>
        </div>
      </div>

      <div class="flex-grow flex flex-col justify-between px-1">
        <div>
          <span class="text-xs uppercase text-gray-400 tracking-wider font-semibold">${product.category}</span>
          <a href="product.html?id=${product.id}" class="block mt-1 text-sm font-semibold text-neutral-800 hover:text-yellow-600 transition-colors line-clamp-1">${product.name}</a>
          <div class="flex items-center gap-1 mt-1.5 mb-2">
            <div class="flex">${starHTML}</div>
            <span class="text-[10px] text-gray-400 font-medium">(${product.reviewsCount})</span>
          </div>
        </div>
        <div class="flex items-center gap-2 mt-auto">
          <span class="text-base font-bold text-neutral-900">$${product.price.toFixed(2)}</span>
          ${oldPriceHTML}
        </div>
      </div>
    `;

    targetGrid.appendChild(card);
  });

  targetGrid.querySelectorAll(".wishlist-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const pId = parseInt(btn.dataset.id);
      const isAdded = toggleWishlist(pId);
      const svg = btn.querySelector("svg");
      if (isAdded) {
        svg.classList.add("fill-red-500", "text-red-500");
      } else {
        svg.classList.remove("fill-red-500", "text-red-500");
      }
    });
  });

  targetGrid.querySelectorAll(".add-to-cart-quick-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const pId = parseInt(btn.dataset.id);
      addToCart(pId, 1);
    });
  });
}

function setupStickyHeader() {
  let lastScroll = 0;
  const header = document.getElementById("main-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add(
        "glass-effect",
        "shadow-sm",
        "border-b",
        "border-gray-100",
      );
      header.classList.remove("bg-white");
    } else {
      header.classList.remove(
        "glass-effect",
        "shadow-sm",
        "border-b",
        "border-gray-100",
      );
      header.classList.add("bg-white");
    }

    lastScroll = currentScroll;
  });
}

function setupMobileNav() {
  const burger = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-menu-drawer");
  const closeBtn = document.getElementById("close-mobile-menu");
  const overlay = document.getElementById("mobile-menu-overlay");

  if (burger && drawer) {
    burger.addEventListener("click", () => {
      drawer.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  const closeMenu = () => {
    if (drawer) drawer.classList.add("translate-x-full");
    if (overlay) overlay.classList.add("hidden");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
}

function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      btn.classList.remove("translate-y-20", "opacity-0");
      btn.classList.add("translate-y-0", "opacity-100");
    } else {
      btn.classList.add("translate-y-20", "opacity-0");
      btn.classList.remove("translate-y-0", "opacity-100");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupSearchBar() {
  const searchBtn = document.getElementById("search-trigger-btn");
  const searchClose = document.getElementById("close-search-btn");
  const searchOverlay = document.getElementById("search-overlay");
  const searchInput = document.getElementById("search-overlay-input");

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      searchOverlay.classList.remove("hidden", "opacity-0");
      searchOverlay.classList.add("flex", "opacity-100");
      if (searchInput) searchInput.focus();
    });
  }

  const closeSearch = () => {
    if (searchOverlay) {
      searchOverlay.classList.add("hidden", "opacity-0");
      searchOverlay.classList.remove("flex", "opacity-100");
    }
  };

  if (searchClose) searchClose.addEventListener("click", closeSearch);

  const searchForm = document.getElementById("search-overlay-form");
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
}

function setupNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput) return;

    const email = emailInput.value.trim();
    if (validateEmail(email)) {
      showToast("Thank you! You have subscribed to our newsletter.", "success");
      emailInput.value = "";
    } else {
      showToast("Please enter a valid email address.", "error");
    }
  });
}

function setupShopFilters() {
  const toggleBtn = document.getElementById("mobile-filter-toggle");
  const closeBtn = document.getElementById("close-filter-sidebar");
  const sidebar = document.getElementById("filter-sidebar");
  const overlay = document.getElementById("filter-sidebar-overlay");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.remove("-translate-x-full");
      if (overlay) overlay.classList.remove("hidden");
    });
  }

  const closeSidebar = () => {
    if (sidebar) sidebar.classList.add("-translate-x-full");
    if (overlay) overlay.classList.add("hidden");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  const searchInput = document.getElementById("shop-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeFilters.search = e.target.value.trim().toLowerCase();
      applyFiltersAndRender();
    });
  }

  const bindCheckboxes = (className, filterKey) => {
    document.querySelectorAll(`.${className}`).forEach((chk) => {
      chk.addEventListener("change", () => {
        if (chk.checked) {
          activeFilters[filterKey].push(chk.value);
        } else {
          activeFilters[filterKey] = activeFilters[filterKey].filter(
            (val) => val !== chk.value,
          );
        }
        applyFiltersAndRender();
      });
    });
  };

  bindCheckboxes("category-filter-checkbox", "categories");
  bindCheckboxes("brand-filter-checkbox", "brands");
  bindCheckboxes("size-filter-checkbox", "sizes");
  bindCheckboxes("color-filter-checkbox", "colors");
  bindCheckboxes("gender-filter-checkbox", "genders");

  const priceSlider = document.getElementById("price-range-slider");
  const priceLabel = document.getElementById("price-range-max-label");
  if (priceSlider && priceLabel) {
    priceSlider.addEventListener("input", (e) => {
      activeFilters.priceMax = parseFloat(e.target.value);
      priceLabel.textContent = `$${activeFilters.priceMax.toFixed(2)}`;
      applyFiltersAndRender();
    });
  }

  document.querySelectorAll(".rating-filter-radio").forEach((radio) => {
    radio.addEventListener("change", () => {
      activeFilters.ratingMin = parseFloat(radio.value);
      applyFiltersAndRender();
    });
  });

  const clearBtn = document.getElementById("clear-filters-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      activeFilters = {
        search: "",
        categories: [],
        brands: [],
        sizes: [],
        colors: [],
        genders: [],
        priceMax: 500,
        ratingMin: 0,
      };

      if (searchInput) searchInput.value = "";
      document
        .querySelectorAll(
          ".category-filter-checkbox, .brand-filter-checkbox, .size-filter-checkbox, .color-filter-checkbox, .gender-filter-checkbox",
        )
        .forEach((chk) => (chk.checked = false));
      if (priceSlider) {
        priceSlider.value = 500;
        priceLabel.textContent = `$500.00`;
      }
      document.querySelectorAll(".rating-filter-radio").forEach((radio) => {
        if (radio.value === "0") radio.checked = true;
      });

      applyFiltersAndRender();
    });
  }

  const sortSelect = document.getElementById("shop-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      shopSortBy = e.target.value;
      applyFiltersAndRender();
    });
  }
}

function setupCheckoutWizard() {
  const steps = [1, 2, 3, 4];
  const form = document.getElementById("checkout-wizard-form");
  if (!form) return;

  const prevBtn = document.getElementById("checkout-prev-btn");
  const nextBtn = document.getElementById("checkout-next-btn");
  const progressLine = document.getElementById("checkout-progress-line");

  const updateWizardUI = () => {
    steps.forEach((s) => {
      const panel = document.getElementById(`step-panel-${s}`);
      const bubble = document.getElementById(`step-bubble-${s}`);
      const text = document.getElementById(`step-text-${s}`);

      if (panel) {
        if (s === activeStep) {
          panel.classList.remove("hidden");
        } else {
          panel.classList.add("hidden");
        }
      }

      if (bubble) {
        if (s < activeStep) {
          bubble.className =
            "w-9 h-9 rounded-full bg-neutral-950 text-white flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300";
          bubble.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`;
        } else if (s === activeStep) {
          bubble.className =
            "w-9 h-9 rounded-full bg-neutral-900 border-2 border-yellow-500 text-white flex items-center justify-center font-bold text-sm z-10 pulse-gold transition-colors duration-300";
          bubble.innerHTML = s;
        } else {
          bubble.className =
            "w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300";
          bubble.innerHTML = s;
        }
      }

      if (text) {
        if (s === activeStep) {
          text.className =
            "text-xs font-bold text-neutral-900 tracking-wide mt-1.5 transition-colors duration-300";
        } else {
          text.className =
            "text-xs font-medium text-gray-400 tracking-wide mt-1.5 transition-colors duration-300";
        }
      }
    });

    if (progressLine) {
      const percent = ((activeStep - 1) / (steps.length - 1)) * 100;
      progressLine.style.width = `${percent}%`;
    }

    if (activeStep === 1) {
      if (prevBtn) prevBtn.classList.add("hidden");
    } else {
      if (prevBtn) prevBtn.classList.remove("hidden");
    }

    if (nextBtn) {
      if (activeStep === steps.length) {
        nextBtn.textContent = "Place Order";
      } else {
        nextBtn.textContent = "Continue";
      }
    }

    if (activeStep === 4) {
      fillStep4ReviewInfo();
    }
  };

  const validateStep = (stepNumber) => {
    const currentPanel = document.getElementById(`step-panel-${stepNumber}`);
    if (!currentPanel) return true;

    const inputs = currentPanel.querySelectorAll("input, select, textarea");

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
      }
    });

    return isValid;
  };

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (activeStep < steps.length) {
      if (validateStep(activeStep)) {
        activeStep++;
        updateWizardUI();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (validateStep(activeStep)) {
        submitFinalSimulatedOrder();
      }
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (activeStep > 1) {
        activeStep--;
        updateWizardUI();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  updateWizardUI();
}

function initPageSpecifics() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf("/") + 1);

  if (page === "index.html" || page === "") {
    initHomePage();
  } else if (page === "shop.html") {
    initShopPage();
  } else if (page === "product.html") {
    initProductDetailsPage();
  } else if (page === "cart.html") {
    initCartPage();
  } else if (page === "checkout.html") {
    initCheckoutPage();
  } else if (page === "faq.html") {
    initFAQPage();
  }
}

function initHomePage() {
  const newArrivalsGrid = document.getElementById("new-arrivals-grid");
  const bestSellersGrid = document.getElementById("best-sellers-grid");

  if (newArrivalsGrid) {
    const newItems = products.filter((p) => p.isNew).slice(0, 4);
    renderProductsToGrid(newItems, newArrivalsGrid);
  }

  if (bestSellersGrid) {
    const bestItems = products.filter((p) => p.isBestSeller).slice(0, 4);
    renderProductsToGrid(bestItems, bestSellersGrid);
  }
}

function initShopPage() {
  const shopGrid = document.getElementById("shop-products-grid");
  if (!shopGrid) return;

  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("search");
  const catParam = urlParams.get("category");
  const genderParam = urlParams.get("gender");

  if (searchParam) {
    activeFilters.search = decodeURIComponent(searchParam);
    const searchBar = document.getElementById("shop-search-input");
    if (searchBar) searchBar.value = activeFilters.search;
  }
  if (catParam) {
    activeFilters.categories.push(decodeURIComponent(catParam));
    const chk = document.querySelector(
      `.category-filter-checkbox[value="${catParam}"]`,
    );
    if (chk) chk.checked = true;
  }
  if (genderParam) {
    activeFilters.genders.push(decodeURIComponent(genderParam));
    const chk = document.querySelector(
      `.gender-filter-checkbox[value="${genderParam}"]`,
    );
    if (chk) chk.checked = true;
  }

  setupShopFilters();
  applyFiltersAndRender();
}

function applyFiltersAndRender() {
  let filtered = products.filter((product) => {
    if (
      activeFilters.search &&
      !product.name.toLowerCase().includes(activeFilters.search) &&
      !product.description.toLowerCase().includes(activeFilters.search)
    ) {
      return false;
    }

    if (
      activeFilters.categories.length > 0 &&
      !activeFilters.categories.includes(product.category)
    ) {
      return false;
    }

    if (
      activeFilters.brands.length > 0 &&
      !activeFilters.brands.includes(product.brand)
    ) {
      return false;
    }

    if (
      activeFilters.sizes.length > 0 &&
      !product.sizes.some((s) => activeFilters.sizes.includes(s))
    ) {
      return false;
    }

    if (
      activeFilters.colors.length > 0 &&
      !product.colors.some((c) => activeFilters.colors.includes(c))
    ) {
      return false;
    }

    if (
      activeFilters.genders.length > 0 &&
      !activeFilters.genders.includes(product.gender)
    ) {
      return false;
    }

    if (product.price > activeFilters.priceMax) {
      return false;
    }

    if (product.rating < activeFilters.ratingMin) {
      return false;
    }

    return true;
  });

  if (shopSortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (shopSortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (shopSortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (shopSortBy === "newest") {
    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  const countLabel = document.getElementById("shop-product-count");
  if (countLabel) {
    countLabel.textContent = `${filtered.length} Product${filtered.length === 1 ? "" : "s"} Found`;
  }

  const shopGrid = document.getElementById("shop-products-grid");
  renderProductsToGrid(filtered, shopGrid);
}

function initProductDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const pId = parseInt(urlParams.get("id")) || 1;
  const product = products.find((p) => p.id === pId) || products[0];

  renderProductDetails(product);
  renderRelatedProducts(product);
}

function renderProductDetails(product) {
  let selectedColor = product.colors[0];
  let selectedSize = product.sizes[0];
  document.title = `${product.name} | SOVANN Luxury Store`;

  const breadcrumb = document.getElementById("product-breadcrumb-name");
  if (breadcrumb) breadcrumb.textContent = product.name;

  const mainImg = document.getElementById("detail-main-img");
  const thumbGrid = document.getElementById("detail-thumb-grid");

  if (mainImg) mainImg.src = product.image;
  if (thumbGrid) {
    thumbGrid.innerHTML = "";

    const alternateImages = [
      product.image,

      product.image + "&fit=crop&crop=entropy",
      product.image + "&fit=crop&fp-y=0.1",
      product.image + "&fit=crop&fp-x=0.8",
    ];

    alternateImages.forEach((imgUrl, idx) => {
      const btn = document.createElement("button");
      btn.className = `aspect-square bg-gray-50 rounded-xl overflow-hidden border-2 ${idx === 0 ? "border-neutral-900" : "border-transparent"} hover:border-neutral-900 transition-all`;
      btn.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover" alt="Thumb ${idx + 1}">`;
      btn.addEventListener("click", () => {
        if (mainImg) {
          mainImg.classList.add("opacity-0");
          setTimeout(() => {
            mainImg.src = imgUrl;
            mainImg.classList.remove("opacity-0");
          }, 150);
        }
        thumbGrid
          .querySelectorAll("button")
          .forEach((b) =>
            b.classList.replace("border-neutral-900", "border-transparent"),
          );
        btn.classList.replace("border-transparent", "border-neutral-900");
      });
      thumbGrid.appendChild(btn);
    });
  }

  const badgeContainer = document.getElementById("detail-badge-container");
  if (badgeContainer) {
    if (product.discountBadge) {
      badgeContainer.innerHTML = `<span class="bg-neutral-950 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">${product.discountBadge}</span>`;
    } else if (product.isNew) {
      badgeContainer.innerHTML = `<span class="bg-neutral-950 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">New Arrival</span>`;
    } else {
      badgeContainer.innerHTML = "";
    }
  }

  const titleEl = document.getElementById("detail-title");
  if (titleEl) titleEl.textContent = product.name;

  const ratingStars = document.getElementById("detail-rating-stars");
  if (ratingStars) {
    ratingStars.innerHTML = Array.from({ length: 5 }, (_, i) => {
      return i < Math.floor(product.rating)
        ? `<svg class="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`
        : `<svg class="w-4 h-4 text-gray-200 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.837-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>`;
    }).join("");
  }

  const reviewsCountEl = document.getElementById("detail-reviews-count");
  if (reviewsCountEl)
    reviewsCountEl.textContent = `(${product.reviewsCount} customer reviews)`;

  const priceEl = document.getElementById("detail-price");
  if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;

  const oldPriceEl = document.getElementById("detail-old-price");
  if (oldPriceEl) {
    if (product.oldPrice) {
      oldPriceEl.textContent = `$${product.oldPrice.toFixed(2)}`;
      oldPriceEl.classList.remove("hidden");
    } else {
      oldPriceEl.classList.add("hidden");
    }
  }

  const descEl = document.getElementById("detail-description");
  if (descEl) descEl.textContent = product.description;

  const featuresEl = document.getElementById("detail-features");
  if (featuresEl) {
    featuresEl.innerHTML = product.features
      .map(
        (f) => `
      <li class="flex items-start gap-2.5">
        <svg class="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        <span class="text-sm text-neutral-600 leading-relaxed">${f}</span>
      </li>
    `,
      )
      .join("");
  }

  const colorContainer = document.getElementById("detail-color-selector");

  if (colorContainer) {
    colorContainer.innerHTML = "";
    product.colors.forEach((color, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all ${idx === 0 ? "bg-neutral-900 border-neutral-900 text-white" : "border-gray-200 text-neutral-800 hover:border-neutral-900"}`;
      btn.textContent = color;
      btn.addEventListener("click", () => {
        selectedColor = color;
        colorContainer
          .querySelectorAll("button")
          .forEach(
            (b) =>
              (b.className =
                "px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-gray-200 text-neutral-800 hover:border-neutral-900 transition-all"),
          );
        btn.className =
          "px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border bg-neutral-900 border-neutral-900 text-white transition-all";
      });
      colorContainer.appendChild(btn);
    });
  }

  const sizeContainer = document.getElementById("detail-size-selector");

  if (sizeContainer) {
    sizeContainer.innerHTML = "";
    product.sizes.forEach((size, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `w-11 h-11 flex items-center justify-center text-xs font-semibold rounded-full border transition-all ${idx === 0 ? "bg-neutral-900 border-neutral-900 text-white" : "border-gray-200 text-neutral-800 hover:border-neutral-900"}`;
      btn.textContent = size;
      btn.addEventListener("click", () => {
        selectedSize = size;
        sizeContainer
          .querySelectorAll("button")
          .forEach(
            (b) =>
              (b.className =
                "w-11 h-11 flex items-center justify-center text-xs font-semibold rounded-full border border-gray-200 text-neutral-800 hover:border-neutral-900 transition-all"),
          );
        btn.className =
          "w-11 h-11 flex items-center justify-center text-xs font-semibold rounded-full border bg-neutral-900 border-neutral-900 text-white transition-all";
      });
      sizeContainer.appendChild(btn);
    });
  }

  const qtyInput = document.getElementById("detail-qty-input");
  const qtyMinus = document.getElementById("detail-qty-minus");
  const qtyPlus = document.getElementById("detail-qty-plus");

  if (qtyInput && qtyMinus && qtyPlus) {
    qtyMinus.addEventListener("click", () => {
      let currentVal = parseInt(qtyInput.value);
      if (currentVal > 1) {
        qtyInput.value = currentVal - 1;
      }
    });

    qtyPlus.addEventListener("click", () => {
      let currentVal = parseInt(qtyInput.value);
      qtyInput.value = currentVal + 1;
    });
  }

  const addToCartBtn = document.getElementById("detail-add-to-cart-btn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const qty = parseInt(qtyInput ? qtyInput.value : 1);
      addToCart(product.id, qty, selectedSize, selectedColor);
    });
  }

  const wishlistBtn = document.getElementById("detail-wishlist-btn");
  if (wishlistBtn) {
    const isLoved = wishlist.includes(product.id);
    const svg = wishlistBtn.querySelector("svg");
    if (isLoved && svg) svg.classList.add("fill-red-500", "text-red-500");

    wishlistBtn.addEventListener("click", () => {
      const added = toggleWishlist(product.id);
      if (added) {
        if (svg) svg.classList.add("fill-red-500", "text-red-500");
      } else {
        if (svg) svg.classList.remove("fill-red-500", "text-red-500");
      }
    });
  }

  const tabDescBtn = document.getElementById("tab-desc-btn");
  const tabReviewBtn = document.getElementById("tab-reviews-btn");
  const paneDesc = document.getElementById("pane-description");
  const paneReviews = document.getElementById("pane-reviews");

  if (tabDescBtn && tabReviewBtn && paneDesc && paneReviews) {
    tabDescBtn.addEventListener("click", () => {
      paneDesc.classList.remove("hidden");
      paneReviews.classList.add("hidden");
      tabDescBtn.classList.add("border-neutral-900", "text-neutral-900");
      tabDescBtn.classList.remove("border-transparent", "text-gray-400");
      tabReviewBtn.classList.remove("border-neutral-900", "text-neutral-900");
      tabReviewBtn.classList.add("border-transparent", "text-gray-400");
    });

    tabReviewBtn.addEventListener("click", () => {
      paneDesc.classList.add("hidden");
      paneReviews.classList.remove("hidden");
      tabReviewBtn.classList.add("border-neutral-900", "text-neutral-900");
      tabReviewBtn.classList.remove("border-transparent", "text-gray-400");
      tabDescBtn.classList.remove("border-neutral-900", "text-neutral-900");
      tabDescBtn.classList.add("border-transparent", "text-gray-400");
    });
  }

  const reviewForm = document.getElementById("submit-review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const ratingVal = reviewForm.querySelector('select[name="rating"]').value;
      const reviewText = reviewForm
        .querySelector('textarea[name="review"]')
        .value.trim();
      const reviewerName = reviewForm
        .querySelector('input[name="name"]')
        .value.trim();

      if (reviewText && reviewerName) {
        const reviewsContainer = document.getElementById(
          "reviews-list-container",
        );
        if (reviewsContainer) {
          const dateStr = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          const newReviewEl = document.createElement("div");
          newReviewEl.className =
            "border-b border-gray-100 pb-6 animate-fade-in-up";
          newReviewEl.innerHTML = `
            <div class="flex justify-between items-start mb-2">
              <div>
                <h4 class="text-sm font-bold text-neutral-800">${reviewerName}</h4>
                <p class="text-[10px] text-gray-400 mt-0.5">${dateStr}</p>
              </div>
              <div class="flex text-yellow-500">
                ${Array.from({ length: 5 }, (_, i) => (i < ratingVal ? `<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>` : `<svg class="w-3.5 h-3.5 text-gray-200 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.837-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>`)).join("")}
              </div>
            </div>
            <p class="text-sm text-neutral-600 leading-relaxed">${reviewText}</p>
          `;
          reviewsContainer.insertBefore(
            newReviewEl,
            reviewsContainer.firstChild,
          );
          showToast("Review submitted successfully! (Simulated)", "success");
          reviewForm.reset();

          const countNum = parseInt(product.reviewsCount) + 1;
          if (reviewsCountEl)
            reviewsCountEl.textContent = `(${countNum} customer reviews)`;
        }
      }
    });
  }
}

function renderRelatedProducts(product) {
  const relatedGrid = document.getElementById("related-products-grid");
  if (!relatedGrid) return;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  if (related.length < 4) {
    const additional = products
      .filter(
        (p) =>
          p.gender === product.gender &&
          p.id !== product.id &&
          !related.some((r) => r.id === p.id),
      )
      .slice(0, 4 - related.length);
    related.push(...additional);
  }

  renderProductsToGrid(related, relatedGrid);
}

function initCartPage() {
  renderCartItems();

  const couponForm = document.getElementById("cart-coupon-form");
  if (couponForm) {
    couponForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const codeInput = couponForm.querySelector('input[name="coupon"]');
      if (!codeInput) return;

      const code = codeInput.value.trim().toUpperCase();
      if (code === "SOVANN20" || code === "PROJECT20") {
        couponApplied = { code: code, discountPercent: 20 };
        localStorage.setItem("sovann_coupon", JSON.stringify(couponApplied));
        showToast(
          "Coupon Applied! 20% discount has been subtracted.",
          "success",
        );
        renderCartItems();
      } else {
        showToast(
          "Invalid coupon code. Try 'SOVANN20' or 'PROJECT20'.",
          "error",
        );
      }
    });
  }

  const removeCouponBtn = document.getElementById("remove-coupon-btn");
  if (removeCouponBtn) {
    removeCouponBtn.addEventListener("click", () => {
      couponApplied = null;
      localStorage.removeItem("sovann_coupon");
      showToast("Coupon removed.", "success");
      renderCartItems();
    });
  }
}

function renderCartItems() {
  let discount = 0;
  const tableBody = document.getElementById("cart-table-body");
  const emptyState = document.getElementById("cart-empty-state");
  const cartContent = document.getElementById("cart-content-wrapper");

  if (!tableBody) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
    if (cartContent) cartContent.classList.add("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  if (cartContent) cartContent.classList.remove("hidden");

  tableBody.innerHTML = "";
  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.className =
      "border-b border-gray-100 hover:bg-neutral-50/50 transition-colors";
    row.innerHTML = `
      <td class="py-6 pr-4">
        <div class="flex items-center gap-4">
          <div class="w-20 aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
          </div>
          <div>
            <a href="product.html?id=${item.id}" class="text-sm font-semibold text-neutral-800 hover:text-yellow-600 transition-colors line-clamp-1">${item.name}</a>
            <div class="flex gap-3 text-xs text-gray-400 mt-1">
              <span>Size: <strong class="text-neutral-700">${item.size}</strong></span>
              <span>Color: <strong class="text-neutral-700">${item.color}</strong></span>
            </div>
          </div>
        </div>
      </td>
      <td class="py-6 px-4 text-sm font-semibold text-neutral-800">$${item.price.toFixed(2)}</td>
      <td class="py-6 px-4">
        <div class="flex items-center border border-gray-200 rounded-full w-24 px-2 py-1 justify-between">
          <button class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-neutral-800 transition-colors qty-minus-btn" data-index="${index}">-</button>
          <span class="text-xs font-semibold text-neutral-800">${item.quantity}</span>
          <button class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-neutral-800 transition-colors qty-plus-btn" data-index="${index}">+</button>
        </div>
      </td>
      <td class="py-6 px-4 text-sm font-bold text-neutral-800">$${(item.price * item.quantity).toFixed(2)}</td>
      <td class="py-6 pl-4 text-right">
        <button class="text-gray-400 hover:text-red-500 transition-colors remove-item-btn" data-index="${index}">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 150 ? 0 : 15;

  const couponContainer = document.getElementById("cart-coupon-status-box");
  const couponCodeText = document.getElementById("cart-coupon-code-text");
  const discountAmountText = document.getElementById("cart-discount-amount");

  if (couponApplied) {
    discount = subtotal * (couponApplied.discountPercent / 100);
    if (couponContainer) couponContainer.classList.remove("hidden");
    if (couponCodeText)
      couponCodeText.textContent = `${couponApplied.code} (${couponApplied.discountPercent}%)`;
    if (discountAmountText)
      discountAmountText.textContent = `-$${discount.toFixed(2)}`;
  } else {
    if (couponContainer) couponContainer.classList.add("hidden");
  }

  const tax = (subtotal - discount) * 0.08;
  const grandTotal = subtotal + shipping - discount + tax;

  const subtotalEl = document.getElementById("cart-subtotal");
  const shippingEl = document.getElementById("cart-shipping");
  const taxEl = document.getElementById("cart-tax");
  const grandTotalEl = document.getElementById("cart-grand-total");

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl)
    shippingEl.textContent =
      shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;

  tableBody.querySelectorAll(".qty-minus-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (cart[idx].quantity > 1) {
        cart[idx].quantity--;
        saveCartAndReRender();
      }
    });
  });

  tableBody.querySelectorAll(".qty-plus-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      cart[idx].quantity++;
      saveCartAndReRender();
    });
  });

  tableBody.querySelectorAll(".remove-item-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      const name = cart[idx].name;
      cart.splice(idx, 1);
      showToast(`Removed ${name} from your cart.`, "success");
      saveCartAndReRender();
    });
  });
}

function saveCartAndReRender() {
  localStorage.setItem("sovann_cart", JSON.stringify(cart));
  updateGlobalCounters();
  renderCartItems();
}

function initCheckoutPage() {
  if (cart.length === 0) {
    showToast("Your cart is empty. Redirecting to shop...", "error");
    setTimeout(() => {
      window.location.href = "shop.html";
    }, 2000);
    return;
  }

  renderCheckoutOrderReview();
  setupCheckoutWizard();
}

function renderCheckoutOrderReview() {
  let discount = 0;
  const listEl = document.getElementById("checkout-items-list");
  if (!listEl) return;

  listEl.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className =
      "flex items-center gap-3 py-3 border-b border-gray-100 last:border-0";
    div.innerHTML = `
      <div class="w-12 aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
      </div>
      <div class="flex-grow">
        <h4 class="text-xs font-semibold text-neutral-800 line-clamp-1">${item.name}</h4>
        <div class="text-[10px] text-gray-400 mt-0.5">Size: ${item.size} | Qty: ${item.quantity}</div>
      </div>
      <span class="text-xs font-bold text-neutral-800">$${(item.price * item.quantity).toFixed(2)}</span>
    `;
    listEl.appendChild(div);
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 150 ? 0 : 15;

  if (couponApplied) {
    discount = subtotal * (couponApplied.discountPercent / 100);
  }
  const tax = (subtotal - discount) * 0.08;
  const grandTotal = subtotal + shipping - discount + tax;

  const subtotalEl = document.getElementById("chk-subtotal");
  const shippingEl = document.getElementById("chk-shipping");
  const discountEl = document.getElementById("chk-discount");
  const taxEl = document.getElementById("chk-tax");
  const grandTotalEl = document.getElementById("chk-grand-total");

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl)
    shippingEl.textContent =
      shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
  if (discountEl)
    discountEl.textContent =
      discount > 0 ? `-$${discount.toFixed(2)}` : "$0.00";
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

function fillStep4ReviewInfo() {
  let details = "Ending in ****";
  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  };

  const fullName = `${getVal("first-name")} ${getVal("last-name")}`;
  const address = `${getVal("street-address")}, ${getVal("city")}, ${getVal("state")} ${getVal("zip-code")}`;
  const paymentType =
    document.querySelector('input[name="payment-method"]:checked')?.value ||
    "Credit Card";

  const revInfoEl = document.getElementById("review-shipping-info");
  if (revInfoEl) {
    revInfoEl.innerHTML = `
      <p class="text-sm font-semibold text-neutral-800">${fullName}</p>
      <p class="text-xs text-neutral-600 mt-1">${address}</p>
      <p class="text-xs text-neutral-600">${getVal("phone-number")} | ${getVal("email-address")}</p>
    `;
  }

  const revPayEl = document.getElementById("review-payment-info");
  if (revPayEl) {
    if (paymentType === "Credit Card") {
      const cardNum = getVal("card-number");
      if (cardNum.length >= 4) {
        details = `Card ending in **** ${cardNum.slice(-4)}`;
      } else {
        details = "Credit Card";
      }
    } else {
      details = "PayPal Account";
    }
    revPayEl.innerHTML = `
      <p class="text-sm font-semibold text-neutral-800">${paymentType}</p>
      <p class="text-xs text-neutral-600 mt-1">${details}</p>
    `;
  }
}

function submitFinalSimulatedOrder() {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.classList.remove("fade-out");
  }

  setTimeout(() => {
    cart = [];
    couponApplied = null;
    localStorage.removeItem("sovann_cart");
    localStorage.removeItem("sovann_coupon");
    updateGlobalCounters();

    if (loader) loader.classList.add("fade-out");

    const mainSection = document.getElementById("checkout-wizard-section");
    if (mainSection) {
      const orderNum = Math.floor(Math.random() * 90000000) + 10000000;
      mainSection.innerHTML = `
        <div class="max-w-xl mx-auto text-center py-16 px-6 bg-white border border-gray-100 rounded-3xl shadow-xl animate-fade-in-up">
          <div class="w-20 h-20 bg-neutral-900 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 pulse-gold">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span class="text-xs uppercase font-bold tracking-widest text-yellow-600">Order Confirmed</span>
          <h1 class="text-3xl font-serif-elegant font-bold mt-2 mb-4 text-neutral-900">Thank you for your order!</h1>
          <p class="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto mb-6">Your order has been received and is being processed. A confirmation email with details was sent to you.</p>

          <div class="bg-neutral-50 rounded-2xl p-4 inline-block mb-8 text-left w-full border border-neutral-100">
            <div class="flex justify-between py-1 text-xs border-b border-gray-200"><span class="text-gray-400 font-medium">Order Number:</span><strong class="text-neutral-800 font-bold">#${orderNum}</strong></div>
            <div class="flex justify-between py-1 text-xs border-b border-gray-200 mt-2"><span class="text-gray-400 font-medium">Estimated Delivery:</span><strong class="text-neutral-800 font-bold">3 - 5 Business Days</strong></div>
            <div class="flex justify-between py-1 text-xs mt-2"><span class="text-gray-400 font-medium">Status:</span><span class="text-green-600 font-bold">Processing</span></div>
          </div>

          <div class="flex gap-4 justify-center">
            <a href="index.html" class="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-luxury">Back to Home</a>
            <a href="shop.html" class="px-6 py-3 bg-neutral-100 text-neutral-800 rounded-full text-xs font-semibold tracking-wide uppercase hover:bg-neutral-200 transition-luxury">Continue Shopping</a>
          </div>
        </div>
      `;
    }
  }, 1500);
}

function initFAQPage() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isActive = header.classList.contains("active");

      headers.forEach((h) => {
        if (h !== header && h.classList.contains("active")) {
          h.classList.remove("active");
          h.nextElementSibling.style.maxHeight = null;
        }
      });

      if (isActive) {
        header.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        header.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  const searchInput = document.getElementById("faq-search-input");
  const faqItems = document.querySelectorAll(".faq-item");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      faqItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 400);
  }

  updateGlobalCounters();
  setupStickyHeader();
  setupMobileNav();
  setupBackToTop();
  setupSearchBar();
  setupNewsletter();

  initPageSpecifics();
});

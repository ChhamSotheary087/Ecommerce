const fs = require('fs');

const updateHtml = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    let parts = content.split('<article class="product-card">');
    let newContent = parts[0];
    
    for (let i = 1; i < parts.length; i++) {
        let part = parts[i];
        let endIdx = part.indexOf('</article>');
        let cardContent = part.substring(0, endIdx);
        let remainder = part.substring(endIdx);
        
        let badgeMatch = cardContent.match(/<span class="badge-[^"]+"[^>]*>.*?<\/span>/);
        let badgeHtml = badgeMatch ? badgeMatch[0] : '';
        
        let imgMatch = cardContent.match(/<img src="([^"]+)" alt="([^"]+)">/);
        let imgSrc = imgMatch ? imgMatch[1] : '';
        let imgAlt = imgMatch ? imgMatch[2] : '';
        
        let catMatch = cardContent.match(/<span class="product-category">([^<]+)<\/span>/);
        let category = catMatch ? catMatch[1] : '';
        
        let titleMatch = cardContent.match(/<h3 class="product-title"><a href="[^"]+">([^<]+)<\/a><\/h3>/);
        let title = titleMatch ? titleMatch[1] : '';
        let titleHrefMatch = cardContent.match(/<h3 class="product-title"><a href="([^"]+)">/);
        let titleHref = titleHrefMatch ? titleHrefMatch[1] : '#';
        
        let priceMatch = cardContent.match(/<span class="price">([^<]+)<\/span>/);
        let price = priceMatch ? priceMatch[1] : '';
        
        let oldPriceMatch = cardContent.match(/<span class="old-price">([^<]+)<\/span>/);
        let oldPriceHtml = oldPriceMatch ? `<span class="old-price">${oldPriceMatch[1]}</span>` : '';
        
        let newCard = `
          <div class="product-img">
            ${badgeHtml}
            <button class="action-btn-wishlist" title="Add to Wishlist"><i class="fa-regular fa-heart"></i></button>
            <img src="${imgSrc}" alt="${imgAlt}">
          </div>
          <div class="product-info">
            <h3 class="product-title"><a href="${titleHref}">${title}</a></h3>
            <span class="product-category">${category}</span>
            <div class="product-price-row" style="margin-top: 0; justify-content: flex-start; margin-bottom: 0.5rem;">
              <div>
                <span class="price" style="color: var(--success);">${price}</span>
                ${oldPriceHtml}
              </div>
            </div>
            <div class="product-rating" style="margin-bottom: 0.5rem;">
              <i class="fa-solid fa-star" style="color: var(--warning);"></i><i class="fa-solid fa-star" style="color: var(--warning);"></i><i class="fa-solid fa-star" style="color: var(--warning);"></i><i class="fa-solid fa-star" style="color: var(--warning);"></i><i class="fa-solid fa-star-half-stroke" style="color: var(--warning);"></i>
              <span style="font-size: 0.75rem; color: var(--text-muted);">(4.5/5)</span>
            </div>
            <p class="product-desc">Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers and professionals alike.</p>
            <div class="product-meta">
              <span class="meta-shipping"><i class="fa-solid fa-truck"></i> Free Shipping</span>
              <span class="meta-stock"><i class="fa-solid fa-clock"></i> In Stock</span>
            </div>
            <div class="product-buttons">
              <button class="btn-add-text">Add to Cart</button>
              <button class="btn-quick-view">Quick View</button>
            </div>
          </div>
        `;
        
        newContent += '<article class="product-card">' + newCard + remainder;
    }
    
    fs.writeFileSync(file, newContent, 'utf8');
};

updateHtml('c:/PROJECT-NU/ecommerce-store/index.html');
updateHtml('c:/PROJECT-NU/ecommerce-store/shop.html');

let cssFile = 'c:/PROJECT-NU/ecommerce-store/css/style.css';
let cssContent = fs.readFileSync(cssFile, 'utf8');

let newCss = `
/* New Card Styles */
.action-btn-wishlist {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  color: var(--text-muted);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  z-index: 2;
  font-size: 0.8rem;
  border: none;
  cursor: pointer;
}
.action-btn-wishlist:hover {
  color: var(--primary-color);
}
.product-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  line-height: 1.4;
  flex-grow: 1;
}
.product-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  font-weight: 600;
}
.product-meta .meta-shipping {
  color: var(--text-muted);
}
.product-meta .meta-stock {
  color: var(--primary-color);
}
.product-buttons {
  display: flex;
  gap: 0.5rem;
}
.btn-add-text {
  flex: 2;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--radius-full);
  padding: 0.6rem;
  font-weight: 600;
  font-size: 0.8rem;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}
.btn-add-text:hover {
  background-color: var(--primary-dark);
}
.btn-quick-view {
  flex: 1;
  background-color: var(--bg-main);
  color: var(--text-main);
  border-radius: var(--radius-full);
  padding: 0.6rem;
  font-weight: 600;
  font-size: 0.8rem;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}
.btn-quick-view:hover {
  background-color: #e2e8f0;
}
`;

fs.appendFileSync(cssFile, newCss, 'utf8');

// Also try to replace some paddings dynamically if needed
cssContent = fs.readFileSync(cssFile, 'utf8');
cssContent = cssContent.replace(
  /\.product-info \{[\s\S]*?padding: 1\.5rem;/, 
  '.product-info {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;'
);
cssContent = cssContent.replace(
  /\.product-category \{[\s\S]*?margin-bottom: 0\.5rem;/, 
  '.product-category {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 0.75rem;\n  display: block;'
);
cssContent = cssContent.replace(
  /\.product-title \{[\s\S]*?margin-bottom: 0\.5rem;/, 
  '.product-title {\n  font-size: 1rem;\n  margin-bottom: 0.25rem;'
);

fs.writeFileSync(cssFile, cssContent, 'utf8');

console.log("Successfully updated all product cards.");

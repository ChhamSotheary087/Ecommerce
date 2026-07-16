const fs = require('fs');

const removeMeta = (file) => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove the product-meta div block completely
    content = content.replace(/[ \t]*<div class="product-meta">\s*<span class="meta-shipping"><i class="fa-solid fa-truck"><\/i> Free Shipping<\/span>\s*<span class="meta-stock"><i class="fa-solid fa-clock"><\/i> In Stock<\/span>\s*<\/div>\n?/g, '');
    
    // Fallback regex in case formatting changed slightly
    content = content.replace(/<div class="product-meta">[\s\S]*?<\/div>/g, '');
    
    fs.writeFileSync(file, content, 'utf8');
};

removeMeta('c:/PROJECT-NU/ecommerce-store/index.html');
removeMeta('c:/PROJECT-NU/ecommerce-store/shop.html');

console.log("Product meta removed successfully.");

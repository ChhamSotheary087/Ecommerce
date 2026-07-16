const fs = require('fs');

const validImages = [
  "1515886657613-9f3515b0c78f", 
  "1483985988355-763728e1935b", 
  "1485230405346-71acb9518d9c", 
  "1550614000-4b95d8828909", 
  "1529139574466-a30ab7308726", 
  "1445205170230-053b83016050", 
  "1489987707023-af7e9267ce20", 
  "1539082217036-26e100eb13e0", 
  "1512436991641-dc74eb4ba50c", 
  "1551028719-00167b16eac5"  
];

const fixImages = (file) => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    let imageIndex = 0;
    
    // Replace all Unsplash photo URLs inside img tags
    content = content.replace(/<img src="https:\/\/images\.unsplash\.com\/photo-[^"]+"([^>]*)>/g, (match, p1) => {
        const nextId = validImages[imageIndex % validImages.length];
        imageIndex++;
        return `<img src="https://images.unsplash.com/photo-${nextId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"${p1}>`;
    });
    
    fs.writeFileSync(file, content, 'utf8');
};

fixImages('c:/PROJECT-NU/ecommerce-store/index.html');
fixImages('c:/PROJECT-NU/ecommerce-store/shop.html');

console.log("Images fixed successfully.");

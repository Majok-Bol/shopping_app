const shoeProducts = [
  {
    category: "Running",
    description: "Lightweight running shoes with cushioned soles for maximum comfort.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    price: "$89.99",
    rating: "4.5/5",
    title: "Swift Run Pro"
  },
  {
    category: "Casual",
    description: "Classic canvas sneakers with vulcanized rubber soles.",
    image: "https://images.unsplash.com/photo-1579446650032-86effeeb3389?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJzfGVufDB8fDB8fHww",
    price: "$49.99",
    rating: "4.2/5",
    title: "Urban Walker"
  },
  {
    category: "Basketball",
    description: "High-top performance shoes with ankle support and responsive cushioning.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNuZWFrZXJzfGVufDB8fDB8fHww",
    price: "$119.99",
    rating: "4.7/5",
    title: "Jump Master 3000"
  },
  {
    category: "Hiking",
    description: "Waterproof hiking boots with rugged traction soles.",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxzaG9lfGVufDB8fDB8fHww",
    price: "$129.99",
    rating: "4.8/5",
    title: "Trail Blazer XT"
  },
  {
    category: "Dress",
    description: "Elegant leather oxfords with cushioned insoles.",
    image: "https://images.unsplash.com/photo-1585147877975-6acd0a929a46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTg4fHxzaG9lfGVufDB8fDB8fHww",
    price: "$99.99",
    rating: "4.3/5",
    title: "Executive Classic"
  },
  {
    category: "Running",
    description: "Breathable mesh running shoes with energy-return technology.",
    image: "https://images.unsplash.com/photo-1715693754047-4c0b56576495?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxzaG9lfGVufDB8fDB8fHww",
    price: "$79.99",
    rating: "4.4/5",
    title: "Air Flow Lite"
  },
  {
    category: "Sports",
    description: "Comfortable sport sandals with adjustable straps.",
    image: "https://images.unsplash.com/photo-1625875061556-7b794d9c4a4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTUyfHxzaG9lfGVufDB8fDB8fHww",
    price: "$39.99",
    rating: "4.1/5",
    title: "Summer Breeze"
  },
  {
    category: "Skateboarding",
    description: "Durable suede shoes with reinforced stitching for skateboarding.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNuZWFrZXJzfGVufDB8fDB8fHww",
    price: "$69.99",
    rating: "4.6/5",
    title: "Skate Pro II"
  },
  {
    category: "Trail Running",
    description: "Aggressive tread pattern for off-road running stability.",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNuZWFrZXJzfGVufDB8fDB8fHww",
    price: "$109.99",
    rating: "4.7/5",
    title: "Mountain Crusher"
  },
  {
    category: "Minimalist",
    description: "Barefoot-style shoes with zero-drop soles.",
    image: "https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHNuZWFrZXJzfGVufDB8fDB8fHww",
    price: "$74.99",
    rating: "4.0/5",
    title: "Natural Stride"
  },
  {
    category: "Work",
    description: "Steel-toe work boots with slip-resistant soles.",
    image: "https://images.unsplash.com/photo-1570464197285-9949814674a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2V8ZW58MHx8MHx8fDA%3D",
    price: "$139.99",
    rating: "4.5/5",
    title: "Tough Guard"
  },
  {
    category: "Fashion",
    description: "Trendy platform sneakers with bold color accents.",
    image: "https://images.unsplash.com/photo-1521774971864-62e842046145?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2V8ZW58MHx8MHx8fDA%3D",
    price: "$59.99",
    rating: "3.9/5",
    title: "Street Style Pro"
  }, {
    category: "Snow Boots",
    description: "Insulated winter boots with thermal lining.",
    image: "https://images.unsplash.com/photo-1612724271076-24c0a3bade29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxzaG9lfGVufDB8fDB8fHww",
    price: "$159.99",
    rating: "4.7/5",
    title: "Arctic Trekker"
  }
  ,
  {
    category: "Walking",
    description: "Orthopedic walking shoes with arch support.",
    image: "https://images.unsplash.com/photo-1633364670185-4256547c2659?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDMwfHxzaG9lfGVufDB8fDB8fHww",
    price: "$89.99",
    rating: "4.6/5",
    title: "Comfort Stride"
  },
  {
    category: "Running",
    description: "Ultra-light shoes built for explosive sprints.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2V8ZW58MHx8MHx8fDA%3D",
    price: "$84.99",
    rating: "4.6/5",
    title: "Sprint Pulse"
  },
  {
    category: "Cross Training",
    description: "Versatile shoes for gym workouts and HIIT training.",
    image: "https://images.unsplash.com/photo-1617606002806-94e279c22567?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNob2V8ZW58MHx8MHx8fDA%3D",
    price: "$94.99",
    rating: "4.5/5",
    title: "Flex Trainer"
  },
  {
    category: "Lifestyle",
    description: "Street-style canvas shoes for everyday wear.",
    image: "https://images.unsplash.com/photo-1533680937690-d59ab2543468?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHNob2V8ZW58MHx8MHx8fDA%3D",
    price: "$54.99",
    rating: "4.1/5",
    title: "Daily Drip"
  },
  {
          category: "Basketball",
        description: "Pro-level shoes offering bounce and grip on court.",
    image: "https://images.unsplash.com/photo-1715773150368-55945728385a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxzaG9lfGVufDB8fDB8fHww",
     price: "$129.00",
        rating: "4.9/5",
        title: "Court Dominator"
  },
  {
        category: "Outdoor",
        description: "Heavy-duty boots built for mountain terrain.",
    image: "https://images.unsplash.com/photo-1616663308968-58162d332720?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxzaG9lfGVufDB8fDB8fHww",
     price: "$134.49",
        rating: "4.8/5",
        title: "Ridge Climber"
  },
  {
         category: "Formal",
        description: "Hand-crafted leather dress shoes for formal occasions.",
    image: "https://images.unsplash.com/photo-1731132198530-e4b2dc51d511?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM0fHxzaG9lfGVufDB8fDB8fHww",
      price: "$109.99",
        rating: "4.2/5",
        title: "Gentleman's Pick"
  },
  {
    category: "Cross Training",
    description: "Versatile shoes for gym workouts and HIIT training.",
    image: "https://images.unsplash.com/photo-1662037131232-06b594df2d51?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxzaG9lfGVufDB8fDB8fHww",
    price: "$94.99",
    rating: "4.5/5",
    title: "Flex Trainer"
  },
  {
        category: "Performance Running",
        description: "Mesh runners with reactive cushioning technology.",
    image: "https://images.unsplash.com/photo-1715693754061-fa58592c2e7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc0fHxzaG9lfGVufDB8fDB8fHww",
        price: "$88.75",
        rating: "4.3/5",
        title: "AirMax Energy"
  },
  {
         category: "Sandals",
        description: "Quick-dry beach sandals with anti-slip sole.",
    image: "https://images.unsplash.com/photo-1651013691313-81b822df0044?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjAzfHxzaG9lfGVufDB8fDB8fHww",
        price: "$34.50",
        rating: "4.0/5",
        title: "Coastal Drift"
  },

];
console.log("Length: ", shoeProducts.length);
const productContainer = document.getElementById("product-container");
const searchInput=document.getElementById("searchInput");
const categoryFilter=document.getElementById("categoryFilter");
const categories=["All"];
for(let i=0;i<shoeProducts.length;i++){
  const category=shoeProducts[i].category;
  if(!categories.includes(category)){
    categories.push(category);
  }
}
categories.forEach((cat)=>{
  const option=document.createElement("option");
  option.value=cat;
  option.textContent=cat;
  categoryFilter.appendChild(option);
})

let products = "";
shoeProducts.forEach((product) => {
  products += `
            <div class="card">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <button class="add-to-cart">Add to Cart</button>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `;

});
productContainer.innerHTML = products;


const shoeProducts = [
  {
    category: "Running",
    description: "Lightweight running shoes with cushioned soles for maximum comfort.",
    image: "https://unsplash.com/photos/photo-of-gray-and-orange-new-balance-encap-shoes-on-floor-fUEP0djb1hA",
    price: "$89.99",
    rating: "4.5/5",
    title: "Swift Run Pro"
  },
  {
    category: "Casual",
    description: "Classic canvas sneakers with vulcanized rubber soles.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$49.99",
    rating: "4.2/5",
    title: "Urban Walker"
  },
  {
    category: "Basketball",
    description: "High-top performance shoes with ankle support and responsive cushioning.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhc2tldGJhbGwlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$119.99",
    rating: "4.7/5",
    title: "Jump Master 3000"
  },
  {
    category: "Hiking",
    description: "Waterproof hiking boots with rugged traction soles.",
    image: "https://images.unsplash.com/photo-1549318916-f52df24d9bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlraW5nJTIwYm9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$129.99",
    rating: "4.8/5",
    title: "Trail Blazer XT"
  },
  {
    category: "Dress",
    description: "Elegant leather oxfords with cushioned insoles.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3MlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$99.99",
    rating: "4.3/5",
    title: "Executive Classic"
  },
  {
    category: "Running",
    description: "Breathable mesh running shoes with energy-return technology.",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$79.99",
    rating: "4.4/5",
    title: "Air Flow Lite"
  },
  {
    category: "Sandals",
    description: "Comfortable sport sandals with adjustable straps.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$39.99",
    rating: "4.1/5",
    title: "Summer Breeze"
  },
  {
    category: "Skateboarding",
    description: "Durable suede shoes with reinforced stitching for skateboarding.",
    image: "https://images.unsplash.com/photo-1595461135829-646afb5a6c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2thdGVib2FyZCUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$69.99",
    rating: "4.6/5",
    title: "Skate Pro II"
  },
  {
    category: "Trail Running",
    description: "Aggressive tread pattern for off-road running stability.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhaWwlMjBydW5uaW5nJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$109.99",
    rating: "4.7/5",
    title: "Mountain Crusher"
  },
  {
    category: "Minimalist",
    description: "Barefoot-style shoes with zero-drop soles.",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbmltYWxpc3QlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$74.99",
    rating: "4.0/5",
    title: "Natural Stride"
  },
  {
    category: "Work",
    description: "Steel-toe work boots with slip-resistant soles.",
    image: "https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGJvb3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$139.99",
    rating: "4.5/5",
    title: "Tough Guard"
  },
  {
    category: "Fashion",
    description: "Trendy platform sneakers with bold color accents.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$59.99",
    rating: "3.9/5",
    title: "Street Style Pro"
  },
  {
    category: "Running",
    description: "Carbon fiber plate for competitive race performance.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhaWwlMjBydW5uaW5nJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$199.99",
    rating: "4.9/5",
    title: "Elite Racer V2"
  },
  {
    category: "Walking",
    description: "Orthopedic walking shoes with arch support.",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$89.99",
    rating: "4.6/5",
    title: "Comfort Stride"
  },
  {
    category: "Golf",
    description: "Spikeless golf shoes with waterproof membrane.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZiUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$149.99",
    rating: "4.4/5",
    title: "Green Master"
  },
  {
    category: "Cycling",
    description: "Stiff-soled shoes for efficient power transfer.",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGluZyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$129.99",
    rating: "4.3/5",
    title: "Pedal Pro"
  },
  {
    category: "Snow Boots",
    description: "Insulated winter boots with thermal lining.",
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGJvb3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$159.99",
    rating: "4.7/5",
    title: "Arctic Trekker"
  },
  {
    category: "Cross Training",
    description: "Versatile shoes for gym workouts and HIIT training.",
    image: "https://images.unsplash.com/photo-1595461135829-646afb5a6c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2thdGVib2FyZCUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$94.99",
    rating: "4.5/5",
    title: "Flex Trainer"
  },
  {
    category: "Slip-Ons",
    description: "Easy-on shoes with memory foam insoles.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$54.99",
    rating: "4.2/5",
    title: "Quick Step"
  },
  {
    category: "Track & Field",
    description: "Lightweight spikes for competitive running.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWNrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&h=600&q=60",
    price: "$89.99",
    rating: "4.8/5",
    title: "Speed Spike Pro"
  }
];
const productContainer=document.getElementById("product-container");
        const product=shoeProducts[8];
productContainer.innerHTML = `
            <div class="card">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image}" class="product-image" alt="${product.title}" />
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ (${product.rating} reviews)</p>
            </div>
        `;

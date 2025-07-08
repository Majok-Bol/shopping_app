const productContainer = document.getElementById("product-container");
async function getProducts() {
    const response= await fetch('https://fakestoreapi.com/products');
  
    if(!response.ok){
        throw new Error("Error fetching data");
    }
    return await response.json();
    
        // .then(response => response.json())
        // .then(data => console.log(data));
}

function showProducts() {
    //show products in the html page
    productContainer.innerHTML = `
    <div class="card">
    <h2 class="category"></h2>
    <p class="description"></p> 
    <p class="product-image"></p>
    <p class="product-price"></p>
    <p class="ratings"></p>
    <p class="title"></p>
    </div>
    
    
    `

}

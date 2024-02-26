// const myArray = ["apple", "banana", "cherry", "grape"];

// // 1. Using forEach with an array
// myArray.forEach(item => {
//   console.log(item)
// })




















/* // Define an array of products (objects)
const products = [
  {
    title: 'Product 1',
    description: 'Description for Product 1',
    image: 'https://picsum.photos/200/150',
    price: 19.99,
    category: 'Electronics'
  },
  {
    title: 'Product 2',
    description: 'Description for Product 2',
    image: 'https://picsum.photos/200/150',
    price: 29.99,
    category: 'Clothing'
  },
  {
    title: 'Product 3',
    description: 'Description for Product 3',
    image: 'https://picsum.photos/200/150',
    price: 39.99,
    category: 'Electronics'
  }
];

// 1. Using forEach with an array
products.forEach(product => {
  console.log(product);
});

// 2. Using forEach with an object
// Print out only title and price
products.forEach(product => {
  console.log("Title:", product.title, "| Price:", product.price);
});

// 3. Using forEach with an array of objects (products)
products.forEach(product => {
  console.log(product.title, product.description, product.image, product.price, product.category);
});

// 4. Filter the array of objects on category
const filteredProducts = products.filter(product => product.category === 'Electronics');
console.log(filteredProducts);



// 5. Create a .card with title, description, image, price, and category
const createCard = product => {
  return `
    <div class="card">
      <h4>${product.title}</h4>
      <h2>${product.description}</h2>
      <img src="${product.image}" alt="Product Image">
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
    </div>
  `;
};

// Print out the card for each product using template strings
products.forEach(product => {
  console.log(createCard(product));
});

// productContainer is the element where the product cards will be inserted
const productContainer = document.querySelector('.row');

// Insert the generated HTML for each product card into the document
products.forEach(product => {
  productContainer.innerHTML += createCard(product);
});


// 6. Loop through filtered products and append HTML for each product card to the container
// filteredProducts.forEach(product => {
//   productContainer.innerHTML += createCard(product);
// });

 */
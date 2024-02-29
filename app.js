anime({

  //for drop down of text (animation)
  // targets: '.text',
  // opacity: [0, 1],
  // translateY: [-100, 0],
  // translateX: [400, 0], 
  // easing: "easeOutExpo",
  // duration: 1800,
  // delay: (el, i) => {
  //  // console.log(i, "i", el, "el")
  //   return 150 * (i + 1)
  // }, 
  // // delay: anime.stagger(400), // delay each element by 100ms instead of making our own delay function
  // endDelay: 500
  


  // stroke drawing animation
  //////////////////////////// DRAW CLOUD && LETTERS
  // targets: '.path',
  // strokeDashoffset: [anime.setDashoffset, 0], // -10 for fun + loop true
  // easing: 'linear',
  // duration: 2500,
  // delay: function(el, i) { // i is the index of the current element.
  //   console.log(el, "i:", i)
  //   return i * 50 
  //   },
  // direction: 'alternate',
  // loop: false,
  
    //////// DRAW LETTERS CHANGE COLOR AND FILL
  // color: '#23a6ba', //['#fff', '#23a6ba'], 
  // // color change
  // fill: ['#999999', '#333333'],  // fill
});

// const myArray = ['Apple', 'Banana', 'Cherry'];

// // 1. Using forEach with an array
// myArray.forEach(item => {
//   console.log(item);
// })

//  const products = [
//   {
//     title: "Product 1",
//     description: "Description for Product 1",
//     image: "https://picsum.photos/200/150",
//     price: 19.99,
//     category: "Electronics"
//   },
//   {
//     title: "Product 2",
//     description: "Description for Product 2",
//     image: "https://picsum.photos/200/150",
//     price: 9.99,
//     category: "Clothing"
//   },
//   {
//     title: "Product 3",
//     description: "Description for Product 3",
//     image: "https://picsum.photos/200/150",
//     price: 29.99,
//     category: "Electronics"
//   }
// ];


// products.forEach(product => {
//   console.log(product);
// })

// products.forEach(product => {
//   console.log(`Title: ${product.title} - Price: ${product.price}`);
// })

//  const createCard = (product) => {
//   return `
//     <div class="card">
//       <h4>${product.title}</h4>
//       <h2>${product.description}</h2>
//       <img src="${product.image}" />
//       <p>Price: £${product.price}</p>
//       <p>Category: ${product.category}</p>
//     </div>
//   `;
// } 

let objectofStuff = {
  productsOne: [
   {
     title: "Product 1",
     description: "Description for Product 1",
     image: "https://picsum.photos/200/150",
     price: 19.99,
     category: "Electronics"
   },
   {
     title: "Product 2",
     description: "Description for Product 2",
     image: "https://picsum.photos/200/150",
     price: 9.99,
     category: "Clothing"
   },
   {
     title: "Product 3",
     description: "Description for Product 3",
     image: "https://picsum.photos/200/150",
     price: 29.99,
     category: "Electronics"
   }
 ],
 productsTwo: [
  {
    title: "Product 1",
    description: "Description for Product 1",
    image: "https://picsum.photos/200/150",
    price: 19.99,
    category: "Electronics"
  },
  {
    title: "Product 2",
    description: "Description for Product 2",
    image: "https://picsum.photos/200/150",
    price: 9.99,
    category: "Clothing"
  },
  {
    title: "Product 3",
    description: "Description for Product 3",
    image: "https://picsum.photos/200/150",
    price: 29.99,
    category: "Electronics"
  }
],
 createCard(product) {
   return `
     <div class="card">
       <h4>${product.title}</h4>
       <h2>${product.description}</h2>
       <img src="${product.image}" />
       <p>Price: £${product.price}</p>
       <p>Category: ${product.category}</p>
     </div>
   `;
 },
 createCardTwo(product) {
  return `
    <div class="card">
      <h4 class="text">${product.title}</h4>
      <h2>${product.description}</h2>
      <img src="${product.image}" />
      <p>Price: £${product.price}</p>
      <p>Category: ${product.category}</p>
    </div>
  `;
 }
}

// products.forEach(product => {
//   console.log(createCard(product))
// })
const productContainer = document.querySelector(".row")
// products.forEach(product => {
//   productContainer.innerHTML += createCard(product)
// })



const filteredProducts = objectofStuff.productsOne.filter(product => product.category == "Electronics")

console.log(filteredProducts)

filteredProducts.forEach(product => {
  productContainer.innerHTML += objectofStuff.createCardTwo(product)
})



/**
 * 
*/






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
// – взяти https://dummyjson.com/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// id	1
// products	(4)[ {…}, {…}, {…}, {…} ]
// total	13037.88
// discountedTotal	11510.81
// userId	1
// totalProducts	4
// totalQuantity	12
const cartsDiv = document.getElementById('carts');

fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(cartsObject => {
        const { carts } = cartsObject;
        
        for (const cart of carts) {
            
            const div = document.createElement('div');
            div.classList.add('cart-container');
            
            const divWithInfo = document.createElement('div');
            
            divWithInfo.innerText = `
id: ${cart.id}
total: ${cart.total}
discountedTotal: ${cart.discountedTotal}
userId: ${cart.userId}
totalProducts: ${cart.totalProducts}
totalQuantity: ${cart.totalQuantity}

products:
${cart.products.map(product =>
                `${product.title}  price: ${product.price}  quantity: ${product.quantity}`
            ).join('\n')}
`;
            
            div.append(divWithInfo);
            cartsDiv.appendChild(div);
        }
    });

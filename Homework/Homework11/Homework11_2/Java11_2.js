 // https://dummyjson.com/recipes
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
 
 const cartsDiv = document.getElementById('carts');

 
 fetch(`https://dummyjson.com/recipes`)
 .then(response => response.json())
 .then(recipesObject => {
     const {recipes } = recipesObject;
    
     for (const cart of recipes) {
         const div = document.createElement('div');
         div.classList.add('cart-container');
         
         // const divWithInfo = document.getElementById('carts');
         
         div.innerHTML = `
         
             id: ${cart.id}
             name: ${cart.name}
             ingredients:
            <ul>
                    ${cart.ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
             instructions: ${cart.instructions}
             prepTimeMinutes: ${cart.prepTimeMinutes}
             cookTimeMinutes: ${cart. cookTimeMinutes}
             servings: ${cart.servings}
             difficulty: ${cart. difficulty}
             cuisine: ${cart.cuisine}
             caloriesPerServing: ${cart. caloriesPerServing}
         
         
         
         
         
         
         `;
         // div.appendChild(divWithInfo);
         cartsDiv.appendChild(div);
     }
 
 
 })
 
 
 //
 // id	1
 // name
 // ingredients
 // instructions
 // prepTimeMinutes
 // cookTimeMinutes
 // servings
 // difficulty
 // cuisine
 // caloriesPerServing
 
 
 

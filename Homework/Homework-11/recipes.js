// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні
// бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(console.log);

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            const recipesContainer = document.getElementById('recipes-container');
            data.recipes.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.innerHTML = `
                    <h2>${recipe.name}</h2>
                    <p>Id: ${recipe.id}</p>
                    <p>Calories: ${recipe.caloriesPerServing}</p>
                    <p>Cook Time Minutes: ${recipe.cookTimeMinutes}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <p>Instructions: ${recipe.instructions}</p>
                    <img src="${recipe.image}" alt="">
                     

                `;
                recipesContainer.appendChild(recipeDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});

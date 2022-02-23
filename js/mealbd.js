const searchFood = () => {
    const foodFeild = document.getElementById('food-feild');
    const foodFeildText = foodFeild.value;
    // console.log(foodFeildText)
    foodFeild.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodFeildText}`

    fetch(url)
        .then(res => res.json())
        .then(data => getValue(data.meals))
}

const getValue = meals => {
    meals.forEach(meal => {
        // console.log(meal)
        const searchResult = document.getElementById('search-result');
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="mealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text"></p>
            </div>
        </div>
        `;
        searchResult.appendChild(div)
    })
}

const mealDetails = mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealDocument(data.meals[0]))
   
}

const mealDocument = meal => {
    console.log(meal)
    const mealDiscription = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('newDiv')
    div.innerHTML = `
        <div class="card mb-3 mx-auto w-50">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
        </div>
    `
    mealDiscription.appendChild(div)
}
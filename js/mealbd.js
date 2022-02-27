const searchFood = () => {
    
    const foodFeild = document.getElementById('food-feild');
    
    const foodFeildText = foodFeild.value;
    // console.log(foodFeildText)
   if(foodFeild.value !=''){
    foodFeild.value = ''
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodFeildText}`

    fetch(url)
        .then(res => res.json())
        .then(data => getValue(data.meals))
        .catch(error => console.log(error))

   }
}

const getValue = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent=''

    
    meals?.forEach(meal => {
        // console.log(meal)
       
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
    // console.log(meal)
    const mealDiscription = document.getElementById('alart-box');
    mealDiscription.classList.remove('d-none');
    document.body.style.overflowY='hidden'
    mealDiscription.textContent =''
    const div = document.createElement('div');
    div.classList.add('newDiv')
    div.innerHTML = `
         <div class="card mb-3 mx-auto" style="max-width: 80%;">
            <div class="row g-0 align-items-center">
                <div class="col-md-4">
                    <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${(meal.strInstructions).slice(0,900)}.</p>
                    </div>
                </div>
            </div>
        </div>
        
    `
    mealDiscription.appendChild(div)
}

const detailList = document.getElementById('alart-box');
detailList.addEventListener('click',function(){
    detailList.classList.add('d-none')
    document.body.style.overflowY='visible'

})
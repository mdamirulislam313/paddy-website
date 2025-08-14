console.log('hallo')
// Fetch load and show categories on html

// Create loadCategories
const loadCategories = ()=>{
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategories(data.categories))
    .catch((error)=>console.log(error))
}


// Create DisplayCategories
const displayCategories = (categories)=>{
    const category = document.getElementById('category-button')
   categories.forEach(item =>{
    console.log(item)
    // create the button
    const button= document.createElement('button')
    button.classList= "bg-[#0E7A95] rounded-full h-8 w-16 mt-2 lg:h-16 w-36 lg:mt-20 text-white hover:bg-[#09666A] transition text-center w-11/12 mx-auto lg:mt-32 flex flex-col items-center";
    button.innerText = item.category
    // add button category container
    category.append(button);
   })
}
loadCategories()
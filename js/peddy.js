
// Fetch load and show categories on html

// Create loadCategories
const loadCategories = ()=>{
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategories(data.categories))
    .catch((error)=>console.log(error))
}// Fetch and show all pets
const loadDetailsById = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then((data) => {
            console.log('✅ API Result:', data); // Debugging
            displayDetails(data.pets); // ✅ Correct property
        })
        .catch((error) => console.log(error));
};

// Display all pets in card format
const displayDetails = (petList) => {
  const detailsContainer = document.getElementById("pet-details");
  detailsContainer.innerHTML = "";

  // কেবল প্রথম 3টি পেট দেখানো
  petList.slice(0, 3).forEach((pet) => {
    const card = document.createElement("div");
    card.classList = "col-span-1 bg-white rounded-lg shadow-md overflow-hidden border";

    card.innerHTML = `
      <img src="${pet.image}" alt="${pet.pet_name}" class="w-full h-56 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-bold">${pet.pet_name}</h3>
        <p class="text-sm text-gray-600">Breed: ${pet.breed}</p>
        <p class="text-sm text-gray-600">Birth: ${pet.date_of_birth || 'N/A'}</p>
        <p class="text-sm text-gray-600">Gender: ${pet.gender || 'N/A'}</p>
        <p class="text-sm text-gray-600">Price: $${pet.price || 'N/A'}</p>
        <div class="mt-4 flex justify-between">
          <button class="px-4 py-1 border border-[#0E7A95] text-[#0E7A95] rounded hover:bg-[#0E7A95] hover:text-white">Adopt</button>
          <button class="px-4 py-1 border border-[#0E7A95] text-[#0E7A95] rounded hover:bg-[#0E7A95] hover:text-white">Details</button>
        </div>
      </div>
    `;

    detailsContainer.appendChild(card);
  });
};


// Call function on page load
loadDetailsById();


// Create DisplayCategories
const displayCategories = (categories)=>{
    const category = document.getElementById('category-button')
   categories.forEach((item) =>{
    // console.log(item)
    // create the button
    const button= document.createElement('button')
    button.classList= "bg-[#0E7A95] rounded-full h-8 w-12 mt-2 lg:h-16 w-36 lg:mt-20 text-white hover:bg-[#09666A] transition text-center w-11/12 mx-auto flex flex-col items-center lg:flex items-center justify-center";
    button.innerText =  item.category
    // add button category container
    category.append(button);
   })
}

loadCategories()
loadDetailsById()
// Function to fetch data from the API
function fetchDataFromAPI() {
  return fetch("http://localhost:3000/drinks")
    .then(response => response.json())
    .catch(error => {
      console.error('Failed to fetch data from API', error);
    });
}

// Display the fetched data from the API on the page
function displayDataFromAPI(data) {
  const apiContainer = document.getElementById('api-container');
  if (apiContainer) {
    apiContainer.innerText = JSON.stringify(data, null, 2);
  } else {
    console.error('Element with id "api-container" not found');
  }
}

// Fetch data from the API and display it on page load
fetchDataFromAPI()
  .then(data => {
    displayDataFromAPI(data);
  });

// Event listener for form submission - List Cocktails
document.getElementById("list-cocktails-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const firstLetterInput = document.getElementById("cocktail-first-letter-input").value;

  // Fetch data based on the first letter
  fetchDataFromAPI()
    .then(data => {
      const filteredData = data.filter(drink => drink.strDrink.charAt(0).toLowerCase() === firstLetterInput.toLowerCase());
      displayDataFromAPI(filteredData);
    });
});

// Event listener for form submission - Search by Ingredient
document.getElementById("search--form").addEventListener("submit", function(event) {
  event.preventDefault();
  const ingredientInput = document.getElementById("ingredient-search-input").value;

  // Fetch data based on the ingredient name
  fetchDataFromAPI()
    .then(data => {
      const filteredData = data.filter(drink => drink.strIngredient1.toLowerCase().includes(ingredientInput.toLowerCase()));
      displayDataFromAPI(filteredData);
    });
});

// Callback and event listener for a button click
function handleButtonClick() {
  alert("Button clicked!");
}
document.getElementById("button").addEventListener("click", handleButtonClick);

// Callback and event listener for a mouseover event
function handleMouseOver() {
  console.log("Mouse over event triggered!");
}
document.getElementById("api-container").addEventListener("mouseover", handleMouseOver);

// Callback and event listener for a keydown event
function handleKeyDown(event) {
  console.log("Key down event triggered!", event.key);
}
document.addEventListener("keydown", handleKeyDown);
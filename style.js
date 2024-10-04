//  Create Load Categories

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.error(error));
};

// Create Display Categories

const displayCategories = (categories) => {
const categoryButton =document.getElementById('show-category-button');    
  categories.forEach((item) => {

    // Create a Button
    const button =document.createElement('button')
    button.classList ="btn";
    button.innerText =item.category;
   categoryButton.appendChild(button)
    
  });
};

loadCategories();

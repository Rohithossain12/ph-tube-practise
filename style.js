//  Create Load Categories

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.error(error));
};


//  Load All Videos
 const loadAllVideos = () => {
    fetch(" https://openapi.programming-hero.com/api/phero-tube/videos")
      .then((response) => response.json())
      .then((data) =>displayVideos(data.videos))
      .catch((error) => console.error(error));
  };
  

// create display videos

const displayVideos =(videos) =>{
const section =document.getElementById('videos');
videos.forEach((video) =>{
const div =document.createElement('div');
div.classList ="card card-compact"
div.innerHTML =
`
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>


`
section.appendChild(div)

})

}



// Create Display Categories

const displayCategories = (categories) => {
  const categoryButton = document.getElementById("show-category-button");
  categories.forEach((item) => {

    // Create a Button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoryButton.appendChild(button);
  });
};

loadCategories();
loadAllVideos();
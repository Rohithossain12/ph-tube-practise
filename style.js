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
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.error(error));
};

function getTime (time){
  const hour =parseInt (time/3600);
  let remaining =time % 3600;
  const minute = parseInt (remaining/60)
  return `${hour} hour ${minute} minute  ago`
  
  }
  



// create display videos

const displayVideos = (videos) => {
  const section = document.getElementById("videos");
  videos.forEach((video) => {
    const div = document.createElement("div");
    div.classList = "card card-compact shadow-lg";
    div.innerHTML = `
  <figure class="h-[200px] relative" >
    <img
      src="${video.thumbnail}"
      class="h-full w-full object-cover "
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class ="absolute right-2 bottom-2 rounded p-1 bg-black text-white text-sm" >${ getTime(video.others.posted_date)}</span>`
      }
  </figure>
 <div class="flex px-0 py-2 gap-2" >
 <div>
  <img class="w-10 h-10 object-cover rounded-full" src=${
    video.authors[0].profile_picture
  } />
 </div>

 <div>
 <h2 class="font-bold" >${video.title}</h2>
 <div class="flex items-center gap-2" >
 <p class="text-gray-400" >${video.authors[0].profile_name}</p>
 ${
   video.authors[0].verified === true
     ? "<img class='w-5' src=https://img.icons8.com/?size=64&id=2AuMnRFVB9b1&format=png></img>"
     : ""
 }
 
 </div>
 <p class="text-gray-400 text-sm" >${video.others.views} </p>
 </div>

 </div>

`;
    section.appendChild(div);
  });
};

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

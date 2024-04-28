const imageSources = [
  "assets/trail.jpg",
  "assets/lakesunset.jpg",
  "assets/cabin.jpg",
  "assets/doe.jpg",
  "assets/starrynight.jpg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  var thumbnail = document.createElement("img");
  // 1.2 Customize the element
  thumbnail.src = imageSource;
  thumbnail.classList.add("thumbnail");
  // 1.3 Append the element
  document.getElementById("thumbnail-container").appendChild(thumbnail);
  // 1.4 Add the onclick
  thumbnail.onclick = function() {
    document.getElementById("fullsize-image").src = imageSource;
  };
}

function addAllThumbnails(imageSources) {
  // 2.1 Loop through imageSources
  for (var i = 0; i < imageSources.length; i++) {
    // 2.2 Call addThumbnail each iteration
    addThumbnail(imageSources[i]);
  }
}

// 2.3 Call addAllThumbnails with the imageSources array
addAllThumbnails(imageSources);


// LevelUp Display the first image on page load
window.onload = function() {
  document.getElementById("fullsize-image").src = imageSources[0];
};


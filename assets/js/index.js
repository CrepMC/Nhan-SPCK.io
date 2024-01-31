// const searchButton = document.getElementById("search-icon");

// searchButton.addEventListener("click", function(){
//       // Kiểm tra xem màu nền có là lightblue không
//   if (searchButton.style.backgroundColor === "lightblue") {
//     // Nếu có, thiết lập màu nền mới
//     searchButton.style.backgroundColor = "lightcoral";
//   } else {
//     // Nếu không, thiết lập màu nền mặc định
//     searchButton.style.backgroundColor = "lightblue";
//   }
// })

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.querySelector(".fa-caret-down").addEventListener('hover', function () {
  document.querySelector("tet-gif-item").style.display = "block"
});
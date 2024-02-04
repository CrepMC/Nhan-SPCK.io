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

function handleMouseOver(caretId, itemClass) {
  document.getElementById(caretId).addEventListener('mouseover', function () {
    document.querySelector('.' + itemClass).style.display = 'flex';
  });

  document.getElementById(caretId).addEventListener('mouseout', function () {
    document.querySelector('.' + itemClass).style.display = 'none';
  });
}


handleMouseOver('caret-down-1', 'tet-gift-item');
handleMouseOver('caret-down-2', 'tet-gift-item');
handleMouseOver('tet-gift-item', 'tet-gift-item');
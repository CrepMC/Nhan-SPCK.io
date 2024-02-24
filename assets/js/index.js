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
  document.addEventListener('click', function hideContextMenu() {
    contextMenu.style.display = 'none';
    // document.removeEventListener('click', hideContextMenu);
  })
});

function handleMouseOver(caretId, itemClass) {
  document.querySelector(caretId).addEventListener('mouseover', function () {
    document.querySelector('.' + itemClass).style.display = 'flex';
  });

  document.querySelector(caretId).addEventListener('mouseout', function () {
    document.querySelector('.' + itemClass).style.display = 'none';
  });
}

handleMouseOver('.tet-gift-baskets', 'tet-gift-item');
handleMouseOver('.tet-gift', 'tet-gift-item');
handleMouseOver('#caret-down-1', 'tet-gift-item');
handleMouseOver('#caret-down-2', 'tet-gift-item');
handleMouseOver('#caret-down-3', 'tet-gift-item');
handleMouseOver('#tet-gift-item', 'tet-gift-item');

function performSearch() {
  // var searchTerm = document.querySelector(".search-input").value;

  // Check if the search term is not empty

  // Construct the search URL
  // var searchURL = "../page/search/" + encodeURIComponent(searchTerm);
  var searchURL = "./page/search/#"
  // Redirect to the search results page
  window.location.href = searchURL;
}

// Script for product filtering
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    // Add filtering logic here
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   var fixedElement = document.getElementById('filter');
//   var scrollTriggerPoint = 300; // Scroll point to change position
//   var isStopped = false;

//   if (fixedElement) {
//     window.addEventListener('scroll', function () {
//       if (isStopped) return;
//       var scrollY = window.scrollY;

//       if (scrollY >= scrollTriggerPoint) {
//         fixedElement.style.position = 'absolute';
//         isStopped = true;
//       } else {
//         fixedElement.style.position = 'fixed';
//       }
//     });
//   } else {
//     console.error("Element with ID 'fixedElement' not found");
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('filter');
  var headerOffset = header.offsetTop;

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;

    if (scrollY >= "1077") {
      header.style.top = '1077';
      header.style.position = 'absolute';
    } else if (scrollY > headerOffset) {
      header.style.top = '0';
      header.style.position = 'fixed';
    } else {
      header.style.top = '160px';
      header.style.position = 'absolute';
    }
  });
});
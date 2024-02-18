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
handleMouseOver('caret-down-3', 'tet-gift-item');
handleMouseOver('tet-gift-item', 'tet-gift-item');

function performSearch() {
    var searchTerm = document.querySelector(".search-input").value;

    // Check if the search term is not empty

    // Construct the search URL
    var searchURL = "../../page/search/" + encodeURIComponent(searchTerm);

    // Redirect to the search results page
    window.location.href = searchURL;
}

function clickButton() {
    document.getElementById('main-page').addEventListener('mousedown', function () {
        document.getElementById('main-page').style.transition = 'all 0s ease-in-out'
        document.getElementById('main-page').style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0.37)'
        document.getElementById('main-page').style.translate = '0 2px'
    })
    document.getElementById('main-page').addEventListener('mouseup', function () {
        document.getElementById('main-page').style.transition = 'all 0s ease-in-out'
        document.getElementById('main-page').style.boxShadow = '0px 2px 0px 2px rgba(0, 0, 0, 0.37)'
        document.getElementById('main-page').style.translate = '0 -2px'
    })
};

clickButton()
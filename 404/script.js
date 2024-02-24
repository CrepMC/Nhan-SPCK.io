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

function performSearch() {
    // var searchTerm = document.querySelector(".search-input").value;

    // Check if the search term is not empty

    // Construct the search URL
    // var searchURL = "../page/search/" + encodeURIComponent(searchTerm);
    var searchURL = "./page/search/#"
    // Redirect to the search results page
    window.location.href = searchURL;
}

handleMouseOver('caret-down-1', 'tet-gift-item');
handleMouseOver('caret-down-2', 'tet-gift-item');
handleMouseOver('tet-gift-item', 'tet-gift-item');
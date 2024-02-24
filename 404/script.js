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
function saveItems() {
    var pageKey = 'items_' + window.location.pathname;
    localStorage.setItem(pageKey, JSON.stringify(items));
}

function loadItems() {
    var pageKey = 'items_' + window.location.pathname;
    var savedItems = localStorage.getItem(pageKey);
    if (savedItems) {
        items = JSON.parse(savedItems);
        renderItems();
    }
}
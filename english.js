function addItem() {
    // ...other code to get topic, content

    // Retrieve and parse the existing array from localStorage or create a new one
    var existingItems = JSON.parse(localStorage.getItem('items_' + pageName) || '[]');

    // Add new item to the array
    existingItems.push({ topic: topic, content: content /*, file should be handled separately */ });

    // Save the updated array back to localStorage
    localStorage.setItem('items_' + pageName, JSON.stringify(existingItems));

    // ...rest of your function
}

function renderItems() {
    // Clear the container
    container.innerHTML = '';

    // Retrieve and parse the existing array from localStorage
    var existingItems = JSON.parse(localStorage.getItem('items_' + pageName) || '[]');

    // Loop through each item in the array and create its element
    existingItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('item');
        // ...set innerHTML with item details
        // Note: Handling of file should be separate as mentioned
        container.appendChild(itemElement);
    });
}
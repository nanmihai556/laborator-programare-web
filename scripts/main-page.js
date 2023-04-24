const list = document.getElementById('myList');
const button = document.getElementById('showMore');
const items = Array.from(list.children);

// Hide all but the first 2 items
items.slice(2).forEach(item => {
    item.style.display = 'none';
});

// Add click event listener to button
button.addEventListener('click', () => {
    // Show all hidden items
    items.slice(2).forEach(item => {
        item.style.display = '';
    });

    // Hide the button
    button.style.display = 'none';
});
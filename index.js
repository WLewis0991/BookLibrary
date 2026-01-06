//Books in library array
const myLibrary = [];

const addBook = document.getElementById('addBookBtn');
const bookAddDialog = document.getElementById('addBookDialog');
const cancelAddBook = document.getElementById('cancelBtn');

cancelAddBook.addEventListener('click', (e) => {
    e.preventDefault();
    bookAddDialog.close();
});
addBook.addEventListener('click', (e) => {
    e.preventDefault();
    bookAddDialog.showModal();
});

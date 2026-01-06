//Books in library array
const myLibrary = [];

//Book Constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

//Add Book to library function
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

//Sample Books

const sampleBooks = [
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, read: true},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, read: false},
    {title: '1984', author: 'George Orwell', pages: 328, read: true},
    {title: 'Pride and Prejudice', author: 'Jane Austen', pages: 279, read: false},
    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 214, read: true}
];

sampleBooks.forEach(book => {
    addBookToLibrary(book.title, book.author, book.pages, book.read);
    displayBooks();
});

//Display Books

function displayBooks() {
    const libraryContainer = document.getElementById('booksTableBody');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book) => {
        const bookRow = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;
        bookRow.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        bookRow.appendChild(authorCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;
        bookRow.appendChild(pagesCell);

        const readCell = document.createElement('td');
        const readCheckbox = document.createElement('input');
        readCheckbox.type = 'checkbox';
        readCheckbox.checked = book.read;
        readCheckbox.addEventListener('change', () => {
            book.read = readCheckbox.checked;
        });
        readCell.appendChild(readCheckbox);
        bookRow.appendChild(readCell);

        const deleteCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => {
            const bookIndex = myLibrary.findIndex(b => b.id === book.id);
            if (bookIndex > -1) {
                myLibrary.splice(bookIndex, 1);
                displayBooks();
            }
        });
        deleteCell.appendChild(deleteBtn);
        bookRow.appendChild(deleteCell);

        libraryContainer.appendChild(bookRow);
    });
}
displayBooks

//Add Book Dialog Box Functionality


const addBook = document.getElementById('addBookBtn');
const bookAddDialog = document.getElementById('addBookDialog');
const cancelAddBook = document.getElementById('cancelBtn');
const submitAddBook = document.getElementById('submitBtn');

submitAddBook.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const readCheckbox = document.getElementById('read').checked;
    const read = readCheckbox ? true : false;   


    addBookToLibrary(title, author, pages, read);
    displayBooks();

    document.getElementById('addBookForm').reset();
    bookAddDialog.close();
    

}); 

addBook.addEventListener('click', (e) => {
    e.preventDefault();
    bookAddDialog.showModal();
});



cancelAddBook.addEventListener('click', (e) => {
    e.preventDefault();
    bookAddDialog.close();
});



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
});

console.log(myLibrary);


const addBook = document.getElementById('addBookBtn');
const bookAddDialog = document.getElementById('addBookDialog');
const cancelAddBook = document.getElementById('cancelBtn');

addBook.addEventListener('click', (e) => {
    e.preventDefault();
    bookAddDialog.showModal();
});

cancelAddBook.addEventListener('click', (e) => {
    e.preventDefault();
    bookAddDialog.close();
});



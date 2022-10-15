let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
}

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead));
}

let title = 'Yangchen';
let author = 'Yee';
let pages = 300;
let isRead = true;

addBookToLibrary(title, author, pages, isRead);

console.log(myLibrary);

const cardContainer = document.getElementById('card-container');
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

addBookToLibrary('Yangchen', 'Yee', 300, true);
addBookToLibrary('Harry Potter', 'sumbitch', 1000, false);
console.log(myLibrary);

myLibrary.forEach(book => {
    console.log(book.title);

    const card = document.createElement('div');
    cardContainer.append(card);

    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const isRead = document.createElement('div');

    title.textContent = book.title;
    author.textContent = 'by ' + book.author;
    pages.textContent = book.pages + ' pages';
    if(book.isRead === true) {
        isRead.textContent = 'Read';
    } else {
        isRead.textContent = 'Unread';
    }

    card.append(title);
    card.append(author);
    card.append(pages);
    card.append(isRead);
})
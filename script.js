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

function listBook() {
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
}

listBook();

const addBookBtn = document.getElementById('addNewBook');

function addBook() {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let isRead = document.getElementById('isRead');
    
    addBookToLibrary(title.value, author.value, pages.value, isRead.checked);

    title.value = '';
    author.value = '';
    pages.value = '';
    isRead.checked = false;

    console.log(myLibrary);
    removeBookList();
    listBook();
}

addBookBtn.addEventListener('click', addBook);

function removeBookList() {
    let child = cardContainer.lastElementChild;
    while (child) {
        cardContainer.removeChild(child);
        child = cardContainer.lastElementChild;
    }
}
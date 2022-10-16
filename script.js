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

function listBook() {
    myLibrary.forEach(book => {    
        const card = document.createElement('div');
        cardContainer.append(card);
    
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const isRead = document.createElement('div');
        const removeBookBtn = document.createElement('button');
        removeBookBtn.classList.add('removeBookBtn');
    
        title.textContent = book.title;
        author.textContent = 'by ' + book.author;
        pages.textContent = book.pages + ' pages';
        if(book.isRead === true) {
            isRead.textContent = 'Read';
        } else {
            isRead.textContent = 'Unread';
        }
        removeBookBtn.textContent = 'Remove Book';
        removeBookBtn.value = book.title;
    
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(isRead);
        card.append(removeBookBtn);

        const removeBtns = document.querySelectorAll('.removeBookBtn');

        removeBtns.forEach(button => {
            button.addEventListener('click', () => {
                modifiedLibrary = myLibrary.filter(book => book.title != button.value);
                myLibrary = modifiedLibrary;
                refreshBookDisplay();
            })
        });
    })
}

function removeBookList() {
    let child = cardContainer.lastElementChild;
    while (child) {
        cardContainer.removeChild(child);
        child = cardContainer.lastElementChild;
    }
}

function refreshBookDisplay() {
    removeBookList();
    listBook();
    console.log(myLibrary);
}

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

    refreshBookDisplay();
}

const addBookBtn = document.getElementById('addNewBook');
addBookBtn.addEventListener('click', addBook);

listBook();


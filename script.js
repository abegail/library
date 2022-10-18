const cardContainer = document.getElementById('card-container');
let myLibrary = [];

function Book(index, title, author, pages, isRead) {
    this.index = index,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

function addBookToLibrary(index, title, author, pages, isRead) {
    myLibrary.push(new Book(index, title, author, pages, isRead));
}

// addBookToLibrary(0, 'Yangchen', 'Yee', 300, false);
// addBookToLibrary(1, 'Harry Potter', 'sumbitch', 1000, false);
// addBookToLibrary(2, 'Harry Potter iuwehgiw guh rgiuqhrg qrg uqrhg iqurhg iqerg erg', 'sumbitch i iuqrgh iurg qg', 1000, false);
// addBookToLibrary(3, 'Yangchen', 'Yee', 300, true);

function listBook() {
    myLibrary.forEach(book => {    
        const card = document.createElement('div');
        card.classList.add('card');
        cardContainer.append(card);
    
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const isRead = document.createElement('div');
        const toggle = document.createElement('input');
        toggle.setAttribute('type', 'checkbox');
        const removeBookBtn = document.createElement('button');

        const toggleHolder = document.createElement('div');
        toggleHolder.classList.add('toggle-holder');

        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
        isRead.classList.add('isRead');
        toggle.classList.add('toggle');
        removeBookBtn.classList.add('removeBookBtn');
    
        title.textContent = book.title;
        author.textContent = 'by ' + book.author;
        pages.textContent = book.pages + ' pages';
        isRead.textContent = 'I\'ve read this book';
        if(book.isRead === true) {
            // isRead.textContent = 'Read';
            card.classList.add('read');
            toggle.checked = true;
        } else {
            // isRead.textContent = 'Unread';
            toggle.checked = false;
        }
        toggle.textContent = 'Toggle Read';
        toggle.value = book.index;
        removeBookBtn.textContent = 'Remove Book';
        removeBookBtn.value = book.title;
    
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(toggleHolder);
        toggleHolder.append(isRead);
        toggleHolder.append(toggle);
        // card.append(isRead);
        // card.append(toggle);
        card.append(removeBookBtn);
    })
    const toggleBoxes = document.querySelectorAll('.toggle');
        toggleBoxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                myLibrary[checkbox.value].toggleRead();
                refreshBookDisplay();
              

        // checkbox.addEventListener('change', () => {
        //     myLibrary[checkbox.value].toggleRead();
        //     refreshBookDisplay();
        })
    })

    const removeBtns = document.querySelectorAll('.removeBookBtn');
    removeBtns.forEach(button => {
        button.addEventListener('click', () => {
            modifiedLibrary = myLibrary.filter(book => book.title != button.value);
            myLibrary = modifiedLibrary;
            refreshBookDisplay();
        })
    });
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
    // console.log(myLibrary);
}

function addBook() {
    let index = myLibrary.length;
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let isRead = document.getElementById('isRead');

    if(title.value === '' || author.value === '' || pages.value === '') {
        removeErrorMessage();
        let errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Please fill out all details.';
        bookForm.prepend(errorMessage);
    } else {
        addBookToLibrary(index, title.value, author.value, pages.value, isRead.checked);
        formContainer.classList.add('hidden');
        title.value = '';
        author.value = '';
        pages.value = '';
        isRead.checked = false;
        refreshBookDisplay();
        removeErrorMessage();
    }    
}

function removeErrorMessage() {
    const errorMessage = document.querySelector('.error-message');
    if(bookForm.contains(errorMessage)) {
        bookForm.removeChild(errorMessage);
    }
}

const addBookBtn = document.getElementById('addNewBook');
addBookBtn.addEventListener('click', addBook);

listBook();

// Add functionality to make form appear and disappear

const formContainer = document.querySelector('.form-container');
const showForm = document.getElementById('showAddBookForm');
showForm.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
})

const cancelAddBook = document.getElementById('cancelAddBook');
cancelAddBook.addEventListener('click', () => {
    formContainer.classList.add('hidden');
    removeErrorMessage();
})

formContainer.addEventListener('click', () => {
    formContainer.classList.add('hidden');
    removeErrorMessage();
})

const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('click', (event) => {
    event.stopPropagation();
})
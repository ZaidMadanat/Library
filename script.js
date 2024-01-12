const myLibrary = [];

const book_name = document.querySelector('#book_name');
const book_author = document.querySelector('#author');
const book_pages = document.querySelector('#pages');
const book_rating = document.querySelector('#rating');
const book_genre = document.querySelector('#genre');
const book_status = document.querySelector('#status');

const bookForm = document.getElementById('bookForm')
bookForm.addEventListener('submit', function(e) { 
    e.preventDefault();
    addBookToLibrary();
    bookForm.reset();
    displayBooks();
});



function Book(title, author, pages, rating, genre, isRead) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
    this.genre = genre;
    this.isRead = isRead;
}

function addBookToLibrary() { 
    const newBook = new Book(book_name.value, book_author.value, book_pages.value ,book_rating.value ,book_genre.value ,book_status.value);
    myLibrary.push(newBook);
}
function displayBooks() { 
    const books = document.querySelector('.books');
    myLibrary.forEach(book => { 
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Rating: ${book.rating}</p>
        <p>Genre: ${book.genre}</p>
        <p>Status: ${book.isRead}</p> 
        ` 
        books.appendChild(bookCard);
    })
}

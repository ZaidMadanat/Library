const myLibrary = [];

const book_name = document.querySelector('#book_name');
const book_author = document.querySelector('#author');
const book_pages = document.querySelector('#pages');
const book_rating = document.querySelector('#rating');
const book_genre = document.querySelector('#genre');
const book_status = document.querySelector('#status');
let counter = 0;

let total_pages = 0; 
let read_count = 0;
let total_hours = 0;
let total_minutes = 0; 
const stat_pages = document.querySelector('.stat-pages');
const stat_read = document.querySelector('.stat-read');
const stat_time = document.querySelector('.hours-read');

/* 
whole script revolves around the submit button, once pressed 
I add the book to the array, reset the data, and display the book as a "card" 
I then update the statistics each time.
*/
const bookForm = document.getElementById('bookForm')
bookForm.addEventListener('submit', function(e) { 
    e.preventDefault();
    addBookToLibrary();
    bookForm.reset();
    displayBooks();
    updateStatistics();
});
// Adding a personalized name to library when pressed
const nameAdd = document.querySelector('.lib');
const title = document.querySelector('.title span');
nameAdd.addEventListener('click', function(e) { 
    let name = prompt("What is the name of this Library?");
    title.textContent += name;
}, {once: true});

// Book Object Constructor
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
    const booksContainer = document.querySelector('.books');
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    book = myLibrary[counter];
    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Rating: ${book.rating}</p>
        <p>Genre: ${book.genre}</p>
        <p>Status: ${book.isRead}</p> 
    `;
    booksContainer.appendChild(bookCard);
    total_pages += parseInt(book.pages);
    counter++;
}

function updateStatistics() { 
    read_count += 1; 
    let temp = total_pages * 2;
    if (temp >= 60) { 
        total_hours = parseInt(temp / 60);
    }
    total_minutes = temp % 60;
    clearStats();
    stat_pages.textContent += "Pages: " + total_pages;
    stat_read.textContent += "Books Read: " + read_count;
    stat_time.textContent += "Total Time: " + total_hours + " hours " + total_minutes + " minutes";
}

//Clearing the stats after each update. 
function clearStats() { 
    stat_pages.textContent = "";
    stat_read.textContent = "";
    stat_time.textContent = "";
}

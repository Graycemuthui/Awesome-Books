import BookClass from './modules/javascript/book.js';
import showSection from './modules/javascript/nav.js';
import selectors from './modules/javascript/selectors.js';
import { DateTime } from './modules/javascript/luxon.min.js';


const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.getElementById('add-book-form');
  if (!form.reportValidity()) {
    return;
  }

  const newTitle = document.querySelector('#book-title-input').value;
  const newAuthor = document.querySelector('#book-author-input').value;
  const book = new BookClass();
  book.addBook(newTitle, newAuthor);
  form.reset();
});

/* eslint-disable */
let removeBook = (key) => {
  const book = new BookClass();
  book.removeBook(key);
};


selectors.listElement.addEventListener("click", (e) => {
  showSection(e, "lists");
});


selectors.addElement.addEventListener("click", (e) => {
  showSection(e, "add-book");
});


selectors.contactElement.addEventListener("click", (e) => {
  showSection(e, "contact-section");
});
/* eslint-enable */


window.onload = () => {
  const books = new BookClass();
  window.books = books;
  books.displayBooks();
};

const element = document.getElementById('current-date');
element.innerHTML = DateTime.now().toFormat('MMMM dd, yyyy hh:mm:ss a');

import BookClass from "./modules/javascript/book.js";
import showSection from "./modules/javascript/nav.js";
import selectors from "./modules/javascript/selectors.js";
import { DateTime } from "./modules/javascript/luxon.min.js";

// Lets get the add book button
const addButton = document.querySelector("#add-button");
// Lets add a click event listener with which we will perform the add logic for the new book
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.getElementById("add-book-form");
  if (!form.reportValidity()) {
    return;
  }
  // lets get the new title
  const newTitle = document.querySelector("#book-title-input").value;
  // now lets get the new author
  const newAuthor = document.querySelector("#book-author-input").value;
  // lets add it to the books object at this point
  const book = new BookClass();
  book.addBook(newTitle, newAuthor);
  // okay great. Lets reset the form now
  form.reset();
});

/* eslint-disable */
let removeBook = (key) => {
  const book = new BookClass();
  book.removeBook(key);
};

// Event listener for list menu
selectors.listElement.addEventListener("click", (e) => {
  showSection(e, "lists");
});

// Event listener for add new menu
selectors.addElement.addEventListener("click", (e) => {
  showSection(e, "add-book");
});

// Event listener for contact menu
selectors.contactElement.addEventListener("click", (e) => {
  showSection(e, "contact-section");
});
/* eslint-enable */

// load the form fields from local storage
window.onload = () => {
  const books = new BookClass();
  window.books = books;
  books.displayBooks();
};

// set the date in the page
const element = document.getElementById("current-date");
element.innerHTML = DateTime.now().toFormat("MMMM dd, yyyy hh:mm:ss a");

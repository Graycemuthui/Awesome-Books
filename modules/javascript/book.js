import BookSkeleton from './labels.js';

export default class BookClass {
  hasBooks = localStorage.getItem('books');

  books = [
    {
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
    },
    {
      title: 'Book 3',
      author: 'Author 3',
    },
    {
      title: 'Book 4',
      author: 'Author 4',
    },
    {
      title: 'Book 5',
      author: 'Author 5',
    },
    {
      title: 'Book 6',
      author: 'Author 6',
    },
  ];

  constructor() {
    // Lets create initial collection if there are no books in storage
    if (!this.hasBooks) {
      // Okay, now lets save books to local storage
      localStorage.setItem('books', JSON.stringify(this.books));
    } else {
      // We load the collection from storage if exists
      this.books = JSON.parse(this.hasBooks);
    }
  }

  displayBooks() {
    let bookHtml = '';
    for (let i = 0; i < this.books.length; i += 1) {
      bookHtml += `<div class="${
        i % 2 === 0 ? 'blue-container' : 'white-container'
      }" id="book-${i}">
          <p class="title-descr">${this.books[i].title} by ${
  this.books[i].author
}</p>
          <button class="btn" onclick ='window.books.removeBook(${i})'>Remove</button>
        </div>`;
    }

    document.querySelector('#books').innerHTML = bookHtml;
  }

  // Lets define our add book function
  addBook(title, author) {
    this.books.push(new BookSkeleton(title, author));
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  // Lets define our remove book function
  removeBook(key) {
    // lets remove the book
    this.books.splice(key, 1);
    // lets update the storage
    localStorage.setItem('books', JSON.stringify(this.books));
    // lets update the page
    const id = `book-${key}`;
    document.getElementById(id).remove();
    this.displayBooks();
  }
}

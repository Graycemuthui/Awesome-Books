export default class BookSkeleton {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.added_at = new Date().toLocaleDateString();
  }
}

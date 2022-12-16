import Book from './buk.js';

export default class Books {
  constructor() {
    this.head = null;
  }

  add(title, author) {
    const book = new Book(title, author);
    if (this.head === null) {
      this.head = book;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = book;
  }

  remove(title, author) {
    if (this.head === null) return;
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.title === title && current.author === author) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
      }
      previous = current;
      current = current.next;
    }
  }
}
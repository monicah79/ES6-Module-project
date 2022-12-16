import Books from './modules/buks.js';
import { date, options } from './modules/date.js';

let newBookList = new Books();

const showBooks = () => {
  const disBk = document.querySelector('.dis-bk');
  disBk.innerHTML = '';

  const buksArr = localStorage.getItem('buks') ? JSON.parse(localStorage.getItem('buks')) : [];
  let myBuk = buksArr.head;
  while (myBuk !== null) {
    const bukDiv = document.createElement('div');
    bukDiv.className = 'bkdiv';
    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = myBuk.title;
    bukDiv.appendChild(title);

    const author = document.createElement('p');
    author.className = 'author';
    author.textContent = myBuk.author;
    bukDiv.appendChild(author);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    const rmvBtnDiv = document.createElement('div');
    rmvBtnDiv.className = 'rmv-div';
    rmvBtnDiv.appendChild(removeBtn);
    bukDiv.appendChild(rmvBtnDiv);

    disBk.appendChild(bukDiv);
    disBk.classList.add('show-container');

    myBuk = myBuk.next;
  }
};

const addBtn = document.querySelector('.add-btn');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
addBtn.addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    newBookList.add(title.value, author.value);

    localStorage.setItem('buks', JSON.stringify(newBookList));
    title.value = '';
    author.value = '';
    showBooks();
  }
});

const saveBk = () => {
  const buksArr = JSON.parse(localStorage.getItem('buks'));

  if (buksArr !== null) {
    let bk = buksArr.head;

    if (bk === undefined) return;
    newBookList = new Books();
    while (bk !== null) {
      newBookList.add(bk.title, bk.author);
      bk = bk.next;
    }
  }
};

window.addEventListener('load', () => {
  showBooks();
  saveBk();
});

const removeBtn = document.querySelector('.dis-bk');

removeBtn.addEventListener('click', (e) => {
  const targetBuk = e.target.closest('.bkdiv');
  if (targetBuk !== null && targetBuk !== undefined) {
    const bukNodelist = targetBuk.childNodes;

    const [title, author] = bukNodelist;
    newBookList.remove(title.innerText, author.innerText);
    localStorage.removeItem('buks');

    localStorage.setItem('buks', JSON.stringify(newBookList));
    saveBk();
    showBooks();
  }
});

// date
const dateDiv = document.querySelector('.date');
const dateString = date.toLocaleString('en-US', options);
dateDiv.innerHTML = dateString;

// navigation functionality
const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.cntct');
const showBks = document.querySelector('.books-display');
const myh2 = document.querySelector('.h2');
const form = document.querySelector('.form');
const contactDiv = document.querySelector('.contact');

list.addEventListener('click', (e) => {
  e.preventDefault();
  showBks.classList.add('show');
  myh2.classList.remove('show');
  form.classList.remove('show');
  contactDiv.classList.remove('show');
});

addNew.addEventListener('click', (e) => {
  e.preventDefault();
  showBks.classList.remove('show');
  showBks.classList.add('hide');
  myh2.classList.add('show');
  form.classList.add('show');
  contactDiv.classList.remove('show');
});

contact.addEventListener('click', (e) => {
  e.preventDefault();
  showBks.classList.add('hide');
  showBks.classList.remove('show');
  myh2.classList.remove('show');
  form.classList.remove('show');
  contactDiv.classList.add('show');
});
import { DateTime } from './luxon.js';

const dateDiv = document.querySelector('.date');
export const date = DateTime.now();
export const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};
const dateString = date.toLocaleString('en-US', options);
dateDiv.innerHTML = dateString;

import throttle from 'lodash.throttle';

const element = document.querySelector('.feedback-form');
const message = document.querySelector('.feedback-form  textarea');
const email = document.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';

element.addEventListener('submit', onForm);
element.addEventListener('input', throttle(onMessage, 500));

populateMessage();
let formData = {};

function onForm(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onMessage(evt) {
  formData[evt.target.name] = evt.target.value;
  const saveDataEl = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, saveDataEl);
}

function populateMessage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const pasrsedSav = JSON.parse(savedMessage);
    let formData = {};
    formData = pasrsedSav;
    messageElement.value = pasrsedSav.message;
    email.value = pasrsedSav.email;
    console.log(pasrsedSav);
  }
}
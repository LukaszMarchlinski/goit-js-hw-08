// // // Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryItem = document.querySelector('.gallery');
const cardsMarkup = createColorCardsMarkup(galleryItems);
galleryItem.insertAdjacentHTML('beforeend', cardsMarkup);

galleryItem.addEventListener('click', onGalleryItemClick);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"
       alt="${description}" />
    </a> `;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
console.log(lightbox);

function onGalleryItemClick(evt) {
  evt.preventDefault();
  const isColorSwatchEl = evt.target.classList.contains('gallery__image');
  if (!isColorSwatchEl) {
    return;
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
}
console.log(galleryItems);
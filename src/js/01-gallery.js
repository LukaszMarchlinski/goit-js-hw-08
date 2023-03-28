// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");
//tworzenie galerii obrazków

const allItems = galleryItems.map((galleryItem) => {
    const item = `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`;
    return item;
})
    .join('');

gallery.innerHTML = allItems;

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
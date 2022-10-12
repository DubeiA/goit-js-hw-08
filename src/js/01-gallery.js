// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line

console.log(galleryItems);

function createGallery(images) {
    return images
        .map(image => `<a class="gallery__item" href="${image.original}">
                         <img class="gallery__image"
                          src=${image.preview}
                          alt=${image.description} />
                       </a>`)
        .join('');
}

const addGallery = createGallery(galleryItems);

const divEl = document.querySelector('.gallery')

divEl.insertAdjacentHTML('beforeend', addGallery);


const gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

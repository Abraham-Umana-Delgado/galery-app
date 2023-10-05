import dataPhotos from "../data/dataPhotos";
import { loadMainImage } from "./loadMainImage";
const galery = document.getElementById('galeria');
const categoryContainer = document.getElementById('categorias');

categoryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.closest('a')) {
        galery.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const activeCategory = event.target.closest('a').dataset.category;
        galery.dataset.category = activeCategory;

        const photographys = dataPhotos.photos[activeCategory];
        const carrousel = document.querySelector('.galeria__carousel-slides');
        const { id, name, description, source } = photographys[0];
        loadMainImage(id, name, source, description);

        carrousel.innerHTML = '';

        photographys.forEach((photo) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${photo.source}" data-id="${photo.id}" alt="" />
        </a>
    `;

            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});
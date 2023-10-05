import dataPhotos from '../data/dataPhotos';
const galery = document.getElementById('galeria');

const loadMainImage = (id, name, source, description) => {
    galery.querySelector('.galeria__imagen').src = source;
    galery.querySelector('.galeria__imagen').dataset.id = id;
    galery.querySelector('.galeria__titulo').innerText = name;
    galery.querySelector('.galeria__descripcion-imagen-activa').innerText = description;

    const activeCategory = galery.dataset.category;
    const photographys = dataPhotos.photos[activeCategory];

    let indexActiveImage;

    photographys.forEach((photo, index) => {
        if (photo.id === id) {
            indexActiveImage = index;
        }
    });

    if (galery.querySelectorAll('.galeria__carousel-slide').length > 0) {
        galery.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        galery.querySelectorAll('.galeria__carousel-slide')[indexActiveImage].classList.add('galeria__carousel-slide--active');
    }
};

const loadImageDirection = (direction) => {
    const activeCategory = galery.dataset.category;
    const photographys = dataPhotos.photos[activeCategory];
    let indexActiveImage;
    const idActiveImage = parseInt(galery.querySelector('.galeria__imagen').dataset.id);

    photographys.forEach((photo, index) => {
        if (photo.id === idActiveImage) {
            indexActiveImage = index;
        }
    });

    if (direction === 'next') {
        if (photographys[indexActiveImage + 1]) {
            const { id, name, description, source } = photographys[indexActiveImage + 1];
            loadMainImage(id, name, source, description);
        } else {
            alert('No hay más fotos para mostrar, está es la ultima foto');
        }
    } else if (direction === 'former') {
        if (photographys[indexActiveImage - 1]) {
            const { id, name, description, source } = photographys[indexActiveImage - 1];
            loadMainImage(id, name, source, description);
        } else {
            alert('No hay más fotos para mostrar, está es la primera foto');
        }
    }

}

export { loadMainImage, loadImageDirection }
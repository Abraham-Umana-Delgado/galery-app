const galery = document.getElementById('galeria');

const closeGalery = () => {
    galery.classList.remove('galeria--active');
    document.body.style.overflow = '';
}

export default closeGalery;